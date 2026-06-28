const body = document.body;
const navToggle = document.querySelector(".nav-toggle");
const primaryNav = document.querySelector(".primary-nav");

function setBodyMenuState(isOpen) {
  body.classList.toggle("menu-open", isOpen);
  navToggle?.setAttribute("aria-expanded", String(isOpen));
}

navToggle?.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  setBodyMenuState(!isOpen);
});

primaryNav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    setBodyMenuState(false);
  }
});

document.querySelector(".signup-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  event.currentTarget.reset();
});
