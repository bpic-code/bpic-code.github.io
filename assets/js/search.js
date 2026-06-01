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
    console.error("Erreur chargement recherche :", error);

    results.innerHTML = `
      <div class="search-error">
        Impossible de charger l'index de recherche.
      </div>
    `;

    return;
  }

  if (typeof Fuse === "undefined") {
    console.error("Fuse.js n'est pas chargé.");
    return;
  }

  const fuse = new Fuse(pages, {
    keys: [
      { name: "title", weight: 0.7 },
      { name: "content", weight: 0.3 }
    ],
    threshold: 0.35,
    minMatchCharLength: 2,
    includeScore: true
  });

  input.addEventListener("input", () => {
    const query = input.value.trim();

    results.innerHTML = "";

    if (query.length < 2) {
      results.style.display = "none";
      return;
    }

    const matches = fuse.search(query).slice(0, 10);

    if (matches.length === 0) {
      results.innerHTML = `
        <div class="search-empty">
          Aucun résultat trouvé
        </div>
      `;
      results.style.display = "block";
      return;
    }

    matches.forEach(({ item }) => {
      const result = document.createElement("div");
      result.className = "search-result";

      const excerpt = item.content
        ? item.content.substring(0, 120) + "..."
        : "";

      result.innerHTML = `
        <a href="${item.url}">
          <strong>${item.title || "Sans titre"}</strong>
          <p>${excerpt}</p>
        </a>
      `;

      results.appendChild(result);
    });

    results.style.display = "block";
  });

  document.addEventListener("click", (event) => {
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
