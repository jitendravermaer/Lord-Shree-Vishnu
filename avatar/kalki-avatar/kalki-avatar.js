
// Enhanced cosmic background creation
function createCosmicAura() {
    const cosmicAura = document.querySelector('.cosmic-aura');

    // Create lightning bolts
    for (let i = 0; i < 6; i++) {
        const bolt = document.createElement('div');
        bolt.className = 'lightning-bolt';
        bolt.style.left = Math.random() * 100 + '%';
        bolt.style.top = Math.random() * 100 + '%';
        bolt.style.animationDelay = Math.random() * 12 + 's';
        bolt.style.animationDuration = (Math.random() * 2 + 10) + 's';
        cosmicAura.appendChild(bolt);
    }

    // Create divine swords
    for (let i = 0; i < 5; i++) {
        const sword = document.createElement('div');
        sword.className = 'divine-sword';
        sword.style.left = Math.random() * 100 + '%';
        sword.style.animationDelay = Math.random() * 18 + 's';
        sword.style.animationDuration = (Math.random() * 2 + 16) + 's';
        cosmicAura.appendChild(sword);
    }

    // Create prophecy stars
    for (let i = 0; i < 8; i++) {
        const star = document.createElement('div');
        star.className = 'prophecy-star';
        star.style.left = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 10 + 's';
        star.style.animationDuration = (Math.random() * 2 + 8) + 's';
        cosmicAura.appendChild(star);
    }

    // Create dharma flames
    for (let i = 0; i < 10; i++) {
        const flame = document.createElement('div');
        flame.className = 'dharma-flame';
        flame.style.left = Math.random() * 100 + '%';
        flame.style.animationDelay = Math.random() * 15 + 's';
        flame.style.animationDuration = (Math.random() * 2 + 13) + 's';
        cosmicAura.appendChild(flame);
    }
}

