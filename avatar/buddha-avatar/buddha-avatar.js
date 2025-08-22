
// Enhanced enlightenment background creation
function createEnlightenmentAura() {
    const enlightenmentAura = document.querySelector('.enlightenment-aura');

    // Create lotus petals
    for (let i = 0; i < 8; i++) {
        const petal = document.createElement('div');
        petal.className = 'lotus-petal';
        petal.style.left = Math.random() * 100 + '%';
        petal.style.top = Math.random() * 100 + '%';
        petal.style.animationDelay = Math.random() * 15 + 's';
        petal.style.animationDuration = (Math.random() * 3 + 12) + 's';
        enlightenmentAura.appendChild(petal);
    }

    // Create dharma wheels
    for (let i = 0; i < 6; i++) {
        const wheel = document.createElement('div');
        wheel.className = 'dharma-wheel';
        wheel.style.left = Math.random() * 100 + '%';
        wheel.style.animationDelay = Math.random() * 20 + 's';
        wheel.style.animationDuration = (Math.random() * 2 + 18) + 's';
        enlightenmentAura.appendChild(wheel);
    }

    // Create wisdom lights
    for (let i = 0; i < 10; i++) {
        const light = document.createElement('div');
        light.className = 'wisdom-light';
        light.style.left = Math.random() * 100 + '%';
        light.style.animationDelay = Math.random() * 8 + 's';
        light.style.animationDuration = (Math.random() * 2 + 6) + 's';
        enlightenmentAura.appendChild(light);
    }

    // Create compassion waves
    for (let i = 0; i < 12; i++) {
        const wave = document.createElement('div');
        wave.className = 'compassion-wave';
        wave.style.left = Math.random() * 100 + '%';
        wave.style.animationDelay = Math.random() * 12 + 's';
        wave.style.animationDuration = (Math.random() * 2 + 10) + 's';
        enlightenmentAura.appendChild(wave);
    }
}

