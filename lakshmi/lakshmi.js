
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

// Enhanced prosperity background creation
function createProsperityElements() {
    const prosperityBg = document.querySelector('.prosperity-bg');

    // Create lotus particles
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'lotus-particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 12 + 's';
        particle.style.animationDuration = (Math.random() * 6 + 10) + 's';
        prosperityBg.appendChild(particle);
    }

    // Create coin particles
    for (let i = 0; i < 30; i++) {
        const coin = document.createElement('div');
        coin.className = 'coin-particle';
        coin.style.left = Math.random() * 100 + '%';
        coin.style.animationDelay = Math.random() * 8 + 's';
        coin.style.animationDuration = (Math.random() * 4 + 6) + 's';
        prosperityBg.appendChild(coin);
    }

    // Create prosperity lights
    for (let i = 0; i < 5; i++) {
        const light = document.createElement('div');
        light.className = 'prosperity-light';
        light.style.top = (Math.random() * 80 + 10) + '%';
        light.style.animationDelay = Math.random() * 15 + 's';
        prosperityBg.appendChild(light);
    }
}

// Enhanced interactions
document.addEventListener('DOMContentLoaded', function () {
    createProsperityElements();

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
            const visual = card.querySelector('.form-visual');
            visual.style.transform = 'scale(1.2) rotate(360deg)';
            visual.style.transition = 'all 0.8s ease';
        });

        card.addEventListener('mouseleave', function () {
            const visual = card.querySelector('.form-visual');
            visual.style.transform = '';
        });
    });

    // Attribute card interactions
    const attributeCards = document.querySelectorAll('.attribute-card');
    attributeCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            const icon = card.querySelector('.attribute-icon');
            icon.style.transform = 'scale(1.3) rotateY(360deg)';
            icon.style.transition = 'all 0.6s ease';
        });

        card.addEventListener('mouseleave', function () {
            const icon = card.querySelector('.attribute-icon');
            icon.style.transform = '';
        });
    });

    // Mantra card interactions
    const mantraCards = document.querySelectorAll('.mantra-card');
    mantraCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            const visual = card.querySelector('.mantra-visual');
            visual.style.animation = 'mantraGlow 1s ease-in-out infinite';
        });

        card.addEventListener('mouseleave', function () {
            const visual = card.querySelector('.mantra-visual');
            visual.style.animation = 'mantraGlow 3s ease-in-out infinite';
        });
    });

    // Festival card interactions
    const festivalCards = document.querySelectorAll('.festival-card');
    festivalCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            const visual = card.querySelector('.festival-visual');
            visual.style.transform = 'scale(1.1) rotate(15deg)';
            visual.style.transition = 'all 0.4s ease';
        });

        card.addEventListener('mouseleave', function () {
            const visual = card.querySelector('.festival-visual');
            visual.style.transform = '';
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
});




(function () { function c() { var b = a.contentDocument || a.contentWindow.document; if (b) { var d = b.createElement('script'); d.innerHTML = "window.__CF$cv$params={r:'97104f84832ba725',t:'MTc1NTUwODU2OC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);"; b.getElementsByTagName('head')[0].appendChild(d) } } if (document.body) { var a = document.createElement('iframe'); a.height = 1; a.width = 1; a.style.position = 'absolute'; a.style.top = 0; a.style.left = 0; a.style.border = 'none'; a.style.visibility = 'hidden'; document.body.appendChild(a); if ('loading' !== document.readyState) c(); else if (window.addEventListener) document.addEventListener('DOMContentLoaded', c); else { var e = document.onreadystatechange || function () { }; document.onreadystatechange = function (b) { e(b); 'loading' !== document.readyState && (document.onreadystatechange = e, c()) } } } })();
