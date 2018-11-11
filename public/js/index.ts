const navToggleMobile: HTMLElement = document.querySelector(".nav-toggle")
const header: HTMLElement = document.querySelector("header")

navToggleMobile.onclick = toggleMobileNav

function toggleMobileNav() {
  navToggleMobile.classList.toggle("x")
  header.classList.toggle("toggled")
}
