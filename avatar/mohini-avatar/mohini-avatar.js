
// Enhanced mystical background creation
function createMysticalAura() {
    const mysticalAura = document.querySelector('.mystical-aura');

    // Create enchanting lotus flowers
    for (let i = 0; i < 8; i++) {
        const lotus = document.createElement('div');
        lotus.className = 'enchanting-lotus';
        lotus.style.left = Math.random() * 100 + '%';
        lotus.style.animationDelay = Math.random() * 20 + 's';
        lotus.style.animationDuration = (Math.random() * 3 + 18) + 's';
        mysticalAura.appendChild(lotus);
    }

    // Create divine pearls
    for (let i = 0; i < 12; i++) {
        const pearl = document.createElement('div');
        pearl.className = 'divine-pearl';
        pearl.style.left = Math.random() * 100 + '%';
        pearl.style.animationDelay = Math.random() * 15 + 's';
        pearl.style.animationDuration = (Math.random() * 2 + 13) + 's';
        mysticalAura.appendChild(pearl);
    }

    // Create mystical veils
    for (let i = 0; i < 6; i++) {
        const veil = document.createElement('div');
        veil.className = 'mystical-veil';
        veil.style.left = Math.random() * 100 + '%';
        veil.style.animationDelay = Math.random() * 18 + 's';
        veil.style.animationDuration = (Math.random() * 2 + 16) + 's';
        mysticalAura.appendChild(veil);
    }

    // Create nectar drops
    for (let i = 0; i < 10; i++) {
        const nectar = document.createElement('div');
        nectar.className = 'nectar-drop';
        nectar.style.left = Math.random() * 100 + '%';
        nectar.style.animationDelay = Math.random() * 12 + 's';
        nectar.style.animationDuration = (Math.random() * 2 + 10) + 's';
        mysticalAura.appendChild(nectar);
    }
}