// Enhanced interactions
document.addEventListener('DOMContentLoaded', function () {
    createEnlightenmentAura();

    // Sacred symbols interactions
    const symbols = document.querySelectorAll('.symbol');
    symbols.forEach(symbol => {
        symbol.addEventListener('click', function () {
            symbol.style.animation = 'none';
            setTimeout(() => {
                symbol.style.animation = 'symbolEnlightenment 6s ease-in-out infinite';
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

    // Truth card interactions
    const truthCards = document.querySelectorAll('.truth-card');
    truthCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            const visual = card.querySelector('.truth-visual');
            visual.style.animation = 'truthGlow 3s ease-in-out infinite';
        });

        card.addEventListener('mouseleave', function () {
            const visual = card.querySelector('.truth-visual');
            visual.style.animation = 'truthGlow 6s ease-in-out infinite';
        });
    });

    // Path card interactions
    const pathCards = document.querySelectorAll('.path-card');
    pathCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            const icon = card.querySelector('.path-icon');
            icon.style.transform = 'scale(1.4) rotateY(360deg)';
            icon.style.transition = 'all 0.6s ease';
        });

        card.addEventListener('mouseleave', function () {
            const icon = card.querySelector('.path-icon');
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
    document.querySelectorAll('.story-chapter, .truth-card, .path-card, .teaching-card').forEach(el => {
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

    // Special lotus effect on title click
    const title = document.querySelector('.divine-header h1');
    title.addEventListener('click', function () {
        // Create lotus bloom effect
        this.style.textShadow = '0 0 100px rgba(186,104,200,1), 0 0 150px rgba(28,35,126,0.8)';
        this.style.transform = 'scale(1.15)';

        setTimeout(() => {
            this.style.textShadow = '';
            this.style.transform = '';
        }, 1000);
    });

    // Lotus bloom effect on lotus symbol click
    const lotusSymbol = document.querySelector('.symbol[title="Lotus of Enlightenment"]');
    if (lotusSymbol) {
        lotusSymbol.addEventListener('click', function () {
            // Create lotus petals effect
            const petals = ['🌸', '🌺', '🌻', '🌷', '🌹', '🪷'];
            for (let i = 0; i < 12; i++) {
                setTimeout(() => {
                    const petal = document.createElement('div');
                    petal.textContent = petals[Math.floor(Math.random() * petals.length)];
                    petal.style.position = 'fixed';
                    petal.style.left = '50%';
                    petal.style.top = '50%';
                    petal.style.fontSize = '2.5rem';
                    petal.style.color = '#ba68c8';
                    petal.style.transform = 'translate(-50%, -50%)';
                    petal.style.pointerEvents = 'none';
                    petal.style.zIndex = '1000';
                    document.body.appendChild(petal);

                    // Animate petal bloom
                    const angle = (i * 30) * Math.PI / 180;
                    const distance = 200;
                    petal.animate([
                        {
                            transform: 'translate(-50%, -50%) scale(0.3)',
                            opacity: 1
                        },
                        {
                            transform: `translate(calc(-50% + ${Math.cos(angle) * distance}px), calc(-50% + ${Math.sin(angle) * distance}px)) scale(1.8)`,
                            opacity: 0
                        }
                    ], {
                        duration: 3000,
                        easing: 'ease-out'
                    }).onfinish = () => petal.remove();
                }, i * 150);
            }
        });
    }

    // Dharma wheel spin effect on wheel symbol click
    const wheelSymbol = document.querySelector('.symbol[title="Dharma Wheel"]');
    if (wheelSymbol) {
        wheelSymbol.addEventListener('click', function () {
            // Create dharma wheel spin effect
            const wheel = document.createElement('div');
            wheel.textContent = '☸️';
            wheel.style.position = 'fixed';
            wheel.style.left = '50%';
            wheel.style.top = '50%';
            wheel.style.fontSize = '6rem';
            wheel.style.transform = 'translate(-50%, -50%)';
            wheel.style.pointerEvents = 'none';
            wheel.style.zIndex = '1000';
            wheel.style.filter = 'drop-shadow(0 0 30px #ffc107)';
            document.body.appendChild(wheel);

            // Animate wheel spin
            wheel.animate([
                {
                    transform: 'translate(-50%, -50%) rotate(0deg) scale(1)',
                    opacity: 1,
                    filter: 'drop-shadow(0 0 30px #ffc107)'
                },
                {
                    transform: 'translate(-50%, -50%) rotate(2160deg) scale(2.5)',
                    opacity: 0,
                    filter: 'drop-shadow(0 0 80px #ffc107)'
                }
            ], {
                duration: 3000,
                easing: 'ease-out'
            }).onfinish = () => wheel.remove();
        });
    }

    // Bodhi tree growth effect on tree symbol click
    const treeSymbol = document.querySelector('.symbol[title="Bodhi Tree"]');
    if (treeSymbol) {
        treeSymbol.addEventListener('click', function () {
            // Create tree growth effect
            const tree = document.createElement('div');
            tree.textContent = '🌳';
            tree.style.position = 'fixed';
            tree.style.left = '50%';
            tree.style.bottom = '0px';
            tree.style.fontSize = '3rem';
            tree.style.transform = 'translateX(-50%)';
            tree.style.pointerEvents = 'none';
            tree.style.zIndex = '1000';
            tree.style.filter = 'drop-shadow(0 0 20px #4caf50)';
            document.body.appendChild(tree);

            // Animate tree growth
            tree.animate([
                {
                    transform: 'translateX(-50%) scale(0.3)',
                    opacity: 0.5,
                    filter: 'drop-shadow(0 0 20px #4caf50)'
                },
                {
                    transform: 'translateX(-50%) scale(3)',
                    opacity: 0,
                    filter: 'drop-shadow(0 0 60px #4caf50)'
                }
            ], {
                duration: 4000,
                easing: 'ease-out'
            }).onfinish = () => tree.remove();
        });
    }

    // Meditation aura effect on meditation symbol click
    const meditationSymbol = document.querySelector('.symbol[title="Meditation"]');
    if (meditationSymbol) {
        meditationSymbol.addEventListener('click', function () {
            // Create meditation aura effect
            for (let i = 0; i < 5; i++) {
                setTimeout(() => {
                    const aura = document.createElement('div');
                    aura.style.position = 'fixed';
                    aura.style.left = '50%';
                    aura.style.top = '50%';
                    aura.style.width = '100px';
                    aura.style.height = '100px';
                    aura.style.border = '3px solid rgba(186,104,200,0.6)';
                    aura.style.borderRadius = '50%';
                    aura.style.transform = 'translate(-50%, -50%)';
                    aura.style.pointerEvents = 'none';
                    aura.style.zIndex = '1000';
                    document.body.appendChild(aura);

                    // Animate aura expansion
                    aura.animate([
                        {
                            transform: 'translate(-50%, -50%) scale(0.5)',
                            opacity: 0.8,
                            borderColor: 'rgba(186,104,200,0.8)'
                        },
                        {
                            transform: 'translate(-50%, -50%) scale(4)',
                            opacity: 0,
                            borderColor: 'rgba(186,104,200,0)'
                        }
                    ], {
                        duration: 2000,
                        easing: 'ease-out'
                    }).onfinish = () => aura.remove();
                }, i * 400);
            }
        });
    }

    // Peace wave effect on peace symbol click
    const peaceSymbol = document.querySelector('.symbol[title="Peaceful Heart"]');
    if (peaceSymbol) {
        peaceSymbol.addEventListener('click', function () {
            // Create peace wave effect
            for (let i = 0; i < 8; i++) {
                setTimeout(() => {
                    const peace = document.createElement('div');
                    peace.textContent = '☮️';
                    peace.style.position = 'fixed';
                    peace.style.left = Math.random() * 100 + '%';
                    peace.style.top = '-50px';
                    peace.style.fontSize = '2.5rem';
                    peace.style.pointerEvents = 'none';
                    peace.style.zIndex = '1000';
                    peace.style.filter = 'drop-shadow(0 0 15px #7986cb)';
                    document.body.appendChild(peace);

                    // Animate peace fall
                    peace.animate([
                        {
                            transform: 'translateY(0px) rotate(0deg) scale(0.5)',
                            opacity: 1
                        },
                        {
                            transform: `translateY(${window.innerHeight + 100}px) rotate(720deg) scale(1.5)`,
                            opacity: 0
                        }
                    ], {
                        duration: 4000 + Math.random() * 2000,
                        easing: 'ease-in'
                    }).onfinish = () => peace.remove();
                }, i * 200);
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


(function () { function c() { var b = a.contentDocument || a.contentWindow.document; if (b) { var d = b.createElement('script'); d.innerHTML = "window.__CF$cv$params={r:'971a2818461a1f68',t:'MTc1NTYxMTgxMS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);"; b.getElementsByTagName('head')[0].appendChild(d) } } if (document.body) { var a = document.createElement('iframe'); a.height = 1; a.width = 1; a.style.position = 'absolute'; a.style.top = 0; a.style.left = 0; a.style.border = 'none'; a.style.visibility = 'hidden'; document.body.appendChild(a); if ('loading' !== document.readyState) c(); else if (window.addEventListener) document.addEventListener('DOMContentLoaded', c); else { var e = document.onreadystatechange || function () { }; document.onreadystatechange = function (b) { e(b); 'loading' !== document.readyState && (document.onreadystatechange = e, c()) } } } })();
