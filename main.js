// CLICK CARTA
const img = document.getElementById("cartaImg");

if (img) {
  img.addEventListener("click", () => {
    window.open(img.src, "_blank");
  });
}

// SCROLL SUAVE
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// HEADER DINÁMICO
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");

  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// ANIMACIONES SCROLL
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".animate").forEach(el => {
  observer.observe(el);
});