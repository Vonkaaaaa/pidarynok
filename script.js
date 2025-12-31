// Smooth scroll behavior for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    observer.observe(section);
});

// Image hover effect - handled by CSS

// Gallery item click animation
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
        this.style.animation = 'none';
        setTimeout(() => {
            this.style.animation = 'galleryPulse 0.6s ease-out';
        }, 10);
    });
});

// Add animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes galleryPulse {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.1);
        }
        100% {
            transform: scale(1);
        }
    }
    
    @keyframes float {
        0%, 100% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-10px);
        }
    }
    
    @keyframes glow {
        0%, 100% {
            box-shadow: 0 10px 30px rgba(99, 102, 241, 0.1);
        }
        50% {
            box-shadow: 0 10px 40px rgba(99, 102, 241, 0.3);
        }
    }
`;
document.head.appendChild(style);

// Character card animation on scroll
const characterCards = document.querySelectorAll('.character-card');
characterCards.forEach((card, index) => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = `slideInCharacter 0.6s ease-out ${index * 0.1}s forwards`;
            }
        });
    }, { threshold: 0.3 });
    
    observer.observe(card);
});

// Add character slide animation
const characterStyle = document.createElement('style');
characterStyle.textContent = `
    @keyframes slideInCharacter {
        from {
            opacity: 0;
            transform: translateX(-30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;
document.head.appendChild(characterStyle);

// Smooth image loading animation
window.addEventListener('load', () => {
    document.querySelectorAll('.photo').forEach(img => {
        img.style.opacity = '1';
    });
});

// Text animation on scroll
const textBlocks = document.querySelectorAll('.text-content');
textBlocks.forEach(block => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'textFadeIn 0.8s ease-out forwards';
            }
        });
    }, { threshold: 0.3 });
    
    observer.observe(block);
});

const textStyle = document.createElement('style');
textStyle.textContent = `
    @keyframes textFadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(textStyle);

// Gallery grid animation
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.animation = `galleryFadeIn 0.6s ease-out ${index * 0.1}s forwards`;
});

const galleryStyle = document.createElement('style');
galleryStyle.textContent = `
    @keyframes galleryFadeIn {
        from {
            opacity: 0;
            transform: scale(0.9);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
`;
document.head.appendChild(galleryStyle);

// Conclusion card animation
const conclusionCard = document.querySelector('.conclusion-card');
if (conclusionCard) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'conclusionSlideUp 0.8s ease-out forwards';
            }
        });
    }, { threshold: 0.3 });
    
    observer.observe(conclusionCard);
}

const conclusionStyle = document.createElement('style');
conclusionStyle.textContent = `
    @keyframes conclusionSlideUp {
        from {
            opacity: 0;
            transform: translateY(40px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(conclusionStyle);

// Add scroll progress indicator
const createScrollProgress = () => {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 4px;
        background: linear-gradient(90deg, #6366f1, #ec4899);
        z-index: 1000;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
};

createScrollProgress();

// Smooth page load animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Add hover effect to text blocks with enhanced animation
document.querySelectorAll('.text-block').forEach(block => {
    block.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.01)';
        this.style.boxShadow = '0 25px 60px rgba(99, 102, 241, 0.2)';
    });
    
    block.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
    });
});

// Add hover effect to character entries
document.querySelectorAll('.character-entry').forEach(entry => {
    entry.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(5px)';
    });
    
    entry.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
    });
});

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
        window.scrollBy({ top: 300, behavior: 'smooth' });
    } else if (e.key === 'ArrowUp') {
        window.scrollBy({ top: -300, behavior: 'smooth' });
    }
});

// Add touch support for mobile
let touchStartY = 0;
document.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
});

document.addEventListener('touchend', (e) => {
    const touchEndY = e.changedTouches[0].clientY;
    const diff = touchStartY - touchEndY;
    
    if (Math.abs(diff) > 50) {
        if (diff > 0) {
            window.scrollBy({ top: 300, behavior: 'smooth' });
        } else {
            window.scrollBy({ top: -300, behavior: 'smooth' });
        }
    }
});

