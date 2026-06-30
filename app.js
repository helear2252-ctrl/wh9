/* ==========================================
   DIC Movie Catalog JavaScript Controller
   ========================================== */

document.addEventListener("DOMContentLoaded", () => {
  // Application State
  const state = {
    movies: [...MOVIE_DATA],
    searchQuery: "",
    selectedCategory: "all",
    selectedRegion: "all",
    sortBy: "id-asc"
  };

  // DOM Elements
  const totalCountEl = document.getElementById("stat-total");
  const avgScoreEl = document.getElementById("stat-avg-score");
  const totalCatsEl = document.getElementById("stat-categories");
  const totalRegionsEl = document.getElementById("stat-regions");
  
  const searchInput = document.getElementById("search-input");
  const sortSelect = document.getElementById("sort-select");
  const categoryTagsContainer = document.getElementById("category-tags");
  const regionTagsContainer = document.getElementById("region-tags");
  
  const moviesGrid = document.getElementById("movies-grid");
  const catalogCountText = document.getElementById("catalog-count-text");
  const noResultsMsg = document.getElementById("no-results-msg");
  
  // Modal Elements
  const detailModal = document.getElementById("detail-modal");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const modalCover = document.getElementById("modal-cover");
  const modalScore = document.getElementById("modal-score");
  const modalTitleCn = document.getElementById("modal-title-cn");
  const modalTitleEn = document.getElementById("modal-title-en");
  const modalId = document.getElementById("modal-id");
  const modalDuration = document.getElementById("modal-duration");
  const modalRegion = document.getElementById("modal-region");
  const modalReleaseDate = document.getElementById("modal-release-date");
  const modalCategories = document.getElementById("modal-categories");
  const modalStarsContainer = document.getElementById("modal-stars-container");
  const modalLinkBtn = document.getElementById("modal-link-btn");

  // Initialize Web App
  init();

  function init() {
    calculateStats();
    buildFilterTags();
    registerEvents();
    render();
  }

  // 1. Calculate & Render Dashboard Stats
  function calculateStats() {
    totalCountEl.textContent = state.movies.length;
    
    // Avg Score
    const totalScore = state.movies.reduce((sum, m) => sum + m.score, 0);
    const avgScore = state.movies.length > 0 ? (totalScore / state.movies.length).toFixed(2) : "0.00";
    avgScoreEl.textContent = avgScore;

    // Distinct Categories
    const categoriesSet = new Set();
    state.movies.forEach(m => m.categories.forEach(c => categoriesSet.add(c)));
    totalCatsEl.textContent = categoriesSet.size;

    // Distinct Regions
    const regionsSet = new Set();
    state.movies.forEach(m => {
      if (m.region) {
        // Handle split regions like "中国内地、中国香港" or "美国、英国"
        const parts = m.region.split(/[、\/,]/);
        parts.forEach(p => regionsSet.add(p.trim()));
      }
    });
    totalRegionsEl.textContent = regionsSet.size;
  }

  // 2. Dynamically Generate Category and Region Tags
  function buildFilterTags() {
    // Categories
    const categoriesMap = {};
    state.movies.forEach(m => {
      m.categories.forEach(c => {
        categoriesMap[c] = (categoriesMap[c] || 0) + 1;
      });
    });
    
    // Sort categories by frequency
    const sortedCategories = Object.keys(categoriesMap).sort((a, b) => categoriesMap[b] - categoriesMap[a]);
    
    sortedCategories.forEach(cat => {
      const btn = document.createElement("button");
      btn.className = "tag-btn";
      btn.dataset.category = cat;
      btn.textContent = `${cat} (${categoriesMap[cat]})`;
      categoryTagsContainer.appendChild(btn);
    });

    // Regions
    const regionsMap = {};
    state.movies.forEach(m => {
      if (m.region) {
        const parts = m.region.split(/[、\/,]/);
        parts.forEach(p => {
          const r = p.trim();
          if (r) {
            regionsMap[r] = (regionsMap[r] || 0) + 1;
          }
        });
      }
    });

    const sortedRegions = Object.keys(regionsMap).sort((a, b) => regionsMap[b] - regionsMap[a]);
    
    sortedRegions.forEach(reg => {
      const btn = document.createElement("button");
      btn.className = "tag-btn";
      btn.dataset.region = reg;
      btn.textContent = `${reg} (${regionsMap[reg]})`;
      regionTagsContainer.appendChild(btn);
    });
  }

  // 3. Register Event Listeners
  function registerEvents() {
    // Search input handler with input event (instant)
    searchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value.trim().toLowerCase();
      render();
    });

    // Sort select handler
    sortSelect.addEventListener("change", (e) => {
      state.sortBy = e.target.value;
      render();
    });

    // Category filter click delegation
    categoryTagsContainer.addEventListener("click", (e) => {
      const btn = e.target.closest(".tag-btn");
      if (!btn) return;
      
      categoryTagsContainer.querySelectorAll(".tag-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      state.selectedCategory = btn.dataset.category;
      render();
    });

    // Region filter click delegation
    regionTagsContainer.addEventListener("click", (e) => {
      const btn = e.target.closest(".tag-btn");
      if (!btn) return;
      
      regionTagsContainer.querySelectorAll(".tag-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      state.selectedRegion = btn.dataset.region;
      render();
    });

    // Modal Close
    modalCloseBtn.addEventListener("click", closeModal);
    detailModal.addEventListener("click", (e) => {
      if (e.target === detailModal) closeModal();
    });

    // Keyboard support for Modal (Escape key)
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && detailModal.classList.contains("active")) {
        closeModal();
      }
    });
  }

  // 4. Combined Filtering & Sorting Logic
  function render() {
    // Filter
    let filteredMovies = state.movies.filter(movie => {
      // Search matching
      const matchesSearch = 
        movie.chinese_title.toLowerCase().includes(state.searchQuery) ||
        movie.english_title.toLowerCase().includes(state.searchQuery);
        
      // Category matching
      const matchesCategory = 
        state.selectedCategory === "all" ||
        movie.categories.includes(state.selectedCategory);
        
      // Region matching
      const matchesRegion = 
        state.selectedRegion === "all" ||
        (movie.region && movie.region.includes(state.selectedRegion));
        
      return matchesSearch && matchesCategory && matchesRegion;
    });

    // Sort
    filteredMovies.sort((a, b) => {
      if (state.sortBy === "id-asc") {
        return a.id - b.id;
      } else if (state.sortBy === "score-desc") {
        return b.score - a.score;
      } else if (state.sortBy === "duration-desc") {
        return getMinutes(b.duration) - getMinutes(a.duration);
      } else if (state.sortBy === "duration-asc") {
        return getMinutes(a.duration) - getMinutes(b.duration);
      } else if (state.sortBy === "date-desc") {
        return getReleaseTimestamp(b.release_date) - getReleaseTimestamp(a.release_date);
      } else if (state.sortBy === "date-asc") {
        return getReleaseTimestamp(a.release_date) - getReleaseTimestamp(b.release_date);
      }
      return 0;
    });

    // Render grid count
    catalogCountText.textContent = `顯示 ${filteredMovies.length} 部電影`;

    // Empty grid and populate
    moviesGrid.innerHTML = "";
    if (filteredMovies.length === 0) {
      noResultsMsg.style.display = "block";
    } else {
      noResultsMsg.style.display = "none";
      filteredMovies.forEach(movie => {
        moviesGrid.appendChild(createMovieCard(movie));
      });
    }
  }

  // Helper: Create single movie card element
  function createMovieCard(movie) {
    const card = document.createElement("div");
    card.className = "movie-card";
    
    // categories list
    const tagsHtml = movie.categories.slice(0, 3).map(cat => `<span class="card-tag">${cat}</span>`).join("");
    
    card.innerHTML = `
      <div class="movie-cover-container">
        <img class="movie-cover" src="${movie.cover}" alt="${movie.chinese_title} Cover" loading="lazy">
        <div class="movie-score-badge">
          ★ ${movie.score.toFixed(1)}
        </div>
      </div>
      <div class="movie-card-content">
        <h3 class="movie-card-title">${movie.chinese_title}</h3>
        <div class="movie-card-meta">
          <span>${movie.region || "未知"}</span>
          <span class="meta-split">/</span>
          <span>${movie.duration || "未知"}</span>
        </div>
        <div class="movie-card-tags">
          ${tagsHtml}
        </div>
      </div>
    `;

    // Click handler to open modal
    card.addEventListener("click", () => openModal(movie));
    return card;
  }

  // 5. Modal Operations
  function openModal(movie) {
    modalCover.src = movie.cover;
    modalCover.alt = movie.chinese_title;
    modalScore.textContent = movie.score.toFixed(1);
    modalTitleCn.textContent = movie.chinese_title;
    modalTitleEn.textContent = movie.english_title;
    modalId.textContent = movie.id;
    modalDuration.textContent = movie.duration || "未知";
    modalRegion.textContent = movie.region || "未知";
    modalReleaseDate.textContent = movie.release_date || "暂无数据";
    modalLinkBtn.href = `https://ssr1.scrape.center/detail/${movie.id}`;
    
    // modal tags
    modalCategories.innerHTML = movie.categories.map(cat => `<span class="modal-tag">${cat}</span>`).join("");
    
    // modal stars gradient fill
    modalStarsContainer.innerHTML = renderRatingStars(movie.stars);

    // Show modal
    detailModal.classList.add("active");
    document.body.style.overflow = "hidden"; // disable body scrolling
  }

  function closeModal() {
    detailModal.classList.remove("active");
    document.body.style.overflow = ""; // restore body scrolling
  }

  // Helper: Render precise gradient rating stars
  function renderRatingStars(starsValue) {
    let html = '';
    for (let i = 1; i <= 5; i++) {
      let pct = 0;
      if (starsValue >= i) {
        pct = 100;
      } else if (starsValue > i - 1) {
        pct = Math.round((starsValue - (i - 1)) * 100);
      }
      // Unique random ID for linear gradient
      const gradId = `grad-${Math.random().toString(36).substr(2, 9)}`;
      html += `
        <svg style="display: inline-block; width: 22px; height: 22px; vertical-align: middle; margin-right: 4px;" viewBox="0 0 24 24">
          <defs>
            <linearGradient id="${gradId}">
              <stop offset="${pct}%" stop-color="#f59e0b" />
              <stop offset="${pct}%" stop-color="#e2e8f0" />
            </linearGradient>
          </defs>
          <path fill="url(#${gradId})" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"/>
        </svg>
      `;
    }
    return html + ` <span style="font-size: 0.95rem; font-weight: 600; color: #475569; margin-left: 0.6rem; vertical-align: middle;">${(starsValue * 2).toFixed(1)} / 10 星級</span>`;
  }


  // Helper: Extract minutes integer from duration string ("171 分钟" -> 171)
  function getMinutes(durationStr) {
    if (!durationStr) return 0;
    const match = durationStr.match(/(\d+)/);
    return match ? parseInt(match[1]) : 0;
  }

  // Helper: Extract timestamp from release date string ("1993-07-26 上映" -> timestamp)
  function getReleaseTimestamp(dateStr) {
    if (!dateStr) return 0;
    const match = dateStr.match(/(\d{4}-\d{2}-\d{2})/);
    return match ? new Date(match[1]).getTime() : 0;
  }

  // ==========================================
  // Chatbot Controller Logic
  // ==========================================
  const chatWidget = document.getElementById("chatbot-widget");
  const chatLauncher = document.getElementById("chatbot-launcher");
  const chatContainer = document.getElementById("chat-container");
  const chatCloseBtn = document.getElementById("chat-close-btn");
  const chatMessages = document.getElementById("chat-messages");
  const chatInput = document.getElementById("chat-input");
  const chatSendBtn = document.getElementById("chat-send-btn");

  let isFirstOpen = true;

  // Toggle Chat View
  chatLauncher.addEventListener("click", () => {
    chatWidget.classList.add("active");
    if (isFirstOpen) {
      showWelcomeMessage();
      isFirstOpen = false;
    }
    chatInput.focus();
  });

  chatCloseBtn.addEventListener("click", () => {
    chatWidget.classList.remove("active");
  });

  // Handle Send Messages
  chatSendBtn.addEventListener("click", handleUserMessage);
  chatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      handleUserMessage();
    }
  });

  // Welcome Response
  function showWelcomeMessage() {
    appendBotMessage(
      "您好！我是您的<b>電影 AI 助手</b>。我可以幫您查詢電影、推薦高分佳作或是篩選各種類型的影片。<br><br>您可以直接問我，或者點擊下方按鈕進行查詢：",
      [
        { text: "🎬 隨便推薦一部", query: "隨便推薦一部" },
        { text: "⭐ 評分最高", query: "評分最高" },
        { text: "🚀 經典科幻片", query: "科幻片" },
        { text: "❤️ 浪漫愛情片", query: "愛情片" }
      ]
    );
  }

  // Handle input and route intent
  function handleUserMessage() {
    const text = chatInput.value.trim();
    if (!text) return;

    // Append User message
    appendUserMessage(text);
    chatInput.value = "";

    // Show Typing Indicator
    const loader = appendTypingIndicator();

    // Delay response to simulate processing
    setTimeout(() => {
      removeTypingIndicator(loader);
      processBotResponse(text);
    }, 600);
  }

  // Append user bubble to messages log
  function appendUserMessage(text) {
    const bubble = document.createElement("div");
    bubble.className = "message user";
    bubble.textContent = text;
    chatMessages.appendChild(bubble);
    scrollChatBottom();
  }

  // Append bot bubble to messages log
  function appendBotMessage(htmlContent, chips = [], moviesList = []) {
    const bubble = document.createElement("div");
    bubble.className = "message bot";
    
    // Content text
    let innerHtml = `<div>${htmlContent}</div>`;

    // Embedded movie cards
    if (moviesList.length > 0) {
      const cardsHtml = moviesList.map(movie => `
        <a href="#" class="chat-movie-card" data-id="${movie.id}">
          <img class="chat-movie-cover" src="${movie.cover}" alt="${movie.chinese_title}">
          <div class="chat-movie-info">
            <span class="chat-movie-title">${movie.chinese_title}</span>
            <span class="chat-movie-meta">${movie.region || "未知"} / ${movie.duration || "未知"}</span>
            <span class="chat-movie-score">★ ${movie.score.toFixed(1)}</span>
          </div>
        </a>
      `).join("");
      innerHtml += `<div class="chat-movies-list">${cardsHtml}</div>`;
    }

    // Recommendation suggestion chips
    if (chips.length > 0) {
      const chipsHtml = chips.map(c => `
        <button class="chip-btn" data-query="${c.query}">${c.text}</button>
      `).join("");
      innerHtml += `<div class="suggestion-chips">${chipsHtml}</div>`;
    }

    bubble.innerHTML = innerHtml;
    chatMessages.appendChild(bubble);

    // Event listener for suggestion chips
    bubble.querySelectorAll(".chip-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        chatInput.value = e.target.dataset.query;
        handleUserMessage();
      });
    });

    // Event listener for movie preview cards
    bubble.querySelectorAll(".chat-movie-card").forEach(card => {
      card.addEventListener("click", (e) => {
        e.preventDefault();
        const mId = parseInt(card.dataset.id);
        const movieObj = MOVIE_DATA.find(m => m.id === mId);
        if (movieObj) {
          openModal(movieObj);
        }
      });
    });

    scrollChatBottom();
  }

  // Scroll chat scroll area to bottom
  function scrollChatBottom() {
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  // Typing indicators loader
  function appendTypingIndicator() {
    const bubble = document.createElement("div");
    bubble.className = "message bot typing-indicator-bubble";
    bubble.innerHTML = `
      <div class="typing-indicator">
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
      </div>
    `;
    chatMessages.appendChild(bubble);
    scrollChatBottom();
    return bubble;
  }

  function removeTypingIndicator(element) {
    if (element && element.parentNode) {
      element.parentNode.removeChild(element);
    }
  }

  // Core Conversation Engine
  function processBotResponse(query) {
    const q = query.toLowerCase();

    // Intent: Help / Hello
    if (q.includes("你好") || q.includes("hello") || q.includes("hi") || q.includes("你能做") || q.includes("功能") || q.includes("助手")) {
      appendBotMessage(
        "您好！我是電影助理，我可以幫您：<br>1. <b>推薦特定類型電影</b> (如問「推薦科幻片」、「有哪些愛情片」)<br>2. <b>尋找高分電影</b> (如問「評分最高」或「推薦經典高分」)<br>3. <b>隨機抽取電影</b> (如問「隨便推薦一部」、「抽一個」)<br>4. <b>查詢電影詳情</b> (輸入電影名稱即可，如「霸王別姬」)",
        [
          { text: "🎬 隨便推薦一部", query: "隨便推薦" },
          { text: "⭐ 評分最高", query: "評分最高" }
        ]
      );
      return;
    }

    // Intent: Random Movie
    if (q.includes("隨便") || q.includes("抽一") || q.includes("無聊") || q.includes("推薦一個") || q.includes("推薦一部")) {
      const randomIdx = Math.floor(Math.random() * MOVIE_DATA.length);
      const movie = MOVIE_DATA[randomIdx];
      appendBotMessage(
        `為您抽中了一部隨機電影！快來看看是不是您喜歡的類型：<br>👉 <b>${movie.chinese_title}</b> (${movie.score.toFixed(1)}分)`,
        [
          { text: "🎲 再抽一部", query: "隨便推薦" },
          { text: "⭐ 評分最高", query: "評分最高" }
        ],
        [movie]
      );
      return;
    }

    // Intent: Top Rated Movies
    if (q.includes("最高分") || q.includes("評分最高") || q.includes("高分") || q.includes("好看") || q.includes("經典") || q.includes("評分高")) {
      // Sort copy by rating descending
      const sorted = [...MOVIE_DATA].sort((a, b) => b.score - a.score);
      const top5 = sorted.slice(0, 5);
      appendBotMessage(
        "為您推薦評分最高的 5 部經典電影：",
        [
          { text: "🎬 隨便推薦一部", query: "隨便推薦" },
          { text: "🚀 來部科幻片", query: "科幻片" }
        ],
        top5
      );
      return;
    }

    // Intent: Genre Category Recommendations
    const genres = [
      "剧情", "爱情", "动作", "喜剧", "犯罪", "冒险", "科幻", "战争", 
      "奇幻", "悬疑", "惊悚", "动画", "纪录片", "家庭", "历史", "灾难", "歌舞"
    ];
    
    let matchedGenre = "";
    for (const g of genres) {
      if (q.includes(g)) {
        matchedGenre = g;
        break;
      }
    }

    if (matchedGenre) {
      const filtered = MOVIE_DATA.filter(m => m.categories.includes(matchedGenre));
      const list = filtered.slice(0, 4); // return top 4 matching
      appendBotMessage(
        `為您篩選出以下 <b>${matchedGenre}</b> 類型的熱門電影 (共 ${filtered.length} 部)：`,
        [
          { text: "🎲 隨便推薦一部", query: "隨便推薦" },
          { text: "⭐ 評分最高", query: "評分最高" }
        ],
        list
      );
      return;
    }

    // Intent: Country / Region Searches
    const regions = [
      { name: "美國", key: "美国" },
      { name: "日本", key: "日本" },
      { name: "法國", key: "法国" },
      { name: "韓國", key: "韩国" },
      { name: "中國", key: "中国" },
      { name: "香港", key: "香港" },
      { name: "台灣", key: "台湾" },
      { name: "義大利", key: "意大利" },
      { name: "泰國", key: "泰国" }
    ];

    let matchedRegionKey = "";
    let matchedRegionName = "";
    for (const r of regions) {
      if (q.includes(r.name) || q.includes(r.key)) {
        matchedRegionKey = r.key;
        matchedRegionName = r.name;
        break;
      }
    }

    if (matchedRegionKey) {
      const filtered = MOVIE_DATA.filter(m => m.region && m.region.includes(matchedRegionKey));
      const list = filtered.slice(0, 4);
      appendBotMessage(
        `為您篩選出以下 <b>${matchedRegionName}</b> 的熱門電影 (共 ${filtered.length} 部)：`,
        [
          { text: "🎲 隨便推薦一部", query: "隨便推薦" },
          { text: "⭐ 評分最高", query: "評分最高" }
        ],
        list
      );
      return;
    }

    // Intent: Movie Name Specific Search
    // Check if user is typing a movie title in MOVIE_DATA
    const matchedMovies = MOVIE_DATA.filter(m => 
      m.chinese_title.toLowerCase().includes(q) || 
      m.english_title.toLowerCase().includes(q)
    );

    if (matchedMovies.length > 0) {
      const displayList = matchedMovies.slice(0, 3);
      appendBotMessage(
        `為您搜尋到符合「${query}」關鍵字的電影：`,
        [
          { text: "🎬 隨便推薦一部", query: "隨便推薦" },
          { text: "⭐ 評分最高", query: "評分最高" }
        ],
        displayList
      );
      return;
    }

    // Fallback response: No intent matching
    appendBotMessage(
      `抱歉，我暫時沒聽懂您說的「${query}」。<br><br>您可以嘗試點擊下方的建議查詢，或直接詢問電影名稱（如「霸王別姬」、「泰坦尼克號」）：`,
      [
        { text: "🎬 隨便推薦一部", query: "隨便推薦" },
        { text: "⭐ 評分最高", query: "評分最高" },
        { text: "🚀 經典科幻片", query: "科幻片" },
        { text: "❤️ 浪漫愛情片", query: "愛情片" }
      ]
    );
  }
});
