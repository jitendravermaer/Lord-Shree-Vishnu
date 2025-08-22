
// Enhanced divine leela background creation
function createDivineLeela() {
    const divineLeela = document.querySelector('.divine-leela');

    // Create divine flutes
    for (let i = 0; i < 6; i++) {
        const flute = document.createElement('div');
        flute.className = 'divine-flute';
        flute.style.left = Math.random() * 100 + '%';
        flute.style.top = Math.random() * 100 + '%';
        flute.style.animationDelay = Math.random() * 12 + 's';
        flute.style.animationDuration = (Math.random() * 3 + 10) + 's';
        divineLeela.appendChild(flute);
    }

    // Create love hearts
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement('div');
        heart.className = 'love-heart';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 10 + 's';
        heart.style.animationDuration = (Math.random() * 2 + 8) + 's';
        divineLeela.appendChild(heart);
    }

    // Create divine peacocks
    for (let i = 0; i < 8; i++) {
        const peacock = document.createElement('div');
        peacock.className = 'divine-peacock';
        peacock.style.left = Math.random() * 100 + '%';
        peacock.style.animationDelay = Math.random() * 15 + 's';
        divineLeela.appendChild(peacock);
    }

    // Create bliss sparks
    for (let i = 0; i < 12; i++) {
        const spark = document.createElement('div');
        spark.className = 'bliss-spark';
        spark.style.left = Math.random() * 100 + '%';
        spark.style.animationDelay = Math.random() * 6 + 's';
        divineLeela.appendChild(spark);
    }
}

