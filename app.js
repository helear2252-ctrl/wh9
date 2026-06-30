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
              <stop offset="${pct}%" stop-color="#374151" />
            </linearGradient>
          </defs>
          <path fill="url(#${gradId})" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"/>
        </svg>
      `;
    }
    return html + ` <span style="font-size: 0.95rem; font-weight: 600; color: #9ca3af; margin-left: 0.6rem; vertical-align: middle;">${(starsValue * 2).toFixed(1)} / 10 星級</span>`;
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
});
