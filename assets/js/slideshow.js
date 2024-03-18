const track = document.querySelector(".carousel__track") //ul
const slides = Array.from(track.children) //li items
const nextButton = document.querySelector(".carousel__button--right ")
const prevButton = document.querySelector(".carousel__button--left")
const dotsNav = document.querySelector(".carousel__nav")
const dots = Array.from(dotsNav.children)

const slideWidth = slides[0].getBoundingClientRect().width
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px"
}

let currentIndex = 0
let skipThisInterval = false
let goBackwards = false

slides.forEach(setSlidePosition)
const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = "translateX(-" + targetSlide.style.left + ")"
  currentSlide.classList.remove("current-slide")
  targetSlide.classList.add("current-slide")
}
const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
  if (targetIndex === 0) {
    prevButton.classList.add("is-hidden")
    nextButton.classList.remove("is-hidden")
  } else if (targetIndex === slides.length - 1) {
    prevButton.classList.remove("is-hidden")
    nextButton.classList.add("is-hidden")
  } else {
    prevButton.classList.remove("is-hidden")
    nextButton.classList.remove("is-hidden")
  }
}
const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove("current-slide")
  targetDot.classList.add("current-slide")
}
const nextImg = () => {
  const currentSlide = track.querySelector(".current-slide")
  const nextSlide = currentSlide.nextElementSibling
  const currentDot = dotsNav.querySelector(".current-slide")
  const nextDot = currentDot.nextElementSibling
  const nextIndex = slides.findIndex((slide) => slide === nextSlide)
  moveToSlide(track, currentSlide, nextSlide)
  updateDots(currentDot, nextDot)
  hideShowArrows(slides, prevButton, nextButton, nextIndex)
}
nextButton.addEventListener("click", nextImg)

const prevImg = () => {
  const currentSlide = track.querySelector(".current-slide")
  const prevSlide = currentSlide.previousElementSibling
  const currentDot = dotsNav.querySelector(".current-slide")
  const prevDot = currentDot.previousElementSibling
  const prevIndex = slides.findIndex((slide) => slide === prevSlide)
  moveToSlide(track, currentSlide, prevSlide)
  updateDots(currentDot, prevDot)
  hideShowArrows(slides, prevButton, nextButton, prevIndex)
}
prevButton.addEventListener("click", prevImg)

dotsNav.addEventListener("click", (e) => {
  skipThisInterval = true
  const targetDot = e.target.closest("button")
  if (!targetDot) return
  const currentSlide = track.querySelector(".current-slide")
  const currentDot = dotsNav.querySelector(".current-slide")
  const targetIndex = dots.findIndex((dot) => dot === targetDot)
  currentIndex = targetIndex
  const targetSlide = slides[targetIndex]
  moveToSlide(track, currentSlide, targetSlide)
  updateDots(currentDot, targetDot)
  hideShowArrows(slides, prevButton, nextButton, targetIndex)
})

setInterval(() => {
  // fixes bug where slideshow might go to next image immediately after the user clicked on a dot
  if (skipThisInterval) {
    skipThisInterval = false
    return
  }
  if (!goBackwards) {
    currentIndex++
    if (currentIndex >= slides.length) {
      currentIndex = slides.length
      goBackwards = true
      return
    }
    nextImg()
  } else {
    currentIndex--
    if (currentIndex <= 0) {
      currentIndex = 0
      goBackwards = false
      return
    }
    prevImg()
  }
}, 2000)
