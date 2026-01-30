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
});
