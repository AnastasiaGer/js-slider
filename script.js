function slidesPlugin(activeSlide = 0) {
  const sliders = document.querySelectorAll('.slide')

  sliders[activeSlide].classList.add('active');

  for (const slide of sliders) {
    slide.addEventListener('click', () => {
      clearActiveClasses()
      slide.classList.add('active');
    })
  }
  
  function clearActiveClasses() {
    sliders.forEach((slide) => {
      slide.classList.remove('active')
    })
  }
}

slidesPlugin()