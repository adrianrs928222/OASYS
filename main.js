// ABRIR CARTA EN GRANDE
const img = document.getElementById("cartaImg");

if (img) {
  img.addEventListener("click", () => {
    window.open(img.src, "_blank");
  });
}

// SCROLL SUAVE + CIERRE MENÚ MÓVIL
const mobileMenu = document.getElementById("mobileMenu");
const menuToggle = document.getElementById("menuToggle");

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }

    if (mobileMenu) {
      mobileMenu.classList.remove("active");
    }
  });
});

// HEADER DINÁMICO
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");

  if (header) {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }
});

// MENÚ MÓVIL
if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });
}

// ANIMACIONES AL HACER SCROLL
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.18 });

document.querySelectorAll(".animate").forEach(el => {
  observer.observe(el);
});

// PARALLAX REAL HERO
const heroBg = document.getElementById("heroBg");
const isMobile = window.innerWidth <= 768;

function parallaxHero() {
  if (!heroBg) return;

  const scrollY = window.scrollY;
  const speed = isMobile ? scrollY * 0.18 : scrollY * 0.35;

  heroBg.style.transform = `translate3d(0, ${speed}px, 0) scale(1.08)`;
}

window.addEventListener("scroll", parallaxHero, { passive: true });
parallaxHero();