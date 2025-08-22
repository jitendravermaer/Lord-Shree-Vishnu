
// Modal functions
window.showImageModal = function (title, description, tags, imageSrc = null) {
    const modal = document.getElementById('imageModal');
    const showcaseTitle = document.getElementById('showcaseTitle');
    const showcaseDescription = document.getElementById('showcaseDescription');
    const showcaseTags = document.getElementById('showcaseTags');
    const showcaseImage = modal.querySelector('.showcase-image');

    showcaseTitle.textContent = title;
    showcaseDescription.textContent = description;

    // Update image
    if (imageSrc) {
        showcaseImage.innerHTML = `<img src="${imageSrc}" alt="${title}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 20px;">`;
    } else {
        showcaseImage.innerHTML = '🖼️';
    }

    // Update tags
    showcaseTags.innerHTML = '';
    tags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.className = 'showcase-tag';
        tagElement.textContent = tag;
        showcaseTags.appendChild(tagElement);
    });

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
};

window.closeImageModal = function () {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
};

window.showVideoModal = function (title, description, videoSrc) {
    const modal = document.getElementById('videoModal');
    const videoTitle = document.getElementById('videoTitle');
    const videoDescription = document.getElementById('videoDescription');
    const showcaseImage = modal.querySelector('.showcase-image');

    videoTitle.textContent = title;
    videoDescription.textContent = description;

    // Update video/thumbnail
    if (videoSrc) {
        showcaseImage.innerHTML = `<video controls style="width: 100%; height: 100%; object-fit: cover; border-radius: 20px;"
                    src="${videoSrc}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>`;
    } else {
        showcaseImage.innerHTML = '🎬';
    }

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
};

window.closeVideoModal = function () {
    const modal = document.getElementById('videoModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
};

// Enhanced cosmic background creation
function createCosmicElements() {
    const cosmicBg = document.querySelector('.cosmic-bg');

    // Create stars
    for (let i = 0; i < 150; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.width = Math.random() * 4 + 1 + 'px';
        star.style.height = star.style.width;
        star.style.animationDelay = Math.random() * 3 + 's';
        cosmicBg.appendChild(star);
    }

    // Create shooting stars
    for (let i = 0; i < 5; i++) {
        const shootingStar = document.createElement('div');
        shootingStar.className = 'shooting-star';
        shootingStar.style.top = Math.random() * 50 + '%';
        shootingStar.style.animationDelay = Math.random() * 4 + 's';
        shootingStar.style.animationDuration = (Math.random() * 3 + 2) + 's';
        cosmicBg.appendChild(shootingStar);
    }
}

// Enhanced avatar timeline interactions
document.addEventListener('DOMContentLoaded', function () {
    createCosmicElements();

    const avatarEvents = document.querySelectorAll('.avatar-event');

    avatarEvents.forEach(event => {
        const expandBtn = event.querySelector('.expand-btn');

        expandBtn.addEventListener('click', function () {
            const isExpanded = event.classList.contains('expanded');

            // Close all other expanded events
            avatarEvents.forEach(otherEvent => {
                if (otherEvent !== event) {
                    otherEvent.classList.remove('expanded');
                    const otherBtn = otherEvent.querySelector('.expand-btn');
                    otherBtn.textContent = 'Discover Divine Story ▼';
                }
            });

            // Toggle current event
            if (isExpanded) {
                event.classList.remove('expanded');
                expandBtn.textContent = 'Discover Divine Story ▼';
            } else {
                event.classList.add('expanded');
                expandBtn.textContent = 'Hide Divine Story ▲';

                // Smooth scroll to the event
                event.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            }
        });
    });

    // Enhanced deity card interactions
    const deityCards = document.querySelectorAll('.deity-card');
    deityCards.forEach(card => {
        card.addEventListener('click', function () {
            card.style.transform = 'scale(1.15) rotateY(15deg)';
            setTimeout(() => {
                card.style.transform = '';
            }, 400);
        });
    });

    // Sacred symbols interactions
    const symbols = document.querySelectorAll('.symbol');
    symbols.forEach(symbol => {
        symbol.addEventListener('click', function () {
            symbol.style.animation = 'none';
            setTimeout(() => {
                symbol.style.animation = 'pulse 2s ease-in-out infinite';
            }, 100);
        });
    });

    // Enhanced image placeholder interactions
    const imagePlaceholders = document.querySelectorAll('.image-placeholder');
    imagePlaceholders.forEach(placeholder => {
        placeholder.addEventListener('mouseenter', function () {
            placeholder.style.background = 'linear-gradient(135deg, #ff6b35, #ffd700, #8a2be2, #ff1493)';
            placeholder.style.transform = 'scale(1.1) rotateY(10deg)';
        });

        placeholder.addEventListener('mouseleave', function () {
            placeholder.style.background = 'linear-gradient(135deg, #ffd700, #ff6b35, #8a2be2, #ff1493)';
            placeholder.style.transform = '';
        });
    });

    // Weapon card interactions
    const weaponCards = document.querySelectorAll('.weapon-card');
    weaponCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            const icon = card.querySelector('.weapon-icon');
            icon.style.transform = 'scale(1.3) rotate(360deg)';
            icon.style.textShadow = '0 0 20px currentColor';
        });

        card.addEventListener('mouseleave', function () {
            const icon = card.querySelector('.weapon-icon');
            icon.style.transform = '';
            icon.style.textShadow = '';
        });
    });

    // Video card interactions
    const videoCards = document.querySelectorAll('.video-card');
    videoCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            const playButton = card.querySelector('.play-button');
            playButton.style.animation = 'pulse 1s ease-in-out infinite';
        });

        card.addEventListener('mouseleave', function () {
            const playButton = card.querySelector('.play-button');
            playButton.style.animation = '';
        });
    });

    // Close modals when clicking outside
    document.getElementById('imageModal').addEventListener('click', function (e) {
        if (e.target === this) {
            closeImageModal();
        }
    });



    // Keyboard navigation
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeImageModal();
        }
    });
});

showDevlok = () => {
    window.location.href = "devlok/devlok.html";
};
