(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))u(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&u(r)}).observe(document,{childList:!0,subtree:!0});function d(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(i){if(i.ep)return;i.ep=!0;const o=d(i);fetch(i.href,o)}})();function S(){return`
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
  `}function w(){const m=document.getElementById("header"),c=document.getElementById("mobile-menu-btn"),d=document.getElementById("nav-menu");window.addEventListener("scroll",()=>{window.scrollY>50?m.classList.add("scrolled"):m.classList.remove("scrolled")}),c.addEventListener("click",()=>{d.classList.toggle("open"),c.innerHTML=d.classList.contains("open")?"✕":"☰"});const u=window.location.pathname;document.querySelectorAll(".nav-link").forEach(o=>{o.classList.remove("active");const r=o.getAttribute("href");u==="/"||u==="/index.html"?r==="/"&&o.classList.add("active"):u.includes(r)&&r!=="/"&&o.classList.add("active")})}function A(){return`
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
  `}document.addEventListener("DOMContentLoaded",()=>{document.getElementById("app");const m=document.getElementById("header-placeholder"),c=document.getElementById("footer-placeholder");m&&(m.innerHTML=S(),w()),c&&(c.innerHTML=A());const d=document.querySelectorAll(".filter-controls button"),u=document.querySelectorAll(".projects-grid .project-card");d.length>0&&d.forEach(e=>{e.addEventListener("click",()=>{d.forEach(a=>a.classList.remove("active")),e.classList.add("active");const l=e.getAttribute("data-filter");u.forEach(a=>{l==="all"||a.getAttribute("data-category")===l?a.style.display="block":a.style.display="none"})})});const i=document.querySelectorAll(".section, .hero-content, .section-heading, .card, .service-card, .project-card, .product-card, .mission-card, .testimonial-card, .feature-item"),o=new IntersectionObserver((e,l)=>{e.forEach(a=>{a.isIntersecting&&(a.target.classList.add("active"),l.unobserve(a.target))})},{threshold:.15,rootMargin:"0px 0px -50px 0px"});i.forEach(e=>{e.classList.add("reveal"),o.observe(e)});const r=document.querySelector(".testimonial-track"),s=document.querySelector(".testimonial-slider-container"),L=document.querySelector(".prev-btn"),b=document.querySelector(".next-btn");if(r&&s){let g=function(){const t=r.children[0];if(!t)return{itemWidth:0,setWidth:0,totalGap:0};const n=window.getComputedStyle(r),k=parseFloat(n.columnGap)||parseFloat(n.gap)||0,E=t.getBoundingClientRect().width+k;return{totalItemWidth:E,setWidth:E*v.length}},y=function(){!l&&h>0?(e+=a,(e>=f*3||e<=f)&&(e=f*2),s.scrollLeft=e):Math.abs(s.scrollLeft-e)>5&&(e=s.scrollLeft),requestAnimationFrame(y)};var C=g,I=y;let e=0,l=!1,a=1;if(r.children.length,r.getAttribute("data-initialized")==="true")return;r.setAttribute("data-initialized","true");const v=Array.from(r.children);r.innerHTML="";const p=t=>{const n=t.cloneNode(!0);return n.classList.remove("reveal"),n.classList.remove("active"),n.style.opacity="1",n.style.transform="none",n};for(let t=0;t<2;t++)v.forEach(n=>r.appendChild(p(n)));v.forEach(t=>r.appendChild(p(t)));for(let t=0;t<2;t++)v.forEach(n=>r.appendChild(p(n)));let{totalItemWidth:h,setWidth:f}=g();e=f*2,s.scrollLeft=e,requestAnimationFrame(y),window.addEventListener("resize",()=>{const t=g();h=t.totalItemWidth,f=t.setWidth,e=f*2,s.scrollLeft=e}),b&&b.addEventListener("click",()=>{const t=Math.round(e/h)*h+h;s.scrollTo({left:t,behavior:"smooth"}),e=t}),L&&L.addEventListener("click",()=>{const t=Math.round(e/h)*h-h;s.scrollTo({left:t,behavior:"smooth"}),e=t}),s.addEventListener("mouseenter",()=>l=!0),s.addEventListener("mouseleave",()=>l=!1),s.addEventListener("touchstart",()=>l=!0),s.addEventListener("touchend",()=>l=!1)}});
