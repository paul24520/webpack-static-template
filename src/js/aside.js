const aside = document.querySelector('aside')
const closeAside = document.getElementById('closeAside')
let formVisible = false
const showAside = document.getElementById('showAside')
const blurAside = document.querySelector('.blur-aside')

function closeAsideFn() {
  aside.style.display = 'none'
  blurAside.style.display = 'none'
  formVisible = false
}
function showAsideFn() {
  aside.style.display = 'block'
  aside.style.position = 'fixed'
  blurAside.style.display = 'block'
  formVisible = true
}
closeAside.addEventListener('click', closeAsideFn)
showAside.addEventListener('click', showAsideFn)

function asideResize() {
  const screenWidth = window.innerWidth

  if (screenWidth >= 1426) {
    aside.style.display = 'block'
    aside.style.position = 'sticky'
  } else {
    closeAsideFn()
  }
}

window.addEventListener('resize', asideResize)

blurAside.addEventListener('click', function (event) {
  if (formVisible) {
    if (event.target !== aside && !aside.contains(event.target)) {
      event.stopPropagation()
      closeAsideFn()
    }
  }
})