// Enhanced interactions
document.addEventListener('DOMContentLoaded', function () {
    createCosmicAura();

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

    // Prophecy verse interactions
    const verses = document.querySelectorAll('.prophecy-verse');
    verses.forEach(verse => {
        verse.addEventListener('mouseenter', function () {
            const icon = verse.querySelector('.verse-icon');
            icon.style.transform = 'scale(1.3) rotate(360deg)';
            icon.style.transition = 'all 0.8s ease';
        });

        verse.addEventListener('mouseleave', function () {
            const icon = verse.querySelector('.verse-icon');
            icon.style.transform = '';
        });
    });

    // Kali Yuga card interactions
    const kaliyugaCards = document.querySelectorAll('.kaliyuga-card');
    kaliyugaCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            const visual = card.querySelector('.kaliyuga-visual');
            visual.style.animation = 'kaliyugaGlow 3s ease-in-out infinite';
        });

        card.addEventListener('mouseleave', function () {
            const visual = card.querySelector('.kaliyuga-visual');
            visual.style.animation = 'kaliyugaGlow 6s ease-in-out infinite';
        });
    });

    // Arrival card interactions
    const arrivalCards = document.querySelectorAll('.arrival-card');
    arrivalCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            const icon = card.querySelector('.arrival-icon');
            icon.style.transform = 'scale(1.4) rotateY(360deg)';
            icon.style.transition = 'all 0.6s ease';
        });

        card.addEventListener('mouseleave', function () {
            const icon = card.querySelector('.arrival-icon');
            icon.style.transform = '';
        });
    });

    // Mission card interactions
    const missionCards = document.querySelectorAll('.mission-card');
    missionCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            const icon = card.querySelector('.mission-icon');
            icon.style.transform = 'scale(1.4) rotateY(360deg)';
            icon.style.transition = 'all 0.6s ease';
        });

        card.addEventListener('mouseleave', function () {
            const icon = card.querySelector('.mission-icon');
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
    document.querySelectorAll('.prophecy-verse, .kaliyuga-card, .arrival-card, .mission-card').forEach(el => {
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

    // Special cosmic effect on title click
    const title = document.querySelector('.divine-header h1');
    title.addEventListener('click', function () {
        // Create cosmic burst effect
        this.style.textShadow = '0 0 100px rgba(13,71,161,1), 0 0 150px rgba(255,255,255,0.8)';
        this.style.transform = 'scale(1.15)';

        setTimeout(() => {
            this.style.textShadow = '';
            this.style.transform = '';
        }, 1000);
    });

    // Divine sword effect on sword symbol click
    const swordSymbol = document.querySelector('.symbol[title="Divine Sword"]');
    if (swordSymbol) {
        swordSymbol.addEventListener('click', function () {
            // Create sword strike effect
            const sword = document.createElement('div');
            sword.textContent = '⚔️';
            sword.style.position = 'fixed';
            sword.style.left = '10%';
            sword.style.top = '50%';
            sword.style.fontSize = '6rem';
            sword.style.transform = 'translateY(-50%) rotate(-45deg)';
            sword.style.pointerEvents = 'none';
            sword.style.zIndex = '1000';
            sword.style.filter = 'drop-shadow(0 0 30px #0d47a1)';
            document.body.appendChild(sword);

            // Animate sword strike
            sword.animate([
                {
                    transform: 'translateY(-50%) rotate(-45deg) translateX(0px)',
                    opacity: 1,
                    filter: 'drop-shadow(0 0 30px #0d47a1)'
                },
                {
                    transform: 'translateY(-50%) rotate(-45deg) translateX(80vw)',
                    opacity: 0,
                    filter: 'drop-shadow(0 0 80px #ffffff)'
                }
            ], {
                duration: 1500,
                easing: 'ease-out'
            }).onfinish = () => sword.remove();
        });
    }

    // Divine horse gallop effect on horse symbol click
    const horseSymbol = document.querySelector('.symbol[title="White Horse Devadatta"]');
    if (horseSymbol) {
        horseSymbol.addEventListener('click', function () {
            // Create horse gallop effect
            const horse = document.createElement('div');
            horse.textContent = '🐎';
            horse.style.position = 'fixed';
            horse.style.left = '-100px';
            horse.style.bottom = '20%';
            horse.style.fontSize = '5rem';
            horse.style.pointerEvents = 'none';
            horse.style.zIndex = '1000';
            horse.style.filter = 'drop-shadow(0 0 25px #ffffff)';
            document.body.appendChild(horse);

            // Animate horse gallop
            horse.animate([
                {
                    transform: 'translateX(0px) scale(1)',
                    opacity: 0.5,
                    filter: 'drop-shadow(0 0 25px #ffffff)'
                },
                {
                    transform: 'translateX(50vw) scale(1.5)',
                    opacity: 1,
                    filter: 'drop-shadow(0 0 50px #ffc107)'
                },
                {
                    transform: 'translateX(calc(100vw + 100px)) scale(2)',
                    opacity: 0,
                    filter: 'drop-shadow(0 0 80px #0d47a1)'
                }
            ], {
                duration: 3000,
                easing: 'ease-in-out'
            }).onfinish = () => horse.remove();
        });
    }

    // Lightning storm effect on lightning symbol click
    const lightningSymbol = document.querySelector('.symbol[title="Lightning Power"]');
    if (lightningSymbol) {
        lightningSymbol.addEventListener('click', function () {
            // Create lightning storm effect
            for (let i = 0; i < 8; i++) {
                setTimeout(() => {
                    const lightning = document.createElement('div');
                    lightning.textContent = '⚡';
                    lightning.style.position = 'fixed';
                    lightning.style.left = Math.random() * 100 + '%';
                    lightning.style.top = '-50px';
                    lightning.style.fontSize = '3rem';
                    lightning.style.pointerEvents = 'none';
                    lightning.style.zIndex = '1000';
                    lightning.style.filter = 'drop-shadow(0 0 20px #ffc107)';
                    document.body.appendChild(lightning);

                    // Animate lightning strike
                    lightning.animate([
                        {
                            transform: 'translateY(0px) rotate(0deg) scale(0.5)',
                            opacity: 1
                        },
                        {
                            transform: `translateY(${window.innerHeight + 100}px) rotate(${Math.random() * 360}deg) scale(2)`,
                            opacity: 0
                        }
                    ], {
                        duration: 800 + Math.random() * 400,
                        easing: 'ease-in'
                    }).onfinish = () => lightning.remove();
                }, i * 100);
            }
        });
    }

    // Shield protection effect on shield symbol click
    const shieldSymbol = document.querySelector('.symbol[title="Cosmic Warrior"]');
    if (shieldSymbol) {
        shieldSymbol.addEventListener('click', function () {
            // Create shield protection effect
            for (let i = 0; i < 6; i++) {
                setTimeout(() => {
                    const shield = document.createElement('div');
                    shield.style.position = 'fixed';
                    shield.style.left = '50%';
                    shield.style.top = '50%';
                    shield.style.width = '80px';
                    shield.style.height = '80px';
                    shield.style.border = '4px solid rgba(13,71,161,0.8)';
                    shield.style.borderRadius = '50%';
                    shield.style.transform = 'translate(-50%, -50%)';
                    shield.style.pointerEvents = 'none';
                    shield.style.zIndex = '1000';
                    document.body.appendChild(shield);

                    // Animate shield expansion
                    shield.animate([
                        {
                            transform: 'translate(-50%, -50%) scale(0.5)',
                            opacity: 0.9,
                            borderColor: 'rgba(13,71,161,0.8)'
                        },
                        {
                            transform: 'translate(-50%, -50%) scale(5)',
                            opacity: 0,
                            borderColor: 'rgba(255,255,255,0)'
                        }
                    ], {
                        duration: 2500,
                        easing: 'ease-out'
                    }).onfinish = () => shield.remove();
                }, i * 300);
            }
        });
    }

    // Dawn sunrise effect on dawn symbol click
    const dawnSymbol = document.querySelector('.symbol[title="New Dawn"]');
    if (dawnSymbol) {
        dawnSymbol.addEventListener('click', function () {
            // Create sunrise effect
            const sun = document.createElement('div');
            sun.textContent = '🌅';
            sun.style.position = 'fixed';
            sun.style.left = '50%';
            sun.style.bottom = '-100px';
            sun.style.fontSize = '8rem';
            sun.style.transform = 'translateX(-50%)';
            sun.style.pointerEvents = 'none';
            sun.style.zIndex = '1000';
            sun.style.filter = 'drop-shadow(0 0 40px #ffc107)';
            document.body.appendChild(sun);

            // Animate sunrise
            sun.animate([
                {
                    transform: 'translateX(-50%) scale(0.3)',
                    opacity: 0.3,
                    filter: 'drop-shadow(0 0 40px #ffc107)'
                },
                {
                    transform: 'translateX(-50%) scale(1.5)',
                    opacity: 1,
                    filter: 'drop-shadow(0 0 100px #ffc107)'
                },
                {
                    transform: 'translateX(-50%) scale(2)',
                    opacity: 0,
                    filter: 'drop-shadow(0 0 150px #ffffff)'
                }
            ], {
                duration: 4000,
                easing: 'ease-out'
            }).onfinish = () => sun.remove();
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


(function () { function c() { var b = a.contentDocument || a.contentWindow.document; if (b) { var d = b.createElement('script'); d.innerHTML = "window.__CF$cv$params={r:'971a2fba15dfa7da',t:'MTc1NTYxMjEyMy4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);"; b.getElementsByTagName('head')[0].appendChild(d) } } if (document.body) { var a = document.createElement('iframe'); a.height = 1; a.width = 1; a.style.position = 'absolute'; a.style.top = 0; a.style.left = 0; a.style.border = 'none'; a.style.visibility = 'hidden'; document.body.appendChild(a); if ('loading' !== document.readyState) c(); else if (window.addEventListener) document.addEventListener('DOMContentLoaded', c); else { var e = document.onreadystatechange || function () { }; document.onreadystatechange = function (b) { e(b); 'loading' !== document.readyState && (document.onreadystatechange = e, c()) } } } })();