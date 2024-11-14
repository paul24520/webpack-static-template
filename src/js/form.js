const feedback = document.querySelector('.feedback')
const showFeedback = document.querySelectorAll(
  '#showFeedback, #showFeedback-notmobile'
)
const closeFeedback = document.getElementById('closeFeedback')
const call = document.querySelector('.order-call')
const showCall = document.querySelectorAll('#showCall, #showCall-notmobile')
const closeCall = document.getElementById('closeCall')
const blurScreen = document.querySelector('.blur')
let formVisible = false

// ФУНКЦИИ ОТКРЫТИЯ И ЗАКРЫТИЯ FEEDBACK
function showFeedbackFn() {
  feedback.style.display = 'block'
  feedback.style.position = 'fixed'
  blurScreen.style.display = 'block'
  formVisible = true
}
showFeedback.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.stopPropagation()
    showFeedbackFn()
  })
})

function closeFeedbackFn() {
  feedback.style.display = 'none'
  blurScreen.style.display = 'none'
  formVisible = false
}
closeFeedback.addEventListener('click', function (event) {
  event.stopPropagation()
  closeFeedbackFn()
})

// ФУНКЦИИ ОТКРЫТИЯ И ЗАКРЫТИЯ CALL
function showCallFn() {
  call.style.display = 'block'
  call.style.position = 'fixed'
  blurScreen.style.display = 'block'
  formVisible = true
}
showCall.forEach((buton) => {
  buton.addEventListener('click', (event) => {
    event.stopPropagation()
    showCallFn()
  })
})

function closeCallFn() {
  call.style.display = 'none'
  blurScreen.style.display = 'none'
  formVisible = false
}
closeCall.addEventListener('click', function (event) {
  event.stopPropagation()
  closeCallFn()
})

// ФУНКЦИЯ ЗАКРЫТИЯ ЭКРАНА ПРИ НАЖАТИИ НЕ НА ФОРМУ
blurScreen.addEventListener('click', function (event) {
  if (formVisible) {
    if (event.target !== feedback && !feedback.contains(event.target)) {
      closeFeedbackFn()
      event.stopPropagation()
    }
    if (event.target !== call && !call.contains(event.target)) {
      closeCallFn()
      event.stopPropagation()
    }
  }
})
