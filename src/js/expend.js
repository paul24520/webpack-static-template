const readMore = document.getElementById('read-more')
const infoText = document.querySelector('.info__text')
const replaceTextInfo = document.getElementById('read-more__text')
function showReadMoreUppageFn() {
  infoText.classList.toggle('info__text--visible')
  replaceTextInfo.classList.toggle('continue-btn--rot')
  if (infoText.classList.contains('info__text--visible')) {
    replaceTextInfo.textContent = 'Скрыть'
  } else {
    replaceTextInfo.textContent = 'Читать далее'
  }
}
readMore.addEventListener('click', showReadMoreUppageFn)

const expendButtonBrands = document.getElementById('brands__expend-button')
const brands__list = document.querySelector('.brands__list')
const replaceTextBrands = document.getElementById('brands__expend-text')
function showReadMoreBrandsFn() {
  brands__list.classList.toggle('brands__list--visible')
  replaceTextBrands.classList.toggle('brands__expend-text-rotate')
  if (brands__list.classList.contains('brands__list--visible')) {
    replaceTextBrands.textContent = 'Скрыть'
  } else {
    replaceTextBrands.textContent = 'Показать все'
  }
}
expendButtonBrands.addEventListener('click', showReadMoreBrandsFn)

const expendButtonRemonts = document.getElementById('remonts__expend-button')
const remonts__list = document.querySelector('.remonts__list')
const replaceTextRemonts = document.getElementById('remonts__expend-text')

function showReadMoreRemontsFn() {
  remonts__list.classList.toggle('remonts__list--visible')
  replaceTextRemonts.classList.toggle('remonts__expend-text-rotate')
  if (remonts__list.classList.contains('remonts__list--visible')) {
    replaceTextRemonts.textContent = 'Скрыть'
  } else {
    replaceTextRemonts.textContent = 'Показать все'
  }
}
expendButtonRemonts.addEventListener('click', showReadMoreRemontsFn)
