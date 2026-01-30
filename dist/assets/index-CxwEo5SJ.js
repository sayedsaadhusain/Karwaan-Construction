(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function a(){return`
    <header class="header" id="header">
      <div class="container header-container">
        <a href="/" class="logo">
          Karwaan <span>Construction</span>
        </a>
        
        <nav class="nav">
          <ul class="nav-menu" id="nav-menu">
            <li><a href="/" class="nav-link active">Home</a></li>
            <li><a href="/about.html" class="nav-link">About Us</a></li>
            <li><a href="/projects.html" class="nav-link">Projects</a></li>
            <li><a href="/services.html" class="nav-link">Services</a></li>
            <li><a href="/products.html" class="nav-link">Products</a></li>
            <li><a href="/contact.html" class="nav-link">Contact</a></li>
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
  `}function l(){const i=document.getElementById("header"),s=document.getElementById("mobile-menu-btn"),r=document.getElementById("nav-menu");window.addEventListener("scroll",()=>{window.scrollY>50?i.classList.add("scrolled"):i.classList.remove("scrolled")}),s.addEventListener("click",()=>{r.classList.toggle("open"),s.innerHTML=r.classList.contains("open")?"✕":"☰"})}function c(){return`
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <h3>KARWAAN CONSTRUCTION</h3>
            <p class="footer-desc">
              Building trust, brick by brick. We provide top-tier construction and interior design services in Lucknow, ensuring quality and transparency in every project.
            </p>
          </div>
          
          <div class="footer-col">
            <h4 class="footer-heading">Quick Links</h4>
            <ul class="footer-links">
              <li><a href="/about.html">About Us</a></li>
              <li><a href="/projects.html">Our Projects</a></li>
              <li><a href="/services.html">Services</a></li>
              <li><a href="/products.html">Construction Products</a></li>
              <li><a href="/contact.html">Contact Us</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4 class="footer-heading">Services</h4>
            <ul class="footer-links">
              <li><a href="/services.html#residential">Residential Construction</a></li>
              <li><a href="/services.html#commercial">Commercial Construction</a></li>
              <li><a href="/services.html#interior">Interior Design</a></li>
              <li><a href="/services.html#turnkey">Turnkey Projects</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4 class="footer-heading">Contact Us</h4>
            <ul class="footer-contact">
              <li>
                <span>📍</span>
                <span>Shop No. 27, Royal Plaza, U.G.F, Munshi Pulia, Sector 16, Indira Nagar, Lucknow - 226016</span>
              </li>
              <li>
                <span>📞</span>
                <span>+91 98765 43210</span> 
              </li>
              <li>
                <span>✉️</span>
                <span>info@karwaanconstruction.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; 2026 Karwaan Construction & Developers. All Rights Reserved.</p>
          <div class="social-links">
            <!-- Social Icons would go here -->
          </div>
        </div>
      </div>
    </footer>
  `}document.addEventListener("DOMContentLoaded",()=>{document.getElementById("app");const i=document.getElementById("header-placeholder"),s=document.getElementById("footer-placeholder");i&&(i.innerHTML=a(),l()),s&&(s.innerHTML=c());const r=document.querySelectorAll(".filter-controls button"),n=document.querySelectorAll(".projects-grid .project-card");r.length>0&&r.forEach(e=>{e.addEventListener("click",()=>{r.forEach(o=>o.classList.remove("active")),e.classList.add("active");const t=e.getAttribute("data-filter");n.forEach(o=>{t==="all"||o.getAttribute("data-category")===t?o.style.display="block":o.style.display="none"})})})});
