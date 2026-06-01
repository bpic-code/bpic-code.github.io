document.addEventListener('DOMContentLoaded', function() {
    const tagBadges = document.querySelectorAll('.tag-badge');
    let activeTag = null;

    tagBadges.forEach(badge => {
        badge.addEventListener('click', function(e) {
            e.preventDefault();
            const tagUrl = this.getAttribute('href');
            if (tagUrl && tagUrl !== '#') {
                window.location.href = tagUrl;
            }
        });
    });
});
