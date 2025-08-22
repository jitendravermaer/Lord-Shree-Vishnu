
// Enhanced sacred background creation
function createSacredParticles() {
    const divineAura = document.querySelector('.divine-aura');

    // Create sacred particles
    for (let i = 0; i < 60; i++) {
        const particle = document.createElement('div');
        particle.className = 'sacred-particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 10 + 's';
        particle.style.animationDuration = (Math.random() * 6 + 8) + 's';
        divineAura.appendChild(particle);
    }
}

// Enhanced interactions
document.addEventListener('DOMContentLoaded', function () {
    createSacredParticles();

    // Sacred symbols interactions
    const symbols = document.querySelectorAll('.sacred-symbol');
    symbols.forEach(symbol => {
        symbol.addEventListener('click', function () {
            const title = symbol.getAttribute('data-title');
            createDivineEffect(title, symbol);
        });
    });

    // Navigation smooth scrolling
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Divine card interactions
    const divineCards = document.querySelectorAll('.divine-card');
    divineCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            const icon = card.querySelector('.card-image i');
            if (icon) {
                icon.style.transform = 'scale(1.4) rotate(360deg)';
                icon.style.transition = 'all 0.8s ease';
            }
        });

        card.addEventListener('mouseleave', function () {
            const icon = card.querySelector('.card-image i');
            if (icon) {
                icon.style.transform = '';
            }
        });
    });

    // Planetary card interactions
    const planetaryCards = document.querySelectorAll('.planetary-card');
    planetaryCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            const visual = card.querySelector('.planet-visual i');
            if (visual) {
                visual.style.animation = 'planetSpin 4s ease-in-out infinite';
            }
        });

        card.addEventListener('mouseleave', function () {
            const visual = card.querySelector('.planet-visual i');
            if (visual) {
                visual.style.animation = 'planetSpin 6s ease-in-out infinite';
            }
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

    // Observe all major cards
    document.querySelectorAll('.divine-card, .planetary-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Enhanced hover effects for sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.005)';
            this.style.transition = 'transform 0.4s ease';
        });

        section.addEventListener('mouseleave', function () {
            this.style.transform = '';
        });
    });

    // Sacred title effect
    const title = document.querySelector('.sacred-header h1');
    title.addEventListener('click', function () {
        this.style.textShadow = '0 0 60px var(--glow-gold), 0 0 90px var(--glow-blue)';
        this.style.transform = 'scale(1.05)';

        setTimeout(() => {
            this.style.textShadow = '';
            this.style.transform = '';
        }, 1200);
    });
});

// Divine effect functions
function createDivineEffect(title, element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Create golden particles burst
    for (let i = 0; i < 12; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.style.position = 'fixed';
            particle.style.left = centerX + 'px';
            particle.style.top = centerY + 'px';
            particle.style.width = '8px';
            particle.style.height = '8px';
            particle.style.background = 'var(--celestial-gold)';
            particle.style.borderRadius = '50%';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '1000';
            particle.style.boxShadow = '0 0 25px var(--glow-gold)';
            document.body.appendChild(particle);

            const angle = (i / 12) * 360;
            const distance = 150;
            const endX = centerX + Math.cos(angle * Math.PI / 180) * distance;
            const endY = centerY + Math.sin(angle * Math.PI / 180) * distance;

            particle.animate([
                {
                    transform: 'translate(-50%, -50%) scale(0.3)',
                    opacity: 0.3
                },
                {
                    transform: `translate(${endX - centerX}px, ${endY - centerY}px) scale(1.5)`,
                    opacity: 1
                },
                {
                    transform: `translate(${(endX - centerX) * 1.8}px, ${(endY - centerY) * 1.8}px) scale(2)`,
                    opacity: 0
                }
            ], {
                duration: 2500,
                easing: 'ease-out'
            }).onfinish = () => particle.remove();
        }, i * 60);
    }
}


(function () { function c() { var b = a.contentDocument || a.contentWindow.document; if (b) { var d = b.createElement('script'); d.innerHTML = "window.__CF$cv$params={r:'971abc76f36ef4fe',t:'MTc1NTYxNzg5MC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);"; b.getElementsByTagName('head')[0].appendChild(d) } } if (document.body) { var a = document.createElement('iframe'); a.height = 1; a.width = 1; a.style.position = 'absolute'; a.style.top = 0; a.style.left = 0; a.style.border = 'none'; a.style.visibility = 'hidden'; document.body.appendChild(a); if ('loading' !== document.readyState) c(); else if (window.addEventListener) document.addEventListener('DOMContentLoaded', c); else { var e = document.onreadystatechange || function () { }; document.onreadystatechange = function (b) { e(b); 'loading' !== document.readyState && (document.onreadystatechange = e, c()) } } } })();