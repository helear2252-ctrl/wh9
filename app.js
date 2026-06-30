const appState = { movies: [], filteredMovies: [], activeMovieIndex: 0, activeMovieId: null, activeGenre: 'all', activeRegion: 'all', searchQuery: '', sortMode: 'id-asc', modalOpen: false };

function normalizeMovie(raw) {
  const originalUrl = raw.originalUrl || raw.detailUrl || raw.sourceUrl || raw.source_url || raw.url || raw.link || raw.href || raw.crawlerUrl || (raw.id ? `https://ssr1.scrape.center/detail/${raw.id}` : '');
  const releaseDate = raw.releaseDate || raw.release_date || raw.date || '';
  const yearMatch = String(raw.year || raw.releaseYear || releaseDate).match(/\d{4}/);
  const genres = raw.genres || raw.genre || raw.categories || [];
  return {
    id: String(raw.id || raw.movie_id || (crypto.randomUUID ? crypto.randomUUID() : Date.now())),
    title: raw.title || raw.name || raw.zhTitle || raw.chinese_title || 'Untitled',
    originalTitle: raw.originalTitle || raw.enTitle || raw.subtitle || raw.english_title || '',
    year: raw.year || raw.releaseYear || (yearMatch ? yearMatch[0] : ''), rating: raw.rating || raw.score || '',
    duration: raw.duration || raw.runtime || '', region: raw.region || raw.country || raw.area || '', releaseDate,
    genres: Array.isArray(genres) ? genres : String(genres).split(',').map(v => v.trim()).filter(Boolean),
    poster: raw.poster || raw.posterUrl || raw.image || raw.cover || '',
    backdrop: raw.backdrop || raw.backdropUrl || raw.banner || raw.poster || raw.image || raw.cover || '',
    description: raw.description || raw.overview || raw.summary || '', originalUrl, sourceName: raw.sourceName || 'Scrape Center', stars: raw.stars || ''
  };
}