// Enhanced interactions
document.addEventListener('DOMContentLoaded', function () {
    createMysticalAura();

    // Sacred symbols interactions
    const symbols = document.querySelectorAll('.symbol');
    symbols.forEach(symbol => {
        symbol.addEventListener('click', function () {
            symbol.style.animation = 'none';
            setTimeout(() => {
                symbol.style.animation = 'symbolGrace 5s ease-in-out infinite';
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

    // Churning card interactions
    const churningCards = document.querySelectorAll('.churning-card');
    churningCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            const visual = card.querySelector('.churning-visual');
            visual.style.animation = 'churningGlow 3s ease-in-out infinite';
        });

        card.addEventListener('mouseleave', function () {
            const visual = card.querySelector('.churning-visual');
            visual.style.animation = 'churningGlow 5s ease-in-out infinite';
        });
    });

    // Enchantment card interactions
    const enchantmentCards = document.querySelectorAll('.enchantment-card');
    enchantmentCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            const icon = card.querySelector('.enchantment-icon');
            icon.style.transform = 'scale(1.4) rotateY(360deg)';
            icon.style.transition = 'all 0.6s ease';
        });

        card.addEventListener('mouseleave', function () {
            const icon = card.querySelector('.enchantment-icon');
            icon.style.transform = '';
        });
    });

    // Lesson card interactions
    const lessonCards = document.querySelectorAll('.lesson-card');
    lessonCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            const icon = card.querySelector('.lesson-icon');
            icon.style.transform = 'scale(1.4) rotateY(360deg)';
            icon.style.transition = 'all 0.6s ease';
        });

        card.addEventListener('mouseleave', function () {
            const icon = card.querySelector('.lesson-icon');
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
    document.querySelectorAll('.story-chapter, .churning-card, .enchantment-card, .lesson-card').forEach(el => {
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

    // Special enchantment effect on title click
    const title = document.querySelector('.divine-header h1');
    title.addEventListener('click', function () {
        // Create enchantment burst effect
        this.style.textShadow = '0 0 100px rgba(233,30,99,1), 0 0 150px rgba(142,36,170,0.8)';
        this.style.transform = 'scale(1.15)';

        setTimeout(() => {
            this.style.textShadow = '';
            this.style.transform = '';
        }, 1000);
    });

    // Divine beauty effect on beauty symbol click
    const beautySymbol = document.querySelector('.symbol[title="Divine Beauty"]');
    if (beautySymbol) {
        beautySymbol.addEventListener('click', function () {
            // Create beauty sparkle effect
            for (let i = 0; i < 15; i++) {
                setTimeout(() => {
                    const sparkle = document.createElement('div');
                    sparkle.textContent = '✨';
                    sparkle.style.position = 'fixed';
                    sparkle.style.left = Math.random() * 100 + '%';
                    sparkle.style.top = Math.random() * 100 + '%';
                    sparkle.style.fontSize = '2rem';
                    sparkle.style.pointerEvents = 'none';
                    sparkle.style.zIndex = '1000';
                    sparkle.style.filter = 'drop-shadow(0 0 20px #e91e63)';
                    document.body.appendChild(sparkle);

                    // Animate sparkle
                    sparkle.animate([
                        {
                            transform: 'scale(0.3) rotate(0deg)',
                            opacity: 1
                        },
                        {
                            transform: 'scale(2) rotate(360deg)',
                            opacity: 0
                        }
                    ], {
                        duration: 2000,
                        easing: 'ease-out'
                    }).onfinish = () => sparkle.remove();
                }, i * 100);
            }
        });
    }

    // Nectar pot effect on pot symbol click
    const potSymbol = document.querySelector('.symbol[title="Nectar Pot"]');
    if (potSymbol) {
        potSymbol.addEventListener('click', function () {
            // Create nectar flow effect
            const pot = document.createElement('div');
            pot.textContent = '🏺';
            pot.style.position = 'fixed';
            pot.style.left = '50%';
            pot.style.top = '20%';
            pot.style.fontSize = '4rem';
            pot.style.transform = 'translateX(-50%)';
            pot.style.pointerEvents = 'none';
            pot.style.zIndex = '1000';
            pot.style.filter = 'drop-shadow(0 0 30px #ffc107)';
            document.body.appendChild(pot);

            // Create nectar drops
            for (let i = 0; i < 10; i++) {
                setTimeout(() => {
                    const drop = document.createElement('div');
                    drop.style.position = 'fixed';
                    drop.style.left = '50%';
                    drop.style.top = '25%';
                    drop.style.width = '15px';
                    drop.style.height = '20px';
                    drop.style.background = 'linear-gradient(45deg, #ffc107, #ffeb3b)';
                    drop.style.borderRadius = '50% 50% 50% 50% / 60% 60% 40% 40%';
                    drop.style.transform = 'translateX(-50%)';
                    drop.style.pointerEvents = 'none';
                    drop.style.zIndex = '999';
                    document.body.appendChild(drop);

                    // Animate nectar drop
                    drop.animate([
                        {
                            transform: 'translateX(-50%) translateY(0px) scale(0.5)',
                            opacity: 1
                        },
                        {
                            transform: `translateX(${-50 + (Math.random() - 0.5) * 100}%) translateY(${window.innerHeight}px) scale(1.5)`,
                            opacity: 0
                        }
                    ], {
                        duration: 2000 + Math.random() * 1000,
                        easing: 'ease-in'
                    }).onfinish = () => drop.remove();
                }, i * 200);
            }

            // Remove pot after animation
            setTimeout(() => pot.remove(), 3000);
        });
    }

    // Enchanting dance effect on dance symbol click
    const danceSymbol = document.querySelector('.symbol[title="Enchanting Dance"]');
    if (danceSymbol) {
        danceSymbol.addEventListener('click', function () {
            // Create dance effect
            const dancer = document.createElement('div');
            dancer.textContent = '💃';
            dancer.style.position = 'fixed';
            dancer.style.left = '10%';
            dancer.style.top = '50%';
            dancer.style.fontSize = '5rem';
            dancer.style.transform = 'translateY(-50%)';
            dancer.style.pointerEvents = 'none';
            dancer.style.zIndex = '1000';
            dancer.style.filter = 'drop-shadow(0 0 40px #e91e63)';
            document.body.appendChild(dancer);

            // Animate dance across screen
            dancer.animate([
                {
                    transform: 'translateY(-50%) scale(1) rotate(0deg)',
                    left: '10%',
                    opacity: 0.5
                },
                {
                    transform: 'translateY(-50%) scale(1.5) rotate(180deg)',
                    left: '30%',
                    opacity: 1
                },
                {
                    transform: 'translateY(-50%) scale(2) rotate(360deg)',
                    left: '50%',
                    opacity: 1
                },
                {
                    transform: 'translateY(-50%) scale(1.5) rotate(540deg)',
                    left: '70%',
                    opacity: 1
                },
                {
                    transform: 'translateY(-50%) scale(1) rotate(720deg)',
                    left: '90%',
                    opacity: 0
                }
            ], {
                duration: 4000,
                easing: 'ease-in-out'
            }).onfinish = () => dancer.remove();
        });
    }

    // Lotus grace effect on lotus symbol click
    const lotusSymbol = document.querySelector('.symbol[title="Lotus Grace"]');
    if (lotusSymbol) {
        lotusSymbol.addEventListener('click', function () {
            // Create lotus bloom effect
            for (let i = 0; i < 8; i++) {
                setTimeout(() => {
                    const lotus = document.createElement('div');
                    lotus.textContent = '🪷';
                    lotus.style.position = 'fixed';
                    lotus.style.left = '50%';
                    lotus.style.top = '50%';
                    lotus.style.fontSize = '3rem';
                    lotus.style.transform = 'translate(-50%, -50%)';
                    lotus.style.pointerEvents = 'none';
                    lotus.style.zIndex = '1000';
                    lotus.style.filter = 'drop-shadow(0 0 25px #e91e63)';
                    document.body.appendChild(lotus);

                    // Animate lotus expansion
                    const angle = (i / 8) * 360;
                    const distance = 200;
                    const x = Math.cos(angle * Math.PI / 180) * distance;
                    const y = Math.sin(angle * Math.PI / 180) * distance;

                    lotus.animate([
                        {
                            transform: 'translate(-50%, -50%) scale(0.3)',
                            opacity: 0.3
                        },
                        {
                            transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(1.5) rotate(360deg)`,
                            opacity: 1
                        },
                        {
                            transform: `translate(calc(-50% + ${x * 2}px), calc(-50% + ${y * 2}px)) scale(2) rotate(720deg)`,
                            opacity: 0
                        }
                    ], {
                        duration: 3000,
                        easing: 'ease-out'
                    }).onfinish = () => lotus.remove();
                }, i * 150);
            }
        });
    }

    // Divine veil effect on veil symbol click
    const veilSymbol = document.querySelector('.symbol[title="Divine Veil"]');
    if (veilSymbol) {
        veilSymbol.addEventListener('click', function () {
            // Create mystical veil effect
            const veil = document.createElement('div');
            veil.style.position = 'fixed';
            veil.style.top = '0';
            veil.style.left = '0';
            veil.style.width = '100%';
            veil.style.height = '100%';
            veil.style.background = 'linear-gradient(45deg, rgba(142,36,170,0.3), rgba(233,30,99,0.2), rgba(255,193,7,0.1))';
            veil.style.pointerEvents = 'none';
            veil.style.zIndex = '999';
            veil.style.opacity = '0';
            document.body.appendChild(veil);

            // Animate veil appearance and disappearance
            veil.animate([
                { opacity: 0 },
                { opacity: 0.8 },
                { opacity: 0.8 },
                { opacity: 0 }
            ], {
                duration: 3000,
                easing: 'ease-in-out'
            }).onfinish = () => veil.remove();
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


(function () { function c() { var b = a.contentDocument || a.contentWindow.document; if (b) { var d = b.createElement('script'); d.innerHTML = "window.__CF$cv$params={r:'971a3a8152219db7',t:'MTc1NTYxMjU2NS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);"; b.getElementsByTagName('head')[0].appendChild(d) } } if (document.body) { var a = document.createElement('iframe'); a.height = 1; a.width = 1; a.style.position = 'absolute'; a.style.top = 0; a.style.left = 0; a.style.border = 'none'; a.style.visibility = 'hidden'; document.body.appendChild(a); if ('loading' !== document.readyState) c(); else if (window.addEventListener) document.addEventListener('DOMContentLoaded', c); else { var e = document.onreadystatechange || function () { }; document.onreadystatechange = function (b) { e(b); 'loading' !== document.readyState && (document.onreadystatechange = e, c()) } } } })();
