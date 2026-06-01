document.addEventListener("DOMContentLoaded", async () => {
  console.log("=== DEBUG RECHERCHE ===");

  const input = document.getElementById("searchInput");
  const results = document.getElementById("searchResults");

  console.log("Champ recherche :", input);
  console.log("Zone résultats :", results);

  if (!input || !results) {
    console.error("Éléments HTML introuvables");
    return;
  }

  const baseUrl = window.siteBaseUrl || "";

  console.log("window.siteBaseUrl =", window.siteBaseUrl);
  console.log("baseUrl =", baseUrl);

  const searchUrl = `${baseUrl}/search.json`;

  console.log("URL utilisée pour search.json :", searchUrl);

  let pages = [];

  try {
    console.log("Chargement de search.json...");

    const response = await fetch(searchUrl);

    console.log("Status HTTP :", response.status);
    console.log("Status Text :", response.statusText);
    console.log("URL finale :", response.url);

    if (!response.ok) {
      throw new Error(
        `Erreur HTTP ${response.status} (${response.statusText})`
      );
    }

    const rawText = await response.text();

    console.log("Taille JSON :", rawText.length, "caractères");
    console.log("Aperçu JSON :", rawText.substring(0, 500));

    pages = JSON.parse(rawText);

    console.log("Pages chargées :", pages.length);

    if (pages.length > 0) {
      console.log("Premier élément :", pages[0]);
    } else {
      console.warn("ATTENTION : search.json est vide");
    }

  } catch (error) {
    console.error("Erreur chargement search.json :", error);

    results.innerHTML = `
      <div style="color:red">
        Impossible de charger search.json
      </div>
    `;

    return;
  }

  if (typeof Fuse === "undefined") {
    console.error("Fuse.js n'est pas chargé !");
    return;
  }

  console.log("Fuse.js détecté :", Fuse);

  const fuse = new Fuse(pages, {
    keys: ["title", "content"],
    threshold: 0.35,
    includeScore: true,
    minMatchCharLength: 2
  });

  console.log("Index Fuse créé");

  input.addEventListener("input", () => {
    const query = input.value.trim();

    console.log("Recherche :", query);

    results.innerHTML = "";

    if (query.length < 2) {
      console.log("Moins de 2 caractères");
      return;
    }

    const matches = fuse.search(query);

    console.log("Résultats trouvés :", matches.length);

    matches.slice(0, 10).forEach(({ item, score }) => {
      console.log("Match :", item.title, "score =", score);

      const div = document.createElement("div");
      div.className = "search-result";

      div.innerHTML = `
        <a href="${item.url}">
          <strong>${item.title || "Sans titre"}</strong>
          <br>
          <small>${item.url}</small>
        </a>
      `;

      results.appendChild(div);
    });

    if (matches.length === 0) {
      results.innerHTML = "<p>Aucun résultat</p>";
    }
  });

  console.log("Recherche initialisée avec succès");
});
