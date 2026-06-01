document.addEventListener("DOMContentLoaded", async () => {
  const input = document.getElementById("searchInput");
  const results = document.getElementById("searchResults");

  if (!input || !results) return;

  const baseUrl = window.siteBaseUrl || "";

  let pages = [];

  try {
    const response = await fetch(`${baseUrl}/search.json`);

    if (!response.ok) {
      throw new Error("Impossible de charger search.json");
    }

    pages = await response.json();
  } catch (error) {
    console.error(error);
    results.innerHTML = "<p>Erreur de chargement de la recherche.</p>";
    return;
  }

  const fuse = new Fuse(pages, {
    keys: ["title", "content"],
    threshold: 0.35,
    minMatchCharLength: 2
  });

  input.addEventListener("input", () => {
    const query = input.value.trim();

    results.innerHTML = "";

    if (query.length < 2) return;

    const matches = fuse.search(query).slice(0, 10);

    matches.forEach(({ item }) => {
      const div = document.createElement("div");
      div.className = "search-result";

      div.innerHTML = `
        <a href="${item.url}">
          <strong>${item.title || "Sans titre"}</strong>
          <small>${item.url}</small>
        </a>
      `;

      results.appendChild(div);
    });

    if (matches.length === 0) {
      results.innerHTML = "<p>Aucun résultat</p>";
    }
  });
});
