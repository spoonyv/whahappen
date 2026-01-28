// Add subtle parallax effect to gradient background
document.addEventListener('mousemove', (e) => {
    const gradientBg = document.querySelector('.gradient-bg');
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;

    gradientBg.style.transform = `translate(${x}px, ${y}px)`;
});

// Add entrance animations
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.app-card');

    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';

        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 + (index * 80));
    });
});
