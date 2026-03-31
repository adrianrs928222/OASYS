const img = document.getElementById("cartaImg");

if (img) {
  img.addEventListener("click", () => {
    window.open(img.src, "_blank");
  });
}