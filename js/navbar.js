const menuToggle = document.getElementById("menu-svg");
const navLinks = document.querySelector("#navbar ul");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
