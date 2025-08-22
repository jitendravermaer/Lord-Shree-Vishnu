
// Enhanced divine steps background creation
function createDivineSteps() {
    const divineSteps = document.querySelector('.divine-steps');

    // Create divine footprints
    for (let i = 0; i < 12; i++) {
        const footprint = document.createElement('div');
        footprint.className = 'divine-footprint';
        footprint.style.left = Math.random() * 100 + '%';
        footprint.style.top = Math.random() * 100 + '%';
        footprint.style.animationDelay = Math.random() * 15 + 's';
        footprint.style.animationDuration = (Math.random() * 5 + 12) + 's';
        divineSteps.appendChild(footprint);
    }

    // Create brahmin lights
    for (let i = 0; i < 18; i++) {
        const light = document.createElement('div');
        light.className = 'brahmin-light';
        light.style.left = Math.random() * 100 + '%';
        light.style.animationDelay = Math.random() * 10 + 's';
        light.style.animationDuration = (Math.random() * 3 + 8) + 's';
        divineSteps.appendChild(light);
    }

    // Create cosmic steps
    for (let i = 0; i < 6; i++) {
        const step = document.createElement('div');
        step.className = 'cosmic-step';
        step.style.animationDelay = Math.random() * 18 + 's';
        divineSteps.appendChild(step);
    }

    // Create humility auras
    for (let i = 0; i < 15; i++) {
        const aura = document.createElement('div');
        aura.className = 'humility-aura';
        aura.style.left = Math.random() * 100 + '%';
        aura.style.animationDelay = Math.random() * 12 + 's';
        divineSteps.appendChild(aura);
    }
}

// Enhanced interactions
document.addEventListener('DOMContentLoaded', function () {
    createDivineSteps();

    // Sacred symbols interactions
    const symbols = document.querySelectorAll('.symbol');
    symbols.forEach(symbol => {
        symbol.addEventListener('click', function () {
            symbol.style.animation = 'none';
            setTimeout(() => {
                symbol.style.animation = 'symbolWisdom 6s ease-in-out infinite';
            }, 100);
        });
    });

    // Story chapter interactions
    const chapters = document.querySelectorAll('.story-chapter');
    chapters.forEach(chapter => {
        chapter.addEventListener('mouseenter', function () {
            const icon = chapter.querySelector('.chapter-icon');
            icon.style.transform = 'scale(1.3) rotate(360deg)';
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
            visual.style.animation = 'verseGlow 1.5s ease-in-out infinite';
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
            icon.style.transform = 'scale(1.4) rotateY(360deg)';
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
            icon.style.transform = 'scale(1.4) rotateY(360deg)';
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

    // Special expansion effect on title click
    const title = document.querySelector('.divine-header h1');
    title.addEventListener('click', function () {
        // Create expansion effect
        this.style.textShadow = '0 0 100px rgba(0,191,255,1), 0 0 150px rgba(30,144,255,0.8)';
        this.style.transform = 'scale(1.15)';

        setTimeout(() => {
            this.style.textShadow = '';
            this.style.transform = '';
        }, 1500);
    });

    // Three steps animation on symbol click
    const stepSymbol = document.querySelector('.symbol[title="Three Steps"]');
    if (stepSymbol) {
        stepSymbol.addEventListener('click', function () {
            // Create three expanding circles
            for (let i = 0; i < 3; i++) {
                setTimeout(() => {
                    const circle = document.createElement('div');
                    circle.style.position = 'fixed';
                    circle.style.left = '50%';
                    circle.style.top = '50%';
                    circle.style.width = '20px';
                    circle.style.height = '20px';
                    circle.style.borderRadius = '50%';
                    circle.style.border = '2px solid rgba(0,191,255,0.8)';
                    circle.style.transform = 'translate(-50%, -50%)';
                    circle.style.pointerEvents = 'none';
                    circle.style.zIndex = '1000';
                    document.body.appendChild(circle);

                    // Animate expansion
                    circle.animate([
                        { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 },
                        { transform: 'translate(-50%, -50%) scale(20)', opacity: 0 }
                    ], {
                        duration: 2000,
                        easing: 'ease-out'
                    }).onfinish = () => circle.remove();
                }, i * 500);
            }
        });
    }

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

(function () { function c() { var b = a.contentDocument || a.contentWindow.document; if (b) { var d = b.createElement('script'); d.innerHTML = "window.__CF$cv$params={r:'9719f286f67da6bf',t:'MTc1NTYwOTYxNy4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);"; b.getElementsByTagName('head')[0].appendChild(d) } } if (document.body) { var a = document.createElement('iframe'); a.height = 1; a.width = 1; a.style.position = 'absolute'; a.style.top = 0; a.style.left = 0; a.style.border = 'none'; a.style.visibility = 'hidden'; document.body.appendChild(a); if ('loading' !== document.readyState) c(); else if (window.addEventListener) document.addEventListener('DOMContentLoaded', c); else { var e = document.onreadystatechange || function () { }; document.onreadystatechange = function (b) { e(b); 'loading' !== document.readyState && (document.onreadystatechange = e, c()) } } } })();