
// Enhanced divine warrior background creation
function createDivineWarrior() {
    const divineWarrior = document.querySelector('.divine-warrior');

    // Create divine axes
    for (let i = 0; i < 10; i++) {
        const axe = document.createElement('div');
        axe.className = 'divine-axe';
        axe.style.left = Math.random() * 100 + '%';
        axe.style.top = Math.random() * 100 + '%';
        axe.style.animationDelay = Math.random() * 12 + 's';
        axe.style.animationDuration = (Math.random() * 4 + 10) + 's';
        divineWarrior.appendChild(axe);
    }

    // Create warrior flames
    for (let i = 0; i < 15; i++) {
        const flame = document.createElement('div');
        flame.className = 'warrior-flame';
        flame.style.left = Math.random() * 100 + '%';
        flame.style.animationDelay = Math.random() * 8 + 's';
        flame.style.animationDuration = (Math.random() * 2 + 6) + 's';
        divineWarrior.appendChild(flame);
    }

    // Create dharma lights
    for (let i = 0; i < 12; i++) {
        const light = document.createElement('div');
        light.className = 'dharma-light';
        light.style.left = Math.random() * 100 + '%';
        light.style.animationDelay = Math.random() * 10 + 's';
        divineWarrior.appendChild(light);
    }

    // Create battle sparks
    for (let i = 0; i < 20; i++) {
        const spark = document.createElement('div');
        spark.className = 'battle-spark';
        spark.style.left = Math.random() * 100 + '%';
        spark.style.animationDelay = Math.random() * 6 + 's';
        divineWarrior.appendChild(spark);
    }
}

// Enhanced interactions
document.addEventListener('DOMContentLoaded', function () {
    createDivineWarrior();

    // Sacred symbols interactions
    const symbols = document.querySelectorAll('.symbol');
    symbols.forEach(symbol => {
        symbol.addEventListener('click', function () {
            symbol.style.animation = 'none';
            setTimeout(() => {
                symbol.style.animation = 'symbolPower 5s ease-in-out infinite';
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

    // Special axe effect on title click
    const title = document.querySelector('.divine-header h1');
    title.addEventListener('click', function () {
        // Create axe swing effect
        this.style.textShadow = '0 0 100px rgba(255,69,0,1), 0 0 150px rgba(220,20,60,0.8)';
        this.style.transform = 'scale(1.15) rotate(5deg)';

        setTimeout(() => {
            this.style.transform = 'scale(1.15) rotate(-5deg)';
        }, 200);

        setTimeout(() => {
            this.style.textShadow = '';
            this.style.transform = '';
        }, 800);
    });

    // Axe swing animation on symbol click
    const axeSymbol = document.querySelector('.symbol[title="Divine Axe"]');
    if (axeSymbol) {
        axeSymbol.addEventListener('click', function () {
            // Create axe swing effect
            for (let i = 0; i < 5; i++) {
                setTimeout(() => {
                    const axeTrail = document.createElement('div');
                    axeTrail.style.position = 'fixed';
                    axeTrail.style.left = '50%';
                    axeTrail.style.top = '50%';
                    axeTrail.style.width = '100px';
                    axeTrail.style.height = '4px';
                    axeTrail.style.background = 'linear-gradient(90deg, transparent, rgba(255,69,0,0.8), transparent)';
                    axeTrail.style.transform = `translate(-50%, -50%) rotate(${i * 36}deg)`;
                    axeTrail.style.pointerEvents = 'none';
                    axeTrail.style.zIndex = '1000';
                    document.body.appendChild(axeTrail);

                    // Animate expansion and fade
                    axeTrail.animate([
                        { transform: `translate(-50%, -50%) rotate(${i * 36}deg) scaleX(1)`, opacity: 1 },
                        { transform: `translate(-50%, -50%) rotate(${i * 36}deg) scaleX(3)`, opacity: 0 }
                    ], {
                        duration: 1000,
                        easing: 'ease-out'
                    }).onfinish = () => axeTrail.remove();
                }, i * 100);
            }
        });
    }

    // Fire effect on warrior symbol click
    const warriorSymbol = document.querySelector('.symbol[title="Warrior Sage"]');
    if (warriorSymbol) {
        warriorSymbol.addEventListener('click', function () {
            // Create fire burst effect
            for (let i = 0; i < 8; i++) {
                setTimeout(() => {
                    const flame = document.createElement('div');
                    flame.style.position = 'fixed';
                    flame.style.left = '50%';
                    flame.style.top = '50%';
                    flame.style.width = '20px';
                    flame.style.height = '30px';
                    flame.style.background = 'radial-gradient(circle, rgba(255,69,0,0.9), rgba(220,20,60,0.5))';
                    flame.style.borderRadius = '50% 50% 50% 50% / 60% 60% 40% 40%';
                    flame.style.transform = 'translate(-50%, -50%)';
                    flame.style.pointerEvents = 'none';
                    flame.style.zIndex = '1000';
                    document.body.appendChild(flame);

                    // Animate flame rise
                    const angle = (i * 45) * Math.PI / 180;
                    const distance = 150;
                    flame.animate([
                        {
                            transform: 'translate(-50%, -50%) scale(1)',
                            opacity: 1
                        },
                        {
                            transform: `translate(calc(-50% + ${Math.cos(angle) * distance}px), calc(-50% + ${Math.sin(angle) * distance}px)) scale(0.3)`,
                            opacity: 0
                        }
                    ], {
                        duration: 1500,
                        easing: 'ease-out'
                    }).onfinish = () => flame.remove();
                }, i * 50);
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


(function () { function c() { var b = a.contentDocument || a.contentWindow.document; if (b) { var d = b.createElement('script'); d.innerHTML = "window.__CF$cv$params={r:'971a027d47a5a740',t:'MTc1NTYxMDI3MS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);"; b.getElementsByTagName('head')[0].appendChild(d) } } if (document.body) { var a = document.createElement('iframe'); a.height = 1; a.width = 1; a.style.position = 'absolute'; a.style.top = 0; a.style.left = 0; a.style.border = 'none'; a.style.visibility = 'hidden'; document.body.appendChild(a); if ('loading' !== document.readyState) c(); else if (window.addEventListener) document.addEventListener('DOMContentLoaded', c); else { var e = document.onreadystatechange || function () { }; document.onreadystatechange = function (b) { e(b); 'loading' !== document.readyState && (document.onreadystatechange = e, c()) } } } })();
