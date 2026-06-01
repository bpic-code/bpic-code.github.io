document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    
    if (!searchInput) return;

    const pages = [
        {% for page in site.pages %}
            {%if page.title %}
            {
                title: "{{ page.title | escape }}",
                url: "{{ page.url | escape }}",
                tags: [{% if page.tags %}{% for tag in page.tags %}"{{ tag | escape }}"{% unless forloop.last %},{% endunless %}{% endfor %}{% endif %}]
            }{% if page.title %}{% unless forloop.last %},{% endunless %}{% endif %}
            {% endif %}
        {% endfor %}
    ].filter(p => p.title && p.title !== '');

    const fuse = new Fuse(pages, {
        keys: ['title', 'tags'],
        threshold: 0.4,
        minMatchCharLength: 2
    });

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

    document.addEventListener('click', function(e) {
        if (e.target !== searchInput) {
            searchResults.classList.remove('active');
        }
    });
});
