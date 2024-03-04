"use strict" // strict mode

// Selectors
const menuBtn = document.querySelector(".menu-bars")
const mainUl = document.querySelector(".main-ul")
const mobileUlBtn = document.querySelector(".open-ul-mobile")
const innerUl = document.querySelector(".inner-ul")
const nav = document.querySelector(".nav")
const scrollers = document.querySelectorAll(".scroller")

// Variables
let menuFlag = false
let innerMenuFlag = false

// Functions
// === START HEADER HANDLING ===
menuBtn.addEventListener("click", function () {
  if (menuFlag) {
    nav.style.opacity = "0"
    menuFlag = false
  } else {
    nav.style.opacity = "1"
    menuFlag = true
  }
})
mobileUlBtn.addEventListener("click", function () {
  if (innerMenuFlag) {
    innerUl.style.height = "0px"
    innerUl.style.opacity = "0"
    innerMenuFlag = false
  } else {
    innerUl.style.height = "165px"
    innerUl.style.opacity = "1"
    innerMenuFlag = true
  }
})
// === END HEADER HANDLING ===

////////////////////////////////////////////////////////////////////////////

// === START SCROLLER HANDLING ===
// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation()
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true)

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner")
    const scrollerContent = Array.from(scrollerInner.children)

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true)
      duplicatedItem.setAttribute("aria-hidden", true)
      scrollerInner.appendChild(duplicatedItem)
    })
  })
}
// === END SCROLLER HANDLING ===
