document.addEventListener("DOMContentLoaded", async () => {
  const input = document.getElementById("searchInput");
  const results = document.getElementById("searchResults");

  if (!input || !results) return;

  const response = await fetch(`${window.location.origin}{{ site.baseurl }}/search.json`);
  const pages = await response.json();

  const fuse = new Fuse(pages, {
    keys: ["title", "content"],
    threshold: 0.35,
    includeScore: true,
    minMatchCharLength: 2
  });

  input.addEventListener("input", () => {
    const query = input.value.trim();

    results.innerHTML = "";

    if (query.length < 2) return;

    const matches = fuse.search(query).slice(0, 10);

    if (matches.length === 0) {
      results.innerHTML = `<p class="no-results">Aucun résultat</p>`;
      return;
    }

    matches.forEach(({ item }) => {
      const div = document.createElement("div");
      div.className = "search-result";

      div.innerHTML = `
        <a href="${item.url}">
          <strong>${item.title || "Sans titre"}</strong>
          <span>${item.url}</span>
        </a>
      `;

      results.appendChild(div);
    });
  });
});
