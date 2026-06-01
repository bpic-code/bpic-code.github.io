// Fonction de recherche en temps réel
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    
    if (!searchInput) return;

    // Récupérer toutes les pages
    const pages = [
        {% for page in site.pages %}
            {{% if page.title %}
                title: "{{ page.title | escape }}",
                url: "{{ page.url | escape }}",
                content: "{{ page.content | escape | strip_html | truncate: 200 }}",
                tags: [{% if page.tags %}{% for tag in page.tags %}"{{ tag | escape }}"{% unless forloop.last %},{% endunless %}{% endfor %}{% endif %}]
            }{% if page.title %}{% unless forloop.last %},{% endunless %}{% endif %}{% endif %}
        {% endfor %}
    ].filter(p => p.title && p.title !== '');

    // Configuration Fuse.js pour la recherche floue
    const fuse = new Fuse(pages, {
        keys: ['title', 'tags'],
        threshold: 0.4,
        minMatchCharLength: 2
    });

    // Écouteur d'événement sur l'input
    searchInput.addEventListener('input', function() {
        const query = this.value.trim();
        
        if (query.length < 2) {
            searchResults.classList.remove('active');
            return;
        }

        const results = fuse.search(query).slice(0, 8);
        
        if (results.length === 0) {
            searchResults.innerHTML = '<div class="search-result-item">Aucun résultat trouvé</div>';
        } else {
            searchResults.innerHTML = results.map(result => `
                <div class="search-result-item">
                    <a href="${result.item.url}">${result.item.title}</a>
                </div>
            `).join('');
        }
        
        searchResults.classList.add('active');
    });

    // Fermer les résultats en cliquant ailleurs
    document.addEventListener('click', function(e) {
        if (e.target !== searchInput) {
            searchResults.classList.remove('active');
        }
    });

    // Naviguer avec les flèches du clavier
    let selectedIndex = -1;
    
    searchInput.addEventListener('keydown', function(e) {
        const items = searchResults.querySelectorAll('.search-result-item');
        
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            selectedIndex = (selectedIndex + 1) % items.length;
            updateSelection(items);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            selectedIndex = (selectedIndex - 1 + items.length) % items.length;
            updateSelection(items);
        } else if (e.key === 'Enter' && selectedIndex >= 0) {
            e.preventDefault();
            const link = items[selectedIndex].querySelector('a');
            if (link) window.location.href = link.href;
        }
    });

    function updateSelection(items) {
        items.forEach((item, index) => {
            item.style.backgroundColor = index === selectedIndex ? '#f0f0f0' : '';
        });
    }
});