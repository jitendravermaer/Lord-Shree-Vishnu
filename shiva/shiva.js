
// Modal functions
function showModal(title, description, tags) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalTags = document.getElementById('modalTags');

    modalTitle.textContent = title;
    modalDescription.textContent = description;

    // Update tags
    modalTags.innerHTML = '';
    tags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.className = 'showcase-tag';
        tagElement.textContent = tag;
        modalTags.appendChild(tagElement);
    });

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Enhanced cosmic background creation
function createCosmicElements() {
    const cosmicBg = document.querySelector('.cosmic-bg');

    // Create trishul particles
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'trishul-particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 10 + 's';
        particle.style.animationDuration = (Math.random() * 6 + 8) + 's';
        cosmicBg.appendChild(particle);
    }

    // Create sacred ash particles
    for (let i = 0; i < 25; i++) {
        const ash = document.createElement('div');
        ash.className = 'sacred-ash';
        ash.style.left = Math.random() * 100 + '%';
        ash.style.animationDelay = Math.random() * 12 + 's';
        ash.style.animationDuration = (Math.random() * 8 + 10) + 's';
        cosmicBg.appendChild(ash);
    }

    // Create cosmic serpents
    for (let i = 0; i < 3; i++) {
        const serpent = document.createElement('div');
        serpent.className = 'cosmic-serpent';
        serpent.style.top = (Math.random() * 80 + 10) + '%';
        serpent.style.animationDelay = Math.random() * 20 + 's';
        cosmicBg.appendChild(serpent);
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
                symbol.style.animation = 'symbolPulse 4s ease-in-out infinite';
            }, 100);
        });
    });

    // Form card interactions
    const formCards = document.querySelectorAll('.form-card');
    formCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            const icon = card.querySelector('.form-icon');
            icon.style.transform = 'scale(1.3) rotate(360deg)';
            icon.style.transition = 'all 0.8s ease';
        });

        card.addEventListener('mouseleave', function () {
            const icon = card.querySelector('.form-icon');
            icon.style.transform = '';
        });
    });

    // Weapon card interactions
    const weaponCards = document.querySelectorAll('.weapon-card');
    weaponCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            const icon = card.querySelector('.weapon-icon');
            icon.style.transform = 'scale(1.2) rotateY(360deg)';
            icon.style.transition = 'all 0.6s ease';
        });

        card.addEventListener('mouseleave', function () {
            const icon = card.querySelector('.weapon-icon');
            icon.style.transform = '';
        });
    });

    // Dance element interactions
    const danceElements = document.querySelectorAll('.dance-element');
    danceElements.forEach(element => {
        element.addEventListener('mouseenter', function () {
            const icon = element.querySelector('.dance-element-icon');
            icon.style.animation = 'symbolPulse 1s ease-in-out infinite';
        });

        element.addEventListener('mouseleave', function () {
            const icon = element.querySelector('.dance-element-icon');
            icon.style.animation = '';
        });
    });

    // Gallery item interactions
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            const icon = item.querySelector('.gallery-icon');
            icon.style.transform = 'scale(1.3) rotate(15deg)';
            icon.style.transition = 'all 0.4s ease';
        });

        item.addEventListener('mouseleave', function () {
            const icon = item.querySelector('.gallery-icon');
            icon.style.transform = '';
        });
    });

    // Close modal when clicking outside
    document.getElementById('modal').addEventListener('click', function (e) {
        if (e.target === this) {
            closeModal();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });

    // Avatar card hover effects
    const avatarCards = document.querySelectorAll('.avatar-card');
    avatarCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            const visual = card.querySelector('.avatar-visual');
            visual.style.transform = 'scale(1.1) rotateY(10deg)';
        });

        card.addEventListener('mouseleave', function () {
            const visual = card.querySelector('.avatar-visual');
            visual.style.transform = '';
        });
    });

    // Place card interactions
    const placeCards = document.querySelectorAll('.place-card');
    placeCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            const icon = card.querySelector('.place-icon');
            icon.style.transform = 'scale(1.2) rotate(360deg)';
            icon.style.transition = 'all 0.6s ease';
        });

        card.addEventListener('mouseleave', function () {
            const icon = card.querySelector('.place-icon');
            icon.style.transform = '';
        });
    });
});

(function () { function c() { var b = a.contentDocument || a.contentWindow.document; if (b) { var d = b.createElement('script'); d.innerHTML = "window.__CF$cv$params={r:'970b2adf85a6a7c7',t:'MTc1NTQ1NDYzOS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);"; b.getElementsByTagName('head')[0].appendChild(d) } } if (document.body) { var a = document.createElement('iframe'); a.height = 1; a.width = 1; a.style.position = 'absolute'; a.style.top = 0; a.style.left = 0; a.style.border = 'none'; a.style.visibility = 'hidden'; document.body.appendChild(a); if ('loading' !== document.readyState) c(); else if (window.addEventListener) document.addEventListener('DOMContentLoaded', c); else { var e = document.onreadystatechange || function () { }; document.onreadystatechange = function (b) { e(b); 'loading' !== document.readyState && (document.onreadystatechange = e, c()) } } } })();
