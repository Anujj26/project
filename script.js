const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
  const themeIcon = themeToggle.querySelector("i");

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    const isLightMode = document.body.classList.contains("light-mode");
    themeToggle.setAttribute(
      "aria-label",
      isLightMode ? "Switch to dark mode" : "Switch to light mode"
    );

    if (themeIcon) {
      themeIcon.classList.remove("fa-sun", "fa-moon");
      themeIcon.classList.add(isLightMode ? "fa-sun" : "fa-moon");
    }
  });
}
