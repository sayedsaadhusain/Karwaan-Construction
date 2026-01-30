(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))u(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&u(o)}).observe(document,{childList:!0,subtree:!0});function d(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function u(r){if(r.ep)return;r.ep=!0;const i=d(r);fetch(r.href,i)}})();const S="/assets/logo-cxWZOiCA.png";function w(){return`
    <header class="header" id="header">
      <div class="container header-container">
        <a href="/" class="logo">
          <img src="${S}" alt="Karwaan Construction" style="height: 60px; width: auto;">
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
  `}function A(){const m=document.getElementById("header"),c=document.getElementById("mobile-menu-btn"),d=document.getElementById("nav-menu");window.addEventListener("scroll",()=>{window.scrollY>50?m.classList.add("scrolled"):m.classList.remove("scrolled")}),c.addEventListener("click",()=>{d.classList.toggle("open"),c.innerHTML=d.classList.contains("open")?"✕":"☰"});const u=window.location.pathname;document.querySelectorAll(".nav-link").forEach(i=>{i.classList.remove("active");const o=i.getAttribute("href");u==="/"||u==="/index.html"?o==="/"&&i.classList.add("active"):u.includes(o)&&o!=="/"&&i.classList.add("active")})}function C(){return`
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
  `}document.addEventListener("DOMContentLoaded",()=>{document.getElementById("app");const m=document.getElementById("header-placeholder"),c=document.getElementById("footer-placeholder");m&&(m.innerHTML=w(),A()),c&&(c.innerHTML=C());const d=document.querySelectorAll(".filter-controls button"),u=document.querySelectorAll(".projects-grid .project-card");d.length>0&&d.forEach(e=>{e.addEventListener("click",()=>{d.forEach(a=>a.classList.remove("active")),e.classList.add("active");const l=e.getAttribute("data-filter");u.forEach(a=>{l==="all"||a.getAttribute("data-category")===l?a.style.display="block":a.style.display="none"})})});const r=document.querySelectorAll(".section, .hero-content, .section-heading, .card, .service-card, .project-card, .product-card, .mission-card, .testimonial-card, .feature-item"),i=new IntersectionObserver((e,l)=>{e.forEach(a=>{a.isIntersecting&&(a.target.classList.add("active"),l.unobserve(a.target))})},{threshold:.15,rootMargin:"0px 0px -50px 0px"});r.forEach(e=>{e.classList.add("reveal"),i.observe(e)});const o=document.querySelector(".testimonial-track"),s=document.querySelector(".testimonial-slider-container"),L=document.querySelector(".prev-btn"),b=document.querySelector(".next-btn");if(o&&s){let g=function(){const t=o.children[0];if(!t)return{itemWidth:0,setWidth:0,totalGap:0};const n=window.getComputedStyle(o),k=parseFloat(n.columnGap)||parseFloat(n.gap)||0,E=t.getBoundingClientRect().width+k;return{totalItemWidth:E,setWidth:E*v.length}},y=function(){!l&&h>0?(e+=a,(e>=f*3||e<=f)&&(e=f*2),s.scrollLeft=e):Math.abs(s.scrollLeft-e)>5&&(e=s.scrollLeft),requestAnimationFrame(y)};var I=g,P=y;let e=0,l=!1,a=1;if(o.children.length,o.getAttribute("data-initialized")==="true")return;o.setAttribute("data-initialized","true");const v=Array.from(o.children);o.innerHTML="";const p=t=>{const n=t.cloneNode(!0);return n.classList.remove("reveal"),n.classList.remove("active"),n.style.opacity="1",n.style.transform="none",n};for(let t=0;t<2;t++)v.forEach(n=>o.appendChild(p(n)));v.forEach(t=>o.appendChild(p(t)));for(let t=0;t<2;t++)v.forEach(n=>o.appendChild(p(n)));let{totalItemWidth:h,setWidth:f}=g();e=f*2,s.scrollLeft=e,requestAnimationFrame(y),window.addEventListener("resize",()=>{const t=g();h=t.totalItemWidth,f=t.setWidth,e=f*2,s.scrollLeft=e}),b&&b.addEventListener("click",()=>{const t=Math.round(e/h)*h+h;s.scrollTo({left:t,behavior:"smooth"}),e=t}),L&&L.addEventListener("click",()=>{const t=Math.round(e/h)*h-h;s.scrollTo({left:t,behavior:"smooth"}),e=t}),s.addEventListener("mouseenter",()=>l=!0),s.addEventListener("mouseleave",()=>l=!1),s.addEventListener("touchstart",()=>l=!0),s.addEventListener("touchend",()=>l=!1)}});
