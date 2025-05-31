// Theme toggle logic
const toggleButton = document.getElementById("theme-toggle");
const root = document.body;

// Load theme from localStorage (optional)
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  root.classList.add("dark");
} else {
  root.classList.add("light");
}

toggleButton.addEventListener("click", () => {
  if (root.classList.contains("light")) {
    root.classList.remove("light");
    root.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    root.classList.remove("dark");
    root.classList.add("light");
    localStorage.setItem("theme", "light");
  }
});
