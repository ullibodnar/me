import Typed from 'typed.js'

const navToggleMobile: HTMLElement = document.querySelector(".nav-toggle")
const header: HTMLElement = document.querySelector("header")

navToggleMobile.onclick = toggleMobileNav

function toggleMobileNav() {
  navToggleMobile.classList.toggle("x")
  header.classList.toggle("toggled")
}

var options2 = {
  strings: ["", "<p>Hi! I<p><h2>build things</h2>", "<p>Hi! I</p><h2>write code</h2>", "<p>Hi! I am a</p><h2>developer</h2>", "<p>Hi! I'm</p><h2>Ulli Bodnar</h2>"],
  typeSpeed: 50,
  smartBackspace: true,
  startDelay: 1000,
  backSpeed: 20,
  showCursor: false
}

var typed = new Typed(".typed-content", options2);
