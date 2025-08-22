
// Enhanced divine righteousness background creation
function createDivineRighteousness() {
    const divineRighteousness = document.querySelector('.divine-righteousness');

    // Create divine arrows
    for (let i = 0; i < 8; i++) {
        const arrow = document.createElement('div');
        arrow.className = 'divine-arrow';
        arrow.style.left = Math.random() * 100 + '%';
        arrow.style.top = Math.random() * 100 + '%';
        arrow.style.animationDelay = Math.random() * 15 + 's';
        arrow.style.animationDuration = (Math.random() * 5 + 12) + 's';
        divineRighteousness.appendChild(arrow);
    }

    // Create virtue lights
    for (let i = 0; i < 12; i++) {
        const light = document.createElement('div');
        light.className = 'virtue-light';
        light.style.left = Math.random() * 100 + '%';
        light.style.animationDelay = Math.random() * 12 + 's';
        light.style.animationDuration = (Math.random() * 3 + 10) + 's';
        divineRighteousness.appendChild(light);
    }

    // Create dharma lotus
    for (let i = 0; i < 10; i++) {
        const lotus = document.createElement('div');
        lotus.className = 'dharma-lotus';
        lotus.style.left = Math.random() * 100 + '%';
        lotus.style.animationDelay = Math.random() * 18 + 's';
        divineRighteousness.appendChild(lotus);
    }

    // Create righteousness sparks
    for (let i = 0; i < 15; i++) {
        const spark = document.createElement('div');
        spark.className = 'righteousness-spark';
        spark.style.left = Math.random() * 100 + '%';
        spark.style.animationDelay = Math.random() * 8 + 's';
        divineRighteousness.appendChild(spark);
    }
}

