const transform = document.querySelector('.transformed')
// const closeBtn = document.getElementById('close_btn')
const initialLeft = document.querySelector('.initial__left')
const initial__right = document.querySelector('.initial__right')
const rangeInput = document.querySelector('.rangeInput') || ''
const slideFromDown__wrapper = document.querySelector('.slideFromDown__wrapper')
const overlay = document.getElementById('overlay')
const slides = document.querySelectorAll('.slideFromDown__singlePage')
const numbersLeft = document.querySelector('.tranformed__numbers')
const textUnderNumbers = document.querySelector('.tranformed__text')

var countForSlider = 0
var inputRangeValue = 0

// rangeInput.addEventListener('change', function () {
//   inputRangeValue = rangeInput.value
//   let element = slides[inputRangeValue - 1]
//   element.scrollIntoView()
//   textUnderNumbers.innerText = element.children[0].innerText
//   if (inputRangeValue < 10) {
//     numbersLeft.innerText = `0${inputRangeValue}`
//   } else {
//     numbersLeft.innerText = '10'
//   }
//   //   let page = slides[inputRangeValue - 1].getAttribute('data-page')
// })

window.addEventListener('scroll', (e) => {
  if (window.scrollY !== 0 && window.scrollY < 600) {
    transform.style.position = 'fixed'
    transform.style.display = 'flex'
    transform.style.width = `${window.scrollY / 10}%`
  }
  if (window.scrollY === 0) {
    transform.style.width = '0%'
    slideFromDown__wrapper.style.zIndex = '0'
  }
  if (window.scrollY < 1000) {
    overlay.style.opacity = `0.${window.scrollY / 10}`
  } else {
    overlay.style.opacity = '1'
  }

  if (window.scrollY >= 100) {
    initial__right.style.zIndex = '1005'
    overlay.style.zIndex = '2005'
  }
  if (window.scrollY >= 600) {
    slideFromDown__wrapper.style.zIndex = '200400'
  }

  // console.log(window.innerHeight + 'innerHeight')
  // console.log(document.documentElement.clientHeight + 'clientHeight')

  const scrollable = document.documentElement.scrollHeight - window.innerHeight

  slides.forEach((slide, index) => {
    let messageText = isElementInViewport(slide) ? true : false
    if (messageText) {
      let element = slide.dataset.page
      textUnderNumbers.innerText = slide.children[0].innerText
      rangeInput.value = element
      if (element < 10) {
        numbersLeft.innerText = `0${element}`
      } else {
        numbersLeft.innerText = '10'
      }
    }
  })
})

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect()
  return (
    rect.bottom >= 100 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

function hideContent() {
  transform.style.width = '0%'
  countForSlider = 0
}

//closeBtn.addEventListener("click", hideContent);
