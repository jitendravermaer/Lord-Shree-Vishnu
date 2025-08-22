
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

    // Create lotus particles
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'lotus-particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = (Math.random() * 4 + 6) + 's';
        cosmicBg.appendChild(particle);
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
                symbol.style.animation = 'symbolPulse 3s ease-in-out infinite';
            }, 100);
        });
    });

    // Face card interactions
    const faceCards = document.querySelectorAll('.face-card');
    faceCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            const icon = card.querySelector('.face-icon');
            icon.style.transform = 'scale(1.3) rotate(360deg)';
            icon.style.transition = 'all 0.6s ease';
        });

        card.addEventListener('mouseleave', function () {
            const icon = card.querySelector('.face-icon');
            icon.style.transform = '';
        });
    });

    // Text card interactions
    const textCards = document.querySelectorAll('.text-card');
    textCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            const icon = card.querySelector('.text-icon');
            icon.style.transform = 'scale(1.2) rotateY(360deg)';
            icon.style.transition = 'all 0.8s ease';
        });

        card.addEventListener('mouseleave', function () {
            const icon = card.querySelector('.text-icon');
            icon.style.transform = '';
        });
    });

    // Role item interactions
    const roleItems = document.querySelectorAll('.role-item');
    roleItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            const icon = item.querySelector('.role-icon');
            icon.style.animation = 'symbolPulse 1s ease-in-out infinite';
        });

        item.addEventListener('mouseleave', function () {
            const icon = item.querySelector('.role-icon');
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

    // Creation phase hover effects
    const creationPhases = document.querySelectorAll('.creation-phase');
    creationPhases.forEach(phase => {
        phase.addEventListener('mouseenter', function () {
            const visual = phase.querySelector('.phase-visual');
            visual.style.transform = 'scale(1.05) rotateY(5deg)';
        });

        phase.addEventListener('mouseleave', function () {
            const visual = phase.querySelector('.phase-visual');
            visual.style.transform = '';
        });
    });
});


(function () { function c() { var b = a.contentDocument || a.contentWindow.document; if (b) { var d = b.createElement('script'); d.innerHTML = "window.__CF$cv$params={r:'970b1891125da757',t:'MTc1NTQ1Mzg4OS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);"; b.getElementsByTagName('head')[0].appendChild(d) } } if (document.body) { var a = document.createElement('iframe'); a.height = 1; a.width = 1; a.style.position = 'absolute'; a.style.top = 0; a.style.left = 0; a.style.border = 'none'; a.style.visibility = 'hidden'; document.body.appendChild(a); if ('loading' !== document.readyState) c(); else if (window.addEventListener) document.addEventListener('DOMContentLoaded', c); else { var e = document.onreadystatechange || function () { }; document.onreadystatechange = function (b) { e(b); 'loading' !== document.readyState && (document.onreadystatechange = e, c()) } } } })();