// Enhanced interactions
document.addEventListener('DOMContentLoaded', function () {
    createDivineRighteousness();

    // Sacred symbols interactions
    const symbols = document.querySelectorAll('.symbol');
    symbols.forEach(symbol => {
        symbol.addEventListener('click', function () {
            symbol.style.animation = 'none';
            setTimeout(() => {
                symbol.style.animation = 'symbolGrace 6s ease-in-out infinite';
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
            visual.style.animation = 'verseGlow 2s ease-in-out infinite';
        });

        card.addEventListener('mouseleave', function () {
            const visual = card.querySelector('.verse-visual');
            visual.style.animation = 'verseGlow 6s ease-in-out infinite';
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

    // Special bow effect on title click
    const title = document.querySelector('.divine-header h1');
    title.addEventListener('click', function () {
        // Create bow draw effect
        this.style.textShadow = '0 0 100px rgba(65,105,225,1), 0 0 150px rgba(30,60,114,0.8)';
        this.style.transform = 'scale(1.15)';

        setTimeout(() => {
            this.style.textShadow = '';
            this.style.transform = '';
        }, 1000);
    });

    // Arrow flight animation on bow symbol click
    const bowSymbol = document.querySelector('.symbol[title="Divine Bow"]');
    if (bowSymbol) {
        bowSymbol.addEventListener('click', function () {
            // Create arrow flight effect
            for (let i = 0; i < 3; i++) {
                setTimeout(() => {
                    const arrow = document.createElement('div');
                    arrow.style.position = 'fixed';
                    arrow.style.left = '20%';
                    arrow.style.top = '50%';
                    arrow.style.width = '60px';
                    arrow.style.height = '6px';
                    arrow.style.background = 'linear-gradient(90deg, transparent, rgba(255,215,0,0.9), rgba(65,105,225,0.7))';
                    arrow.style.clipPath = 'polygon(0% 40%, 85% 40%, 85% 20%, 100% 50%, 85% 80%, 85% 60%, 0% 60%)';
                    arrow.style.transform = 'translateY(-50%)';
                    arrow.style.pointerEvents = 'none';
                    arrow.style.zIndex = '1000';
                    document.body.appendChild(arrow);

                    // Animate arrow flight
                    arrow.animate([
                        { transform: 'translateY(-50%) translateX(0px)', opacity: 1 },
                        { transform: 'translateY(-50%) translateX(80vw)', opacity: 0 }
                    ], {
                        duration: 2000,
                        easing: 'ease-out'
                    }).onfinish = () => arrow.remove();
                }, i * 300);
            }
        });
    }

    // Lotus bloom effect on lotus symbol click
    const lotusSymbol = document.querySelector('.symbol[title="Lotus of Purity"]');
    if (lotusSymbol) {
        lotusSymbol.addEventListener('click', function () {
            // Create lotus bloom effect
            for (let i = 0; i < 6; i++) {
                setTimeout(() => {
                    const petal = document.createElement('div');
                    petal.style.position = 'fixed';
                    petal.style.left = '50%';
                    petal.style.top = '50%';
                    petal.style.width = '30px';
                    petal.style.height = '40px';
                    petal.style.background = 'radial-gradient(ellipse, rgba(255,192,203,0.9), rgba(65,105,225,0.5))';
                    petal.style.borderRadius = '50% 10% 50% 10%';
                    petal.style.transform = 'translate(-50%, -50%)';
                    petal.style.pointerEvents = 'none';
                    petal.style.zIndex = '1000';
                    document.body.appendChild(petal);

                    // Animate petal bloom
                    const angle = (i * 60) * Math.PI / 180;
                    const distance = 120;
                    petal.animate([
                        {
                            transform: 'translate(-50%, -50%) scale(0.3) rotate(0deg)',
                            opacity: 1
                        },
                        {
                            transform: `translate(calc(-50% + ${Math.cos(angle) * distance}px), calc(-50% + ${Math.sin(angle) * distance}px)) scale(1.2) rotate(360deg)`,
                            opacity: 0
                        }
                    ], {
                        duration: 2000,
                        easing: 'ease-out'
                    }).onfinish = () => petal.remove();
                }, i * 100);
            }
        });
    }

    // Crown glow effect on crown symbol click
    const crownSymbol = document.querySelector('.symbol[title="Crown of Dharma"]');
    if (crownSymbol) {
        crownSymbol.addEventListener('click', function () {
            // Create crown glow effect
            const glow = document.createElement('div');
            glow.style.position = 'fixed';
            glow.style.left = '50%';
            glow.style.top = '50%';
            glow.style.width = '100px';
            glow.style.height = '100px';
            glow.style.background = 'radial-gradient(circle, rgba(255,215,0,0.8), transparent)';
            glow.style.borderRadius = '50%';
            glow.style.transform = 'translate(-50%, -50%)';
            glow.style.pointerEvents = 'none';
            glow.style.zIndex = '1000';
            document.body.appendChild(glow);

            // Animate crown glow
            glow.animate([
                { transform: 'translate(-50%, -50%) scale(0.5)', opacity: 1 },
                { transform: 'translate(-50%, -50%) scale(3)', opacity: 0 }
            ], {
                duration: 1500,
                easing: 'ease-out'
            }).onfinish = () => glow.remove();
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


(function () { function c() { var b = a.contentDocument || a.contentWindow.document; if (b) { var d = b.createElement('script'); d.innerHTML = "window.__CF$cv$params={r:'971a13246656a7b8',t:'MTc1NTYxMDk1My4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);"; b.getElementsByTagName('head')[0].appendChild(d) } } if (document.body) { var a = document.createElement('iframe'); a.height = 1; a.width = 1; a.style.position = 'absolute'; a.style.top = 0; a.style.left = 0; a.style.border = 'none'; a.style.visibility = 'hidden'; document.body.appendChild(a); if ('loading' !== document.readyState) c(); else if (window.addEventListener) document.addEventListener('DOMContentLoaded', c); else { var e = document.onreadystatechange || function () { }; document.onreadystatechange = function (b) { e(b); 'loading' !== document.readyState && (document.onreadystatechange = e, c()) } } } })();
