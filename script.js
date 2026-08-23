// Navbar scroll effect
const navbar = document.getElementById('navbar');
const mobileMenu = document.getElementById('mobile-menu');
const menuToggle = document.getElementById('menu-toggle');
const closeMenuBtn = document.getElementById('close-menu');
const bar1 = document.getElementById('bar1');
const bar2 = document.getElementById('bar2');
const bar3 = document.getElementById('bar3');
const contactWhatsappButton = document.getElementById('contact-whatsapp');
const whatsappUrl = 'https://wa.me/5582996975394?text=' + encodeURIComponent('Tenho interesse em criar um projeto');
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

// WhatsApp contact action
if (contactWhatsappButton) {
    contactWhatsappButton.addEventListener('click', () => {
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    });
}

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

// Design Carousel controls (arrows + indicators)
const designCarousel = document.getElementById('design-carousel');
if (designCarousel) {
    const viewport = designCarousel.querySelector('.carousel-viewport');
    const track = designCarousel.querySelector('.carousel-track');
    const slides = track ? Array.from(track.querySelectorAll('.carousel-slide')) : [];
    const prevBtn = designCarousel.querySelector('.carousel-prev');
    const nextBtn = designCarousel.querySelector('.carousel-next');
    const indicatorsContainer = designCarousel.querySelector('.carousel-indicators');

    if (viewport && slides.length) {
        // build indicators
        const centerSlide = (index, behavior = 'smooth') => {
            const s = slides[index];
            const targetLeft = s.offsetLeft - (viewport.clientWidth - s.offsetWidth) / 2;
            viewport.scrollTo({ left: Math.max(0, Math.round(targetLeft)), behavior });
        };

        slides.forEach((s, i) => {
            const b = document.createElement('button');
            b.type = 'button';
            b.setAttribute('aria-label', `Go to slide ${i + 1}`);
            b.dataset.index = i;
            if (i === 0) b.classList.add('active');
            b.addEventListener('click', () => centerSlide(i, 'smooth'));
            if (indicatorsContainer) indicatorsContainer.appendChild(b);
        });

        const updateActive = () => {
            const center = viewport.scrollLeft + viewport.clientWidth / 2;
            let closest = 0; let minDiff = Infinity;
            slides.forEach((s, idx) => {
                const sCenter = s.offsetLeft + s.offsetWidth / 2;
                const diff = Math.abs(center - sCenter);
                if (diff < minDiff) { minDiff = diff; closest = idx; }
            });
            if (indicatorsContainer) {
                Array.from(indicatorsContainer.children).forEach((btn, idx) => {
                    btn.classList.toggle('active', idx === closest);
                });
            }
        };

        let scrollTimeout = null;
        viewport.addEventListener('scroll', () => {
            if (scrollTimeout) clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(updateActive, 80);
        });

        const getCurrentIndex = () => {
            const center = viewport.scrollLeft + viewport.clientWidth / 2;
            let closest = 0; let minDiff = Infinity;
            slides.forEach((s, idx) => {
                const sCenter = s.offsetLeft + s.offsetWidth / 2;
                const diff = Math.abs(center - sCenter);
                if (diff < minDiff) { minDiff = diff; closest = idx; }
            });
            return closest;
        };

        if (prevBtn) prevBtn.addEventListener('click', () => {
            const idx = getCurrentIndex();
            const prev = (idx - 1 + slides.length) % slides.length;
            centerSlide(prev, 'smooth');
        });
        if (nextBtn) nextBtn.addEventListener('click', () => {
            const idx = getCurrentIndex();
            const next = (idx + 1) % slides.length;
            centerSlide(next, 'smooth');
        });

        // initialize to first slide centered (no vertical jump)
        centerSlide(0, 'auto');
        updateActive();
    }
}
