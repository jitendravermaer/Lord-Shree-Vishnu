
// Enhanced cosmic waters background creation
function createCosmicElements() {
    const cosmicWaters = document.querySelector('.cosmic-waters');

    // Create earth particles
    for (let i = 0; i < 12; i++) {
        const earth = document.createElement('div');
        earth.className = 'earth-particle';
        earth.style.left = Math.random() * 100 + '%';
        earth.style.top = Math.random() * 100 + '%';
        earth.style.animationDelay = Math.random() * 15 + 's';
        earth.style.animationDuration = (Math.random() * 6 + 12) + 's';
        cosmicWaters.appendChild(earth);
    }

    // Create boar tusks
    for (let i = 0; i < 8; i++) {
        const tusk = document.createElement('div');
        tusk.className = 'boar-tusk';
        tusk.style.left = Math.random() * 100 + '%';
        tusk.style.top = Math.random() * 100 + '%';
        tusk.style.animationDelay = Math.random() * 8 + 's';
        cosmicWaters.appendChild(tusk);
    }

    // Create cosmic bubbles
    for (let i = 0; i < 25; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'cosmic-bubble';
        bubble.style.left = Math.random() * 100 + '%';
        bubble.style.animationDelay = Math.random() * 12 + 's';
        bubble.style.animationDuration = (Math.random() * 4 + 10) + 's';
        cosmicWaters.appendChild(bubble);
    }

    // Create divine light beams
    for (let i = 0; i < 6; i++) {
        const light = document.createElement('div');
        light.className = 'divine-light';
        light.style.animationDelay = Math.random() * 18 + 's';
        cosmicWaters.appendChild(light);
    }
}

// Enhanced interactions
document.addEventListener('DOMContentLoaded', function () {
    createCosmicElements();

    // Sacred symbols interactions
    const symbols = document.querySelectorAll('.symbol');
    symbols.forEach(symbol => {
        symbol.addEventListener('click', function () {
            symbol.style.animation = 'none';
            setTimeout(() => {
                symbol.style.animation = 'symbolPower 6s ease-in-out infinite';
            }, 100);
        });
    });

    // Story chapter interactions
    const chapters = document.querySelectorAll('.story-chapter');
    chapters.forEach(chapter => {
        chapter.addEventListener('mouseenter', function () {
            const icon = chapter.querySelector('.chapter-icon');
            icon.style.transform = 'scale(1.2) rotate(360deg)';
            icon.style.transition = 'all 0.8s ease';
        });

        chapter.addEventListener('mouseleave', function () {
            const icon = chapter.querySelector('.chapter-icon');
            icon.style.transform = '';
        });
    });

    // Verse card interactions
    const verseCards = document.querySelectorAll('.verse-card');
    verseCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            const visual = card.querySelector('.verse-visual');
            visual.style.animation = 'verseGlow 1s ease-in-out infinite';
        });

        card.addEventListener('mouseleave', function () {
            const visual = card.querySelector('.verse-visual');
            visual.style.animation = 'verseGlow 5s ease-in-out infinite';
        });
    });

    // Power card interactions
    const powerCards = document.querySelectorAll('.power-card');
    powerCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            const icon = card.querySelector('.power-icon');
            icon.style.transform = 'scale(1.3) rotateY(360deg)';
            icon.style.transition = 'all 0.6s ease';
        });

        card.addEventListener('mouseleave', function () {
            const icon = card.querySelector('.power-icon');
            icon.style.transform = '';
        });
    });

    // Significance card interactions
    const significanceCards = document.querySelectorAll('.significance-card');
    significanceCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            const icon = card.querySelector('.significance-icon');
            icon.style.transform = 'scale(1.3) rotateY(360deg)';
            icon.style.transition = 'all 0.6s ease';
        });

        card.addEventListener('mouseleave', function () {
            const icon = card.querySelector('.significance-icon');
            icon.style.transform = '';
        });
    });

    // Add floating animation to elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all major sections
    document.querySelectorAll('.story-chapter, .verse-card, .power-card, .significance-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Enhanced hover effects for divine header
    const divineHeader = document.querySelector('.divine-header');
    divineHeader.addEventListener('mouseenter', function () {
        this.style.transform = 'scale(1.02)';
        this.style.transition = 'transform 0.5s ease';
    });

    divineHeader.addEventListener('mouseleave', function () {
        this.style.transform = '';
    });

    // Smooth scrolling for better experience
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});



(function () { function c() { var b = a.contentDocument || a.contentWindow.document; if (b) { var d = b.createElement('script'); d.innerHTML = "window.__CF$cv$params={r:'9712e92f8438a7d4',t:'MTc1NTUzNTgzMy4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);"; b.getElementsByTagName('head')[0].appendChild(d) } } if (document.body) { var a = document.createElement('iframe'); a.height = 1; a.width = 1; a.style.position = 'absolute'; a.style.top = 0; a.style.left = 0; a.style.border = 'none'; a.style.visibility = 'hidden'; document.body.appendChild(a); if ('loading' !== document.readyState) c(); else if (window.addEventListener) document.addEventListener('DOMContentLoaded', c); else { var e = document.onreadystatechange || function () { }; document.onreadystatechange = function (b) { e(b); 'loading' !== document.readyState && (document.onreadystatechange = e, c()) } } } })();
