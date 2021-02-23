const body = document.querySelector('body')
const hamburger = document.querySelector('#hamburger')
const header = document.querySelector('.header')
const overlay = document.querySelector('.overlay')
const fades = document.querySelectorAll('.has-fade')

hamburger.addEventListener('click', () => {
  console.log('click')
  if (header.classList.contains('open')) {
    // Close hamburger
    body.classList.remove('noscroll')
    header.classList.remove('open')
    fades.forEach((fade) => {
      fade.classList.remove('fade-in')
      fade.classList.add('fade-out')
    })
  } else {
    // Open hamburger
    body.classList.add('noscroll')
    header.classList.add('open')
    fades.forEach((fade) => {
      fade.classList.remove('fade-out')
      fade.classList.add('fade-in')
    })
  }
})
