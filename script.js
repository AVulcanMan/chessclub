const barBtn = document.querySelector(".bar-btn");
const asideNavigation = document.querySelector(".aside-navigation");
const closeAsideBtn = document.getElementById("closeAside");

// When barBtn is clicked
barBtn.addEventListener("click", () => {
  asideNavigation.classList.add("active");
  barBtn.classList.add("hide-bar-btn"); // hide it
});

// When a link is clicked
document.querySelectorAll(".aside-navigation a").forEach(link => {
  link.addEventListener("click", () => {
    asideNavigation.classList.remove("active");
    barBtn.classList.remove("hide-bar-btn");
  });
});

// Clicking outside closes the aside
document.addEventListener("click", (e) => {
  if (
    asideNavigation.classList.contains("active") &&
    !asideNavigation.contains(e.target) &&
    !barBtn.contains(e.target)
  ) {
    asideNavigation.classList.remove("active");
    barBtn.classList.remove("hide-bar-btn");
  }
});

// When X button is clicked
closeAsideBtn.addEventListener("click", () => {
  asideNavigation.classList.remove("active");
  barBtn.classList.remove("hide-bar-btn");
});
