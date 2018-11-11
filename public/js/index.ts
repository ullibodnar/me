const navToggleMobile: HTMLElement = document.querySelector(".nav-toggle")

navToggleMobile.onclick = toggleMobileNav

function toggleMobileNav() {
  console.log('hi')
  navToggleMobile.classList.toggle("x")
}
