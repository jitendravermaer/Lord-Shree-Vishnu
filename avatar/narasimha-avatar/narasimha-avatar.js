
// Enhanced divine fury background creation
function createDivineFury() {
    const divineFury = document.querySelector('.divine-fury');

    // Create lion mane particles
    for (let i = 0; i < 15; i++) {
        const mane = document.createElement('div');
        mane.className = 'lion-mane';
        mane.style.left = Math.random() * 100 + '%';
        mane.style.top = Math.random() * 100 + '%';
        mane.style.animationDelay = Math.random() * 12 + 's';
        mane.style.animationDuration = (Math.random() * 4 + 10) + 's';
        divineFury.appendChild(mane);
    }

    // Create divine claws
    for (let i = 0; i < 10; i++) {
        const claw = document.createElement('div');
        claw.className = 'divine-claw';
        claw.style.left = Math.random() * 100 + '%';
        claw.style.top = Math.random() * 100 + '%';
        claw.style.animationDelay = Math.random() * 10 + 's';
        divineFury.appendChild(claw);
    }

    // Create protection auras
    for (let i = 0; i < 20; i++) {
        const aura = document.createElement('div');
        aura.className = 'protection-aura';
        aura.style.left = Math.random() * 100 + '%';
        aura.style.animationDelay = Math.random() * 8 + 's';
        aura.style.animationDuration = (Math.random() * 3 + 6) + 's';
        divineFury.appendChild(aura);
    }

    // Create divine roar waves
    for (let i = 0; i < 5; i++) {
        const roar = document.createElement('div');
        roar.className = 'divine-roar';
        roar.style.animationDelay = Math.random() * 15 + 's';
        divineFury.appendChild(roar);
    }
}

// Enhanced interactions
document.addEventListener('DOMContentLoaded', function () {
    createDivineFury();

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
            visual.style.animation = 'verseGlow 1s ease-in-out infinite';
        });

        card.addEventListener('mouseleave', function () {
            const visual = card.querySelector('.verse-visual');
            visual.style.animation = 'verseGlow 4s ease-in-out infinite';
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

    // Special roar effect on title click
    const title = document.querySelector('.divine-header h1');
    title.addEventListener('click', function () {
        // Create roar effect
        this.style.textShadow = '0 0 100px rgba(255,69,0,1), 0 0 150px rgba(255,140,0,0.8)';
        this.style.transform = 'scale(1.1)';

        setTimeout(() => {
            this.style.textShadow = '';
            this.style.transform = '';
        }, 1000);
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


(function () { function c() { var b = a.contentDocument || a.contentWindow.document; if (b) { var d = b.createElement('script'); d.innerHTML = "window.__CF$cv$params={r:'9712f2fdc5c4a0b4',t:'MTc1NTUzNjIzNS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);"; b.getElementsByTagName('head')[0].appendChild(d) } } if (document.body) { var a = document.createElement('iframe'); a.height = 1; a.width = 1; a.style.position = 'absolute'; a.style.top = 0; a.style.left = 0; a.style.border = 'none'; a.style.visibility = 'hidden'; document.body.appendChild(a); if ('loading' !== document.readyState) c(); else if (window.addEventListener) document.addEventListener('DOMContentLoaded', c); else { var e = document.onreadystatechange || function () { }; document.onreadystatechange = function (b) { e(b); 'loading' !== document.readyState && (document.onreadystatechange = e, c()) } } } })();
