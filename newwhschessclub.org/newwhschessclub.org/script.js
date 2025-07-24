const barBtn = document.querySelector(".bar-btn");
const asideNavigation = document.querySelector(".aside-navigation");

const toggleAsideNavigation = () => {
  asideNavigation.classList.toggle("active");
}

barBtn.addEventListener("click", toggleAsideNavigation);

const asideNavigationLinks = document.querySelectorAll(".aside-navigation a");
asideNavigationLinks.forEach(link => {
  link.addEventListener("click", () => {
    asideNavigation.classList.remove("active");
  });
});