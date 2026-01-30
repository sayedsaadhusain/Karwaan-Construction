// CSS loaded via index.html to prevent FOUC
import { Header, setupHeader } from './components/Header.js'
import { Footer } from './components/Footer.js'

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');

    // If we have specific placeholders, use them. Otherwise, prepend/append to app or body.
    const headerPlaceholder = document.getElementById('header-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');

    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = Header();
        setupHeader();
    }

    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = Footer();
    }

    // Project Filtering Logic
    const filterButtons = document.querySelectorAll('.filter-controls button');
    const projectCards = document.querySelectorAll('.projects-grid .project-card');

    if (filterButtons.length > 0) {
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all
                filterButtons.forEach(b => b.classList.remove('active'));
                // Add active to clicked
                btn.classList.add('active');

                const filterValue = btn.getAttribute('data-filter');

                projectCards.forEach(card => {
                    if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'block';
                        // Animation reset could go here
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // Scroll Reveal Animation (Premium Motion)
    const revealElements = document.querySelectorAll('.section, .hero-content, .section-heading, .card, .service-card, .project-card, .product-card, .mission-card, .testimonial-card, .feature-item');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Reveal only once for cleaner UX
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => {
        el.classList.add('reveal');
        revealObserver.observe(el);
    });

    // Advanced Testimonial Carousel
    const track = document.querySelector('.testimonial-track');
    const container = document.querySelector('.testimonial-slider-container');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    if (track && container) {
        // Setup state
        let currentScroll = 0;
        let isHovered = false;
        let autoPlaySpeed = 1;
        let animationFrameId;
        const originalCount = track.children.length;

        // Prevent exponential cloning on HMR (Hot Module Replacement)
        if (track.getAttribute('data-initialized') === 'true') {
            // Optional: could strip back to originals if needed, but for now just returning prevents explosion
            // Better: we want to re-run layout calculations but not cloning.
            // For simplicity in this vanilla setup, we'll strip existing clones if we re-run?
            // Actually, simplest is to assume if it's initialized, we trust the DOM or doing a full reload is safer.
            // But to be robust: let's strip everything that is a clone!
            // ..implementation complexity..
            // Let's just return if already good, assuming reload fixes HMR states or we accept one-time init.
            // BUT, if we edited code, this block runs again. 
            // Let's rely on specific class logic.
            return;
        }
        track.setAttribute('data-initialized', 'true');

        // Capture originals. If we already have clones, we might be capturing clones. 
        // We'll trust the "reveal" fix handles visibility, and we'll try to find only "real" items if possible?
        // No, let's just proceed but ensure visibility.

        const originalItems = Array.from(track.children);

        // Clear and rebuild
        track.innerHTML = '';

        // Helper to prepare item (ensure visible)
        const createSlide = (item) => {
            const clone = item.cloneNode(true);
            // CRITICAL FIX: Remove 'reveal' class so items don't stay hidden (opacity: 0) 
            // because the IntersectionObserver doesn't watch these new clones.
            clone.classList.remove('reveal');
            clone.classList.remove('active'); // accurate reset
            clone.style.opacity = '1';
            clone.style.transform = 'none'; // reset any reveal transforms
            return clone;
        };

        // 2 Sets Before
        for (let i = 0; i < 2; i++) {
            originalItems.forEach(item => track.appendChild(createSlide(item)));
        }
        // 1 Set (Original)
        originalItems.forEach(item => track.appendChild(createSlide(item)));

        // 2 Sets After
        for (let i = 0; i < 2; i++) {
            originalItems.forEach(item => track.appendChild(createSlide(item)));
        }

        // Layout Calculation Function
        function getLayoutMetrics() {
            const firstItem = track.children[0];
            if (!firstItem) return { itemWidth: 0, setWidth: 0, totalGap: 0 };

            const style = window.getComputedStyle(track);
            const gap = parseFloat(style.columnGap) || parseFloat(style.gap) || 0;
            const itemWidth = firstItem.getBoundingClientRect().width;
            const totalItemWidth = itemWidth + gap;

            return {
                totalItemWidth,
                setWidth: totalItemWidth * originalItems.length // Use original count, not current child count
            };
        }

        // Initialize Scroll Position
        let { totalItemWidth, setWidth } = getLayoutMetrics();
        // Wait for layout painting if width is 0
        if (setWidth === 0) {
            // Retry shortly?
        }

        currentScroll = setWidth * 2;
        container.scrollLeft = currentScroll;

        // Loop Function
        function smoothLoop() {
            if (!isHovered && totalItemWidth > 0) {
                currentScroll += autoPlaySpeed;

                // Reset Logic
                // If we reach the start of Set 4 (Index 3), jump back to Set 3 (Index 2)
                // Set 3 starts at: setWidth * 2
                // Set 4 starts at: setWidth * 3
                if (currentScroll >= setWidth * 3) {
                    currentScroll = setWidth * 2;
                }
                // If we reverse past Set 3, jump to Set 4
                else if (currentScroll <= setWidth) {
                    currentScroll = setWidth * 2;
                }

                container.scrollLeft = currentScroll;
            } else {
                // Sync if user manually scrolled (swipe/scroll wheel)
                if (Math.abs(container.scrollLeft - currentScroll) > 5) {
                    currentScroll = container.scrollLeft;
                }
            }
            animationFrameId = requestAnimationFrame(smoothLoop);
        }

        // Start Loop
        animationFrameId = requestAnimationFrame(smoothLoop);

        // Resize Listener to Recalibrate
        window.addEventListener('resize', () => {
            const metrics = getLayoutMetrics();
            totalItemWidth = metrics.totalItemWidth;
            setWidth = metrics.setWidth;
            // Re-center roughly to avoid getting lost
            currentScroll = setWidth * 2;
            container.scrollLeft = currentScroll;
        });

        // Controls
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                const target = Math.round(currentScroll / totalItemWidth) * totalItemWidth + totalItemWidth;
                container.scrollTo({ left: target, behavior: 'smooth' });
                currentScroll = target;
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                const target = Math.round(currentScroll / totalItemWidth) * totalItemWidth - totalItemWidth;
                container.scrollTo({ left: target, behavior: 'smooth' });
                currentScroll = target;
            });
        }

        // Hover Pausing
        container.addEventListener('mouseenter', () => isHovered = true);
        container.addEventListener('mouseleave', () => isHovered = false);
        container.addEventListener('touchstart', () => isHovered = true);
        container.addEventListener('touchend', () => isHovered = false);
    }
});
