function toggleMenu() {
    const nav = document.getElementById('nav-links');
    nav.classList.toggle('active');
}

/* ===================== ANIMAÇÕES COM SCROLL ===================== */

const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.2 });

reveals.forEach(r => observer.observe(r));

document.addEventListener("scroll", () => {
    const elements = document.querySelectorAll(".parallax");

    let scrollY = window.scrollY;

    elements.forEach(el => {
        const speed = el.dataset.speed || 1;
        el.style.transform = `translateY(${scrollY * speed * 0.05}px)`;
    });
});