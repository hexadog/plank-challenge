// Smooth scroll pour liens d'ancrage
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animation au scroll pour les éléments
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Utiliser des classes Tailwind standards pour l'animation
            entry.target.classList.remove('opacity-0');
            entry.target.classList.add('opacity-100');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Sélectionnez les éléments par leur classe complète ou par type de section
document.querySelectorAll('.section > .container-custom > .grid > div').forEach(el => {
    el.classList.add('opacity-0', 'transition-opacity', 'duration-500', 'transform', 'translate-y-4');
    observer.observe(el);
});