// Navbar scroll effect
const navbar = document.getElementById('navbar');
const mobileMenu = document.getElementById('mobile-menu');
const menuToggle = document.getElementById('menu-toggle');
const closeMenuBtn = document.getElementById('close-menu');
const bar1 = document.getElementById('bar1');
const bar2 = document.getElementById('bar2');
const bar3 = document.getElementById('bar3');
let isMenuOpen = false;

// Mobile menu toggle
menuToggle.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
        mobileMenu.classList.add('open');
        bar1.classList.add('rotate-45', 'translate-y-2');
        bar2.classList.add('opacity-0');
        bar3.classList.add('-rotate-45', '-translate-y-2');
        document.body.style.overflow = 'hidden';
    } else {
        mobileMenu.classList.remove('open');
        bar1.classList.remove('rotate-45', 'translate-y-2');
        bar2.classList.remove('opacity-0');
        bar3.classList.remove('-rotate-45', '-translate-y-2');
        document.body.style.overflow = 'auto';
    }
});

// Close menu button functionality
closeMenuBtn.addEventListener('click', () => {
    isMenuOpen = false;
    mobileMenu.classList.remove('open');
    bar1.classList.remove('rotate-45', 'translate-y-2');
    bar2.classList.remove('opacity-0');
    bar3.classList.remove('-rotate-45', '-translate-y-2');
    document.body.style.overflow = 'auto';
});

// Smooth scroll for links
document.querySelectorAll('.smooth-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
        // Close mobile menu if open
        if (isMenuOpen) {
            isMenuOpen = false;
            mobileMenu.classList.remove('open');
            bar1.classList.remove('rotate-45', 'translate-y-2');
            bar2.classList.remove('opacity-0');
            bar3.classList.remove('-rotate-45', '-translate-y-2');
            document.body.style.overflow = 'auto';
        }
    });
});

// Set current year
document.getElementById('year').textContent = new Date().getFullYear();

// Scroll-triggered animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe all elements with animation classes
document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in, .progress-bar').forEach(el => {
    observer.observe(el);
});

// Experience counters animation
const counters = document.querySelectorAll('.counter');

const animateCounter = (counter) => {
    const target = Number(counter.dataset.target || 0);
    const suffix = counter.dataset.suffix || '';
    const duration = 1400;
    const startTime = performance.now();

    const updateValue = (timestamp) => {
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const currentValue = Math.floor(progress * target);
        counter.textContent = `${currentValue}${suffix}`;

        if (progress < 1) {
            requestAnimationFrame(updateValue);
        } else {
            counter.textContent = `${target}${suffix}`;
        }
    };

    requestAnimationFrame(updateValue);
};

const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.6
});

counters.forEach(counter => counterObserver.observe(counter));

// Design Carousel Scroll Animation
const designCarousel = document.getElementById('design-carousel');
const carouselContainer = document.getElementById('carousel-container');

if (designCarousel && carouselContainer) {
    let isCarouselActive = false;
    let carouselStart = 0;
    let carouselEnd = 0;

    const updateCarouselPosition = () => {
        if (!isCarouselActive) return;

        const scrollY = window.scrollY;
        const progress = Math.max(0, Math.min(1, (scrollY - carouselStart) / (carouselEnd - carouselStart)));
        
        // Transform progress to horizontal movement (from 0% to -95%)
        const translateX = progress * -95;
        carouselContainer.style.transform = `translateX(${translateX}%)`;
    };

    let ticking = false;
    const handleScroll = () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                updateCarouselPosition();
                ticking = false;
            });
            ticking = true;
        }
    };

    const carouselObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                isCarouselActive = true;
                const rect = designCarousel.getBoundingClientRect();
                carouselStart = window.scrollY + rect.top - window.innerHeight * 0.25;
                carouselEnd = window.scrollY + rect.bottom - window.innerHeight * 0.2;
            } else {
                isCarouselActive = false;
            }
        });
    }, {
        threshold: 0,
        rootMargin: '-50% 0px -50% 0px'
    });

    carouselObserver.observe(designCarousel);
    window.addEventListener('scroll', handleScroll);
}
