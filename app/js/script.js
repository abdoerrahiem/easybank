const hamburger = document.querySelector('#hamburger')
const header = document.querySelector('.header')
const overlay = document.querySelector('.overlay')

hamburger.addEventListener('click', () => {
  console.log('click')
  if (header.classList.contains('open')) {
    // Close hamburger
    header.classList.remove('open')
    overlay.classList.remove('fade-in')
    overlay.classList.add('fade-out')
  } else {
    // Open hamburger
    header.classList.add('open')
    overlay.classList.remove('fade-out')
    overlay.classList.add('fade-in')
  }
})
