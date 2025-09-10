export function initSmoothScroll() {
    // Smooth scrolling only for in-page anchors
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', e => {
            const href = link.getAttribute('href');
            if (!href) return;

            // Only handle if it's a hash link (e.g. "#about")
            if (href.startsWith('#')) {
                e.preventDefault();
                const section = document.querySelector(href);
                section?.scrollIntoView({ behavior: 'smooth' });
            }
            // If it's an absolute or relative path (e.g. "/about/"), do nothing
        });
    });
}
