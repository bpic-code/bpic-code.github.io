// Gestion des tags
document.addEventListener('DOMContentLoaded', function() {
    const tagBadges = document.querySelectorAll('.tag-badge');
    let activeTag = null;

    tagBadges.forEach(badge => {
        badge.addEventListener('click', function(e) {
            e.preventDefault();
            
            const tag = this.dataset.tag;
            
            // Basculer le tag actif
            if (activeTag === tag) {
                activeTag = null;
                this.classList.remove('active');
                showAllPages();
            } else {
                // Désactiver le tag précédent
                if (activeTag) {
                    document.querySelector(`[data-tag="${activeTag}"]`).classList.remove('active');
                }
                activeTag = tag;
                this.classList.add('active');
                filterPagesByTag(tag);
            }
        });
    });

    function filterPagesByTag(tag) {
        console.log(`Filtrage par tag: ${tag}`);
    }

    function showAllPages() {
        console.log('Affichage de toutes les pages');
    }
});

function getTagUrl(tag) {
    return `/docs/tags/${slugify(tag)}.html`;
}

function slugify(text) {
    return text
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');
}