// Create floating decorative elements - много декораций!
const createFloatingElements = () => {
    const container = document.body;
    const colors = ['#c41e3a', '#165b33', '#ffd700', '#818cf8', '#f472b6'];
    
    for (let i = 0; i < 20; i++) {
        const element = document.createElement('div');
        const size = Math.random() * 150 + 40;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const duration = Math.random() * 15 + 20;
        const delay = Math.random() * 5;
        
        element.style.cssText = `
            position: fixed;
            width: ${size}px;
            height: ${size}px;
            background: radial-gradient(circle, ${color}30 0%, ${color}10 50%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 0;
            animation: floatDecoration ${duration}s ease-in-out infinite;
            animation-delay: ${delay}s;
            top: ${Math.random() * 120 - 10}%;
            left: ${Math.random() * 120 - 10}%;
            border: 1px solid ${color}40;
        `;
        container.appendChild(element);
    }
};

// Create falling snowflakes
const createSnowflakes = () => {
    const container = document.body;
    const snowflakes = ['❄️', '❅', '❆', '✨', '🎄'];
    
    for (let i = 0; i < 30; i++) {
        const snowflake = document.createElement('div');
        const snowflakeEmoji = snowflakes[Math.floor(Math.random() * snowflakes.length)];
        const size = Math.random() * 20 + 10;
        const duration = Math.random() * 10 + 8;
        const delay = Math.random() * 5;
        const leftPos = Math.random() * 100;
        
        snowflake.style.cssText = `
            position: fixed;
            font-size: ${size}px;
            opacity: ${Math.random() * 0.6 + 0.4};
            pointer-events: none;
            z-index: 2;
            animation: snowfall ${duration}s linear infinite;
            animation-delay: ${delay}s;
            left: ${leftPos}%;
            top: -50px;
        `;
        snowflake.textContent = snowflakeEmoji;
        container.appendChild(snowflake);
    }
};

const decorationStyle = document.createElement('style');
decorationStyle.textContent = `
    @keyframes floatDecoration {
        0%, 100% {
            transform: translateY(0px) translateX(0px);
        }
        25% {
            transform: translateY(-30px) translateX(20px);
        }
        50% {
            transform: translateY(-60px) translateX(-20px);
        }
        75% {
            transform: translateY(-30px) translateX(20px);
        }
    }
`;
document.head.appendChild(decorationStyle);

// Initialize decorative elements
createFloatingElements();
createSnowflakes();

// Floating button click handler
const clickButton = document.getElementById('clickButton');
const messageBubble = document.querySelector('.message-bubble');
const modalOverlay = document.getElementById('modalOverlay');
const closeModal = document.getElementById('closeModal');

if (clickButton) {
    clickButton.addEventListener('click', function() {
        if (modalOverlay) {
            modalOverlay.classList.add('show');
        }
    });
    
    // Function to trigger shake and show message
    const triggerShakeAndMessage = () => {
        // Add shake animation
        clickButton.classList.remove('shake');
        void clickButton.offsetWidth; // Trigger reflow to restart animation
        clickButton.classList.add('shake');
        
        // Show message bubble
        if (messageBubble) {
            messageBubble.classList.add('show');
            
            // Hide message after 3 seconds
            setTimeout(() => {
                messageBubble.classList.remove('show');
            }, 3000);
        }
    };
    
    // Trigger shake and message every 4 seconds
    setInterval(triggerShakeAndMessage, 4000);
    
    // Trigger once on page load after a short delay
    setTimeout(triggerShakeAndMessage, 1000);
}

// Modal close handlers
if (closeModal) {
    closeModal.addEventListener('click', function() {
        if (modalOverlay) {
            modalOverlay.classList.remove('show');
        }
    });
}

if (modalOverlay) {
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            modalOverlay.classList.remove('show');
        }
    });
}

// Initialize
console.log('Website loaded successfully! 🎉');