const $ = selector => document.querySelector(selector);
const escapeHtml = value => String(value ?? '').replace(/[&<>'"]/g, char => ({ '&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;' }[char]));
const cleanDuration = value => String(value || '').replace(/\s*分鐘\s*$/,'');

function updateStats() {
  const genres = new Set(appState.movies.flatMap(movie => movie.genres));
  const regions = new Set(appState.movies.flatMap(movie => movie.region.split(/[、,，/]/).map(v => v.trim()).filter(Boolean)));
  $('[data-stat-total]').textContent = appState.movies.length;
  $('[data-stat-average]').textContent = (appState.movies.reduce((sum,movie) => sum + Number(movie.rating || 0), 0) / appState.movies.length).toFixed(1);
  $('[data-stat-genres]').textContent = genres.size; $('[data-stat-regions]').textContent = regions.size;
}

function renderFilters() {
  const genreCounts = new Map(), regionCounts = new Map();
  appState.movies.forEach(movie => {
    movie.genres.forEach(genre => genreCounts.set(genre, (genreCounts.get(genre) || 0) + 1));
    movie.region.split(/[、,，/]/).map(v => v.trim()).filter(Boolean).forEach(region => regionCounts.set(region, (regionCounts.get(region) || 0) + 1));
  });
  const chip = (type, value, count) => `<button data-filter-type="${type}" data-filter-value="${escapeHtml(value)}" class="${(type === 'genre' ? appState.activeGenre : appState.activeRegion) === value ? 'is-active' : ''}">${value === 'all' ? '全部' : escapeHtml(value)}<span>${count}</span></button>`;
  $('[data-genre-filters]').innerHTML = chip('genre','all',appState.movies.length) + [...genreCounts].sort((a,b) => b[1]-a[1]).map(([v,c]) => chip('genre',v,c)).join('');
  $('[data-region-filters]').innerHTML = chip('region','all',appState.movies.length) + [...regionCounts].sort((a,b) => b[1]-a[1]).map(([v,c]) => chip('region',v,c)).join('');
}

function getCircularOffset(index, activeIndex, total) { let offset = index - activeIndex; if (offset > total / 2) offset -= total; if (offset < -total / 2) offset += total; return offset; }

function renderHeroCarousel() {
  const root = $('[data-hero-carousel]'), dots = $('[data-hero-dots]'), movies = appState.filteredMovies.slice(0,7);
  if (!movies.length) { root.innerHTML = ''; dots.innerHTML = ''; updateHeroContent(null); return; }
  if (appState.activeMovieIndex >= movies.length) appState.activeMovieIndex = 0;
  root.innerHTML = movies.map((movie,index) => `<button class="hero-poster-card offset-${getCircularOffset(index,appState.activeMovieIndex,movies.length)}" data-hero-index="${index}" data-movie-id="${movie.id}" aria-label="${escapeHtml(movie.title)}"><img src="${escapeHtml(movie.poster)}" alt="${escapeHtml(movie.title)}"><span class="hero-card-title">${escapeHtml(movie.title)}</span></button>`).join('');
  dots.innerHTML = movies.map((movie,index) => `<button class="hero-dot ${index === appState.activeMovieIndex ? 'is-active' : ''}" data-hero-index="${index}" aria-label="切換至 ${escapeHtml(movie.title)}"></button>`).join('');
  updateHeroContent(movies[appState.activeMovieIndex]);
}

function setActiveHeroIndex(index) {
  const movies = appState.filteredMovies.slice(0,7); if (!movies.length) return;
  appState.activeMovieIndex = ((index % movies.length) + movies.length) % movies.length; appState.activeMovieId = movies[appState.activeMovieIndex].id;
  renderHeroCarousel(); updateStreamBot(movies[appState.activeMovieIndex]); updateTopPicksActive(appState.activeMovieId);
  if (window.gsap) gsap.fromTo('.hero-copy > *',{opacity:0,y:14},{opacity:1,y:0,duration:.45,ease:'power3.out',stagger:.04});
}

function updateHeroContent(movie) {
  if (!movie) { $('[data-hero-title]').textContent='找不到電影'; $('[data-hero-original]').textContent='請調整搜尋或篩選條件'; return; }
  appState.activeMovieId = movie.id;
  $('[data-hero-title]').textContent = movie.title; $('[data-hero-original]').textContent = movie.originalTitle;
  $('[data-hero-rating]').textContent = `★ ${movie.rating || '--'}`; $('[data-hero-year]').textContent = movie.year || '';
  $('[data-hero-genre]').textContent = movie.genres[0] || ''; $('[data-hero-duration]').textContent = movie.duration || '';
  $('[data-hero-description]').textContent = movie.description || `${movie.title} 收錄於 DIC Scrape Center 完整電影資料庫，點擊海報查看完整資訊與原始資料來源。`;
  updateStreamBot(movie); updateTopPicksActive(movie.id);
}

function renderTopPicks() {
  const picks = [...appState.movies].sort((a,b) => Number(b.rating)-Number(a.rating) || Number(a.id)-Number(b.id)).slice(0,4);
  $('[data-top-picks]').innerHTML = picks.map(movie => `<button class="top-pick-card" data-movie-id="${movie.id}"><img src="${escapeHtml(movie.poster)}" alt=""><span><strong>${escapeHtml(movie.title)}</strong><small>${escapeHtml(movie.year)} · <em>★</em> ${escapeHtml(movie.rating || '--')}</small></span></button>`).join('');
}
function updateTopPicksActive(id) { document.querySelectorAll('.top-pick-card').forEach(card => card.classList.toggle('is-active',card.dataset.movieId === id)); }

function renderContinueWatching() {
  $('[data-continue-watching]').innerHTML = appState.filteredMovies.slice(0,4).map((movie,index) => `<button class="continue-card" data-movie-id="${movie.id}"><span class="continue-image"><img src="${escapeHtml(movie.backdrop)}" alt="${escapeHtml(movie.title)}"><i><svg><use href="#i-play"/></svg></i><b style="--watched:${[38,55,69,82][index]}%"></b></span><strong>${escapeHtml(movie.title)}</strong><small>${escapeHtml(movie.originalTitle)}</small></button>`).join('');
}

function movieCard(movie) {
  return `<article class="movie-card" data-movie-id="${movie.id}" tabindex="0" role="button" aria-label="查看 ${escapeHtml(movie.title)} 詳細資料"><div class="poster-wrap"><img src="${escapeHtml(movie.poster)}" alt="${escapeHtml(movie.title)}" loading="lazy"><span class="score-badge">★ ${escapeHtml(movie.rating || '--')}</span><span class="card-play"><svg><use href="#i-play"/></svg></span></div><div class="movie-card-body"><h3>${escapeHtml(movie.title)}</h3><p>${escapeHtml(movie.originalTitle)}</p><div class="card-meta"><span>${escapeHtml(movie.region || '地區未提供')}</span><i></i><span>${escapeHtml(movie.duration || '時長未提供')}</span></div><div class="card-tags">${movie.genres.slice(0,3).map(genre => `<span>${escapeHtml(genre)}</span>`).join('')}</div></div></article>`;
}

function renderAllMovies() {
  const root = $('[data-movies-grid]'); root.innerHTML = appState.filteredMovies.map(movieCard).join('');
  $('[data-result-count]').textContent = `顯示 ${appState.filteredMovies.length} 部電影`;
  $('[data-empty]').hidden = appState.filteredMovies.length > 0;
}
function renderTrendingMovies(){ renderAllMovies(); }

function updateFilterActive() {
  document.querySelectorAll('[data-filter-value]').forEach(button => button.classList.toggle('is-active', button.dataset.filterValue === (button.dataset.filterType === 'genre' ? appState.activeGenre : appState.activeRegion)));
}

function applyFilters() {
  let result = [...appState.movies]; const query = appState.searchQuery.toLowerCase();
  if (query) result = result.filter(movie => movie.title.toLowerCase().includes(query) || movie.originalTitle.toLowerCase().includes(query));
  if (appState.activeGenre !== 'all') result = result.filter(movie => movie.genres.includes(appState.activeGenre));
  if (appState.activeRegion !== 'all') result = result.filter(movie => movie.region.split(/[、,，/]/).map(v=>v.trim()).includes(appState.activeRegion));
  result.sort((a,b) => appState.sortMode === 'id-desc' ? Number(b.id)-Number(a.id) : appState.sortMode === 'rating-desc' ? Number(b.rating)-Number(a.rating) : appState.sortMode === 'rating-asc' ? Number(a.rating)-Number(b.rating) : Number(a.id)-Number(b.id));
  appState.filteredMovies = result; appState.activeMovieIndex = 0; appState.activeMovieId = result[0]?.id || null;
  renderHeroCarousel(); renderContinueWatching(); renderTrendingMovies(); updateFilterActive(); animateMovieCards();
}

function openMovieModal(movieId) {
  const movie = appState.movies.find(item => item.id === String(movieId)); if (!movie) return;
  let modal = $('[data-movie-modal]'); if (!modal) { modal=document.createElement('div'); modal.className='movie-modal-root'; modal.dataset.movieModal='true'; document.body.appendChild(modal); }
  modal.innerHTML = `<div class="movie-modal-backdrop" data-close-modal></div><section class="movie-modal-card glass-workbench" role="dialog" aria-modal="true" aria-labelledby="modal-title"><button class="movie-modal-close" data-close-modal aria-label="關閉">×</button><div class="movie-modal-poster"><img src="${escapeHtml(movie.poster)}" alt="${escapeHtml(movie.title)}"><div class="modal-score">${escapeHtml(movie.rating || '--')}</div></div><div class="movie-modal-info"><div class="modal-kicker">${escapeHtml(movie.sourceName)}</div><h2 id="modal-title">${escapeHtml(movie.title)}</h2><p class="modal-en-title">${escapeHtml(movie.originalTitle)}</p><div class="modal-grid"><span><small>ID</small>${escapeHtml(movie.id)}</span><span><small>時長</small>${escapeHtml(movie.duration || '--')}</span><span><small>地區</small>${escapeHtml(movie.region || '--')}</span><span><small>上映日期</small>${escapeHtml(movie.releaseDate || '--')}</span></div><div class="modal-tags">${movie.genres.map(g=>`<span>${escapeHtml(g)}</span>`).join('')}</div><div class="modal-rating"><span>★★★★★</span><strong>${escapeHtml(movie.rating || '--')} / 10 星級</strong></div><p class="modal-desc">${escapeHtml(movie.description || `${movie.title} 的完整電影資料來自 Scrape Center。`)}</p><div class="modal-actions"><button class="primary-action" data-open-original="${movie.id}" ${movie.originalUrl?'':'disabled'}>${movie.originalUrl?'前往 Scrape Center 詳情頁':'來源未提供'}</button><button class="secondary-action" data-close-modal>返回</button></div><div class="modal-source-url">${escapeHtml(movie.originalUrl || '來源未提供')}</div></div></section>`;
  document.body.classList.add('modal-open'); appState.modalOpen=true; $('.movie-modal-close').focus();
  if(window.gsap){gsap.fromTo('.movie-modal-backdrop',{opacity:0},{opacity:1,duration:.25});gsap.fromTo('.movie-modal-card',{opacity:0,y:30,scale:.96},{opacity:1,y:0,scale:1,duration:.55,ease:'power4.out'});}
}

function openOriginal(movieId) { const movie=appState.movies.find(item=>item.id===String(movieId)); if(!movie?.originalUrl){console.warn('來源未提供',movieId);return;} window.open(movie.originalUrl,'_blank','noopener,noreferrer'); }
function closeMovieModal(){const modal=$('[data-movie-modal]');if(!modal)return;const remove=()=>modal.remove();if(window.gsap){gsap.to('.movie-modal-card',{opacity:0,y:18,scale:.97,duration:.22,ease:'power2.in',onComplete:remove});gsap.to('.movie-modal-backdrop',{opacity:0,duration:.2});}else remove();document.body.classList.remove('modal-open');appState.modalOpen=false;}

function updateStreamBot(movie){$('[data-bot-current-title]').textContent=movie?.title||'尚未選擇電影';$('[data-bot-current-source]').textContent=movie?.sourceName||'Scrape Center';const open=$('[data-bot-open-original]');if(movie){open.dataset.openOriginal=movie.id;open.disabled=!movie.originalUrl;}}
function animateMovieCards(){if(window.gsap&&!matchMedia('(prefers-reduced-motion: reduce)').matches)gsap.fromTo('.movie-card',{opacity:0,y:22,scale:.96},{opacity:1,y:0,scale:1,duration:.55,ease:'power3.out',stagger:.015});}
function initBotMotion(){if(!window.gsap||matchMedia('(prefers-reduced-motion: reduce)').matches)return;gsap.killTweensOf('.right-panel');gsap.killTweensOf('.streambot');gsap.killTweensOf('.bot-figure');gsap.set('.right-panel,.streambot',{x:0,clearProps:'transform'});gsap.set('.bot-figure',{animation:'none'});gsap.to('.bot-figure',{y:-4,scale:1.012,duration:2.4,ease:'sine.inOut',repeat:-1,yoyo:true,transformOrigin:'center bottom'});}
function initMotion(){if(!window.gsap||matchMedia('(prefers-reduced-motion: reduce)').matches)return;gsap.fromTo('.sidebar,.topbar,.stream-hero,.right-panel',{opacity:0,y:22,filter:'blur(10px)'},{opacity:1,y:0,filter:'blur(0)',duration:.9,ease:'power3.out',stagger:.075});gsap.fromTo('.movie-card,.continue-card,.top-pick-card',{opacity:0,y:18,scale:.97},{opacity:1,y:0,scale:1,duration:.58,ease:'power3.out',stagger:.035,delay:.15});gsap.to('.orbit-platform',{filter:'drop-shadow(0 0 24px rgba(31,111,255,.16))',duration:2.8,ease:'sine.inOut',repeat:-1,yoyo:true});initBotMotion();}

document.addEventListener('click',event=>{
  const original=event.target.closest('[data-open-original]');if(original){event.preventDefault();if(!original.disabled)openOriginal(original.dataset.openOriginal);return;}
  const close=event.target.closest('[data-close-modal]');if(close){event.preventDefault();closeMovieModal();return;}
  const active=event.target.closest('[data-open-active-modal]');if(active){event.preventDefault();if(appState.activeMovieId)openMovieModal(appState.activeMovieId);return;}
  const step=event.target.closest('[data-carousel-step]');if(step){setActiveHeroIndex(appState.activeMovieIndex+Number(step.dataset.carouselStep));return;}
  const hero=event.target.closest('[data-hero-index]');if(hero){event.preventDefault();const index=Number(hero.dataset.heroIndex);if(hero.closest('[data-hero-carousel]')&&index===appState.activeMovieIndex)openMovieModal(hero.dataset.movieId);else setActiveHeroIndex(index);return;}
  const filter=event.target.closest('[data-filter-value]');if(filter){const type=filter.dataset.filterType,value=filter.dataset.filterValue;if(type==='genre')appState.activeGenre=value;if(type==='region')appState.activeRegion=value;applyFilters();return;}
  const add=event.target.closest('[data-add-list]');if(add){add.classList.toggle('is-saved');add.innerHTML=add.classList.contains('is-saved')?'✓ 已加入 My List':'<svg><use href="#i-plus"/></svg>My List';return;}
  const bot=event.target.closest('[data-bot-action]');if(bot){const movie=appState.movies.find(item=>item.id===appState.activeMovieId);const replies={similar:`已依照《${movie?.title||''}》的類型找到相似電影。`,genre:`目前類型：${movie?.genres.join('、')||'尚未選擇'}。`,trending:`目前共收錄 ${appState.movies.length} 部電影，最高評分 ${Math.max(...appState.movies.map(m=>Number(m.rating)))}。`};$('[data-bot-reply]').textContent=replies[bot.dataset.botAction];return;}
  const card=event.target.closest('[data-movie-id]');if(card){event.preventDefault();openMovieModal(card.dataset.movieId);}
});

document.addEventListener('keydown',event=>{if(event.key==='Escape'&&appState.modalOpen)closeMovieModal();const card=event.target.closest('.movie-card');if(card&&(event.key==='Enter'||event.key===' ')){event.preventDefault();openMovieModal(card.dataset.movieId);}});

document.addEventListener('DOMContentLoaded',()=>{
  appState.movies=(typeof MOVIE_DATA!=='undefined'?MOVIE_DATA:[]).map(normalizeMovie); appState.filteredMovies=[...appState.movies];
  updateStats();renderFilters();renderTopPicks();applyFilters();initMotion();
  $('[data-search-input]').addEventListener('input',event=>{appState.searchQuery=event.target.value.trim();applyFilters();});
  $('[data-sort-select]').addEventListener('change',event=>{appState.sortMode=event.target.value;applyFilters();});
});