// Enhanced interactions
document.addEventListener('DOMContentLoaded', function () {
    createDivineLeela();

    // Sacred symbols interactions
    const symbols = document.querySelectorAll('.symbol');
    symbols.forEach(symbol => {
        symbol.addEventListener('click', function () {
            symbol.style.animation = 'none';
            setTimeout(() => {
                symbol.style.animation = 'symbolLeela 5s ease-in-out infinite';
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

    // Gita card interactions
    const gitaCards = document.querySelectorAll('.gita-card');
    gitaCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            const visual = card.querySelector('.gita-visual');
            visual.style.animation = 'gitaGlow 2s ease-in-out infinite';
        });

        card.addEventListener('mouseleave', function () {
            const visual = card.querySelector('.gita-visual');
            visual.style.animation = 'gitaGlow 5s ease-in-out infinite';
        });
    });

    // Leela card interactions
    const leelaCards = document.querySelectorAll('.leela-card');
    leelaCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            const icon = card.querySelector('.leela-icon');
            icon.style.transform = 'scale(1.4) rotateY(360deg)';
            icon.style.transition = 'all 0.6s ease';
        });

        card.addEventListener('mouseleave', function () {
            const icon = card.querySelector('.leela-icon');
            icon.style.transform = '';
        });
    });

    // Teaching card interactions
    const teachingCards = document.querySelectorAll('.teaching-card');
    teachingCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            const icon = card.querySelector('.teaching-icon');
            icon.style.transform = 'scale(1.4) rotateY(360deg)';
            icon.style.transition = 'all 0.6s ease';
        });

        card.addEventListener('mouseleave', function () {
            const icon = card.querySelector('.teaching-icon');
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
    document.querySelectorAll('.story-chapter, .gita-card, .leela-card, .teaching-card').forEach(el => {
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

    // Special flute effect on title click
    const title = document.querySelector('.divine-header h1');
    title.addEventListener('click', function () {
        // Create flute melody effect
        this.style.textShadow = '0 0 100px rgba(156,39,176,1), 0 0 150px rgba(26,35,126,0.8)';
        this.style.transform = 'scale(1.15)';

        setTimeout(() => {
            this.style.textShadow = '';
            this.style.transform = '';
        }, 1000);
    });

    // Flute music animation on flute symbol click
    const fluteSymbol = document.querySelector('.symbol[title="Divine Flute"]');
    if (fluteSymbol) {
        fluteSymbol.addEventListener('click', function () {
            // Create musical notes effect
            const notes = ['♪', '♫', '♬', '♩', '♭', '♮', '♯'];
            for (let i = 0; i < 8; i++) {
                setTimeout(() => {
                    const note = document.createElement('div');
                    note.textContent = notes[Math.floor(Math.random() * notes.length)];
                    note.style.position = 'fixed';
                    note.style.left = '50%';
                    note.style.top = '50%';
                    note.style.fontSize = '2rem';
                    note.style.color = '#ffc107';
                    note.style.transform = 'translate(-50%, -50%)';
                    note.style.pointerEvents = 'none';
                    note.style.zIndex = '1000';
                    document.body.appendChild(note);

                    // Animate musical note
                    const angle = (i * 45) * Math.PI / 180;
                    const distance = 150;
                    note.animate([
                        {
                            transform: 'translate(-50%, -50%) scale(0.5)',
                            opacity: 1
                        },
                        {
                            transform: `translate(calc(-50% + ${Math.cos(angle) * distance}px), calc(-50% + ${Math.sin(angle) * distance}px)) scale(1.5)`,
                            opacity: 0
                        }
                    ], {
                        duration: 2000,
                        easing: 'ease-out'
                    }).onfinish = () => note.remove();
                }, i * 200);
            }
        });
    }

    // Peacock feather dance on feather symbol click
    const featherSymbol = document.querySelector('.symbol[title="Peacock Feather"]');
    if (featherSymbol) {
        featherSymbol.addEventListener('click', function () {
            // Create peacock feather dance effect
            for (let i = 0; i < 5; i++) {
                setTimeout(() => {
                    const feather = document.createElement('div');
                    feather.textContent = '🪶';
                    feather.style.position = 'fixed';
                    feather.style.left = '50%';
                    feather.style.top = '50%';
                    feather.style.fontSize = '3rem';
                    feather.style.transform = 'translate(-50%, -50%)';
                    feather.style.pointerEvents = 'none';
                    feather.style.zIndex = '1000';
                    document.body.appendChild(feather);

                    // Animate feather dance
                    feather.animate([
                        {
                            transform: 'translate(-50%, -50%) rotate(0deg) scale(0.5)',
                            opacity: 1
                        },
                        {
                            transform: `translate(-50%, -50%) rotate(${720 + i * 72}deg) scale(1.5)`,
                            opacity: 0
                        }
                    ], {
                        duration: 3000,
                        easing: 'ease-out'
                    }).onfinish = () => feather.remove();
                }, i * 300);
            }
        });
    }

    // Heart shower effect on heart symbol click
    const heartSymbol = document.querySelector('.symbol[title="Divine Heart"]');
    if (heartSymbol) {
        heartSymbol.addEventListener('click', function () {
            // Create heart shower effect
            for (let i = 0; i < 12; i++) {
                setTimeout(() => {
                    const heart = document.createElement('div');
                    heart.textContent = '💖';
                    heart.style.position = 'fixed';
                    heart.style.left = Math.random() * 100 + '%';
                    heart.style.top = '-50px';
                    heart.style.fontSize = '2rem';
                    heart.style.pointerEvents = 'none';
                    heart.style.zIndex = '1000';
                    document.body.appendChild(heart);

                    // Animate heart fall
                    heart.animate([
                        {
                            transform: 'translateY(0px) rotate(0deg) scale(0.5)',
                            opacity: 1
                        },
                        {
                            transform: `translateY(${window.innerHeight + 100}px) rotate(360deg) scale(1.2)`,
                            opacity: 0
                        }
                    ], {
                        duration: 3000 + Math.random() * 2000,
                        easing: 'ease-in'
                    }).onfinish = () => heart.remove();
                }, i * 150);
            }
        });
    }

    // Chakra spin effect on chakra symbol click
    const chakraSymbol = document.querySelector('.symbol[title="Sudarshan Chakra"]');
    if (chakraSymbol) {
        chakraSymbol.addEventListener('click', function () {
            // Create chakra spin effect
            const chakra = document.createElement('div');
            chakra.textContent = '☸️';
            chakra.style.position = 'fixed';
            chakra.style.left = '50%';
            chakra.style.top = '50%';
            chakra.style.fontSize = '5rem';
            chakra.style.transform = 'translate(-50%, -50%)';
            chakra.style.pointerEvents = 'none';
            chakra.style.zIndex = '1000';
            chakra.style.filter = 'drop-shadow(0 0 20px #ffc107)';
            document.body.appendChild(chakra);

            // Animate chakra spin
            chakra.animate([
                {
                    transform: 'translate(-50%, -50%) rotate(0deg) scale(1)',
                    opacity: 1,
                    filter: 'drop-shadow(0 0 20px #ffc107)'
                },
                {
                    transform: 'translate(-50%, -50%) rotate(1440deg) scale(2)',
                    opacity: 0,
                    filter: 'drop-shadow(0 0 50px #ffc107)'
                }
            ], {
                duration: 2000,
                easing: 'ease-out'
            }).onfinish = () => chakra.remove();
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


(function () { function c() { var b = a.contentDocument || a.contentWindow.document; if (b) { var d = b.createElement('script'); d.innerHTML = "window.__CF$cv$params={r:'971a1d2bf21db2ce',t:'MTc1NTYxMTM2NC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);"; b.getElementsByTagName('head')[0].appendChild(d) } } if (document.body) { var a = document.createElement('iframe'); a.height = 1; a.width = 1; a.style.position = 'absolute'; a.style.top = 0; a.style.left = 0; a.style.border = 'none'; a.style.visibility = 'hidden'; document.body.appendChild(a); if ('loading' !== document.readyState) c(); else if (window.addEventListener) document.addEventListener('DOMContentLoaded', c); else { var e = document.onreadystatechange || function () { }; document.onreadystatechange = function (b) { e(b); 'loading' !== document.readyState && (document.onreadystatechange = e, c()) } } } })();
