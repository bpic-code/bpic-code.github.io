document.addEventListener("DOMContentLoaded", async () => {
  const input = document.getElementById("searchInput");
  const results = document.getElementById("searchResults");

  if (!input || !results) return;

  const baseUrl = window.siteBaseUrl || "";

  let pages = [];

  try {
    const response = await fetch(`${baseUrl}/search.json`);

    if (!response.ok) {
      throw new Error(`Erreur HTTP ${response.status}`);
    }

    pages = await response.json();
  } catch (error) {
    console.error("Erreur lors du chargement de search.json :", error);

    results.innerHTML = `
      <div class="search-error">
        Impossible de charger l'index de recherche.
      </div>
    `;

    results.style.display = "block";
    return;
  }

  if (typeof Fuse === "undefined") {
    console.error("Fuse.js n'est pas chargé.");
    return;
  }

  const fuse = new Fuse(pages, {
    keys: [
      {
        name: "content",
        weight: 0.8
      },
      {
        name: "title",
        weight: 0.2
      }
    ],
    threshold: 0.35,
    ignoreLocation: true,
    includeScore: true,
    minMatchCharLength: 2,
    findAllMatches: true
  });

  function escapeHtml(text) {
    return String(text || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function displayResults(matches) {
    results.innerHTML = "";

    if (matches.length === 0) {
      results.innerHTML = `
        <div class="search-empty">
          Aucun résultat trouvé
        </div>
      `;
      results.style.display = "block";
      return;
    }

    matches.slice(0, 15).forEach(result => {
      const page = result.item;

      const item = document.createElement("div");
      item.className = "search-result";

      item.innerHTML = `
        <a class="search-result-link" href="${page.url}">
          ${escapeHtml(page.title || "Sans titre")}
        </a>
      `;

      results.appendChild(item);
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
    displayResults(matches);
  });

  document.addEventListener("click", event => {
    if (!event.target.closest(".search-section")) {
      results.style.display = "none";
    }
  });

  input.addEventListener("focus", () => {
    if (results.innerHTML.trim() !== "") {
      results.style.display = "block";
    }
  });
});
