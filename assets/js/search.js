document.addEventListener("DOMContentLoaded", async () => {
  const input = document.getElementById("searchInput");
  const results = document.getElementById("searchResults");

  if (!input || !results) return;

  const baseUrl = window.siteBaseUrl || "";

  let pages = [];

  try {
    const response = await fetch(`${baseUrl}/search.json`);
    if (!response.ok) throw new Error(`Erreur HTTP ${response.status}`);
    pages = await response.json();
  } catch (error) {
    console.error("Erreur chargement search.json :", error);
    results.innerHTML = `<div class="search-error">Recherche indisponible</div>`;
    return;
  }

  if (typeof Fuse === "undefined") {
    console.error("Fuse.js n'est pas chargé");
    return;
  }

  const fuse = new Fuse(pages, {
    keys: [
      { name: "content", weight: 0.8 },
      { name: "title", weight: 0.2 }
    ],
    threshold: 0.45,
    ignoreLocation: true,
    minMatchCharLength: 2,
    includeScore: true,
    includeMatches: true
  });

  function escapeHtml(text) {
    return String(text || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function makeExcerpt(content, query) {
    if (!content) return "";

    const cleanContent = String(content).replace(/\s+/g, " ").trim();
    const lowerContent = cleanContent.toLowerCase();
    const lowerQuery = query.toLowerCase();

    const index = lowerContent.indexOf(lowerQuery);

    if (index === -1) {
      return cleanContent.slice(0, 160) + (cleanContent.length > 160 ? "..." : "");
    }

    const start = Math.max(0, index - 70);
    const end = Math.min(cleanContent.length, index + lowerQuery.length + 90);

    const before = start > 0 ? "..." : "";
    const after = end < cleanContent.length ? "..." : "";

    return before + cleanContent.slice(start, end) + after;
  }

  function renderResults(matches, query) {
    results.innerHTML = "";

    if (matches.length === 0) {
      results.innerHTML = `<div class="search-empty">Aucun résultat trouvé</div>`;
      results.style.display = "block";
      return;
    }

    matches.slice(0, 12).forEach(({ item }) => {
      const title = escapeHtml(item.title || "Sans titre");
      const url = escapeHtml(item.url || "#");
      const excerpt = escapeHtml(makeExcerpt(item.content, query));

      const div = document.createElement("div");
      div.className = "search-result";

      div.innerHTML = `
        <a href="${url}">
          <strong>${title}</strong>
          <p>${excerpt}</p>
        </a>
      `;

      results.appendChild(div);
    });

    results.style.display = "block";
  }

  input.addEventListener("input", () => {
    const query = input.value.trim();

    if (query.length < 2) {
      results.innerHTML = "";
      results.style.display = "none";
      return;
    }

    const matches = fuse.search(query);
    renderResults(matches, query);
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".search-section")) {
      results.style.display = "none";
    }
  });

  input.addEventListener("focus", () => {
    if (results.innerHTML.trim()) {
      results.style.display = "block";
    }
  });
});
