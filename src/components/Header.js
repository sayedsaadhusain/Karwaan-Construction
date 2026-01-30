export function Header() {
  return `
    <header class="header" id="header">
      <div class="container header-container">
        <a href="/" class="logo">
          <img src="/src/assets/images/logo.png" alt="Karwaan Construction" style="height: 60px; width: auto;">
        </a>
        
        <nav class="nav">
          <ul class="nav-menu" id="nav-menu">
            <li><a href="/" class="nav-link">Home</a></li>
            <li><a href="/about.html" class="nav-link">About Us</a></li>
            <li><a href="/projects.html" class="nav-link">Projects</a></li>
            <li><a href="/services.html" class="nav-link">Services</a></li>
            <li><a href="/products.html" class="nav-link">Products</a></li>
            <li><a href="/contact.html" class="nav-link">Contact</a></li>
            <li class="mobile-only-item"><a href="/contact.html" class="btn btn-primary full-width text-center">Book Site Visit</a></li>
          </ul>
        </nav>

        <div class="header-actions">
          <a href="/contact.html" class="btn btn-primary">Book Site Visit</a>
        </div>

        <button class="mobile-menu-btn" id="mobile-menu-btn">
          ☰
        </button>
      </div>
    </header>
  `;
}

export function setupHeader() {
  const header = document.getElementById('header');
  const menuBtn = document.getElementById('mobile-menu-btn');
  const navMenu = document.getElementById('nav-menu');

  // Sticky Header
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile Menu Toggle
  menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    menuBtn.innerHTML = navMenu.classList.contains('open') ? '✕' : '☰';
  });

  // Active Link Logic
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.classList.remove('active');
    const linkPath = link.getAttribute('href');

    // Handle root path
    if (currentPath === '/' || currentPath === '/index.html') {
      if (linkPath === '/') {
        link.classList.add('active');
      }
    }
    else if (currentPath.includes(linkPath) && linkPath !== '/') {
      link.classList.add('active');
    }
  });
}
