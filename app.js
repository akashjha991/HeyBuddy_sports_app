const sections = ["home", "dashboard", "create", "room", "profile", "auth"];

function showSection(id) {
  sections.forEach((name) => {
    const node = document.getElementById(name);
    if (!node) return;
    node.classList.toggle("hidden", name !== id);
  });
}

document.querySelectorAll("[data-target]").forEach((button) => {
  button.addEventListener("click", () => {
    const id = button.getAttribute("data-target");
    if (id) showSection(id);
  });
});

showSection("home");
