const btn = document.getElementById("langBtn");
let lang = "es";

btn.addEventListener("click", () => {

  lang = lang === "es" ? "en" : "es";
  btn.textContent = lang.toUpperCase();

  document.querySelectorAll("[data-es]").forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });

});