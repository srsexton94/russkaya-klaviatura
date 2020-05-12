'use strict'

const keyboardTemplate = require('./templates/keyboard.handlebars')
const keys = require('./keys')

const loadShift = () => {
  const keyboardHtml = keyboardTemplate({ keys: keys.shifted })
  $('#container').html(keyboardHtml)
}

const loadUnshift = () => {
  const keyboardHtml = keyboardTemplate({ keys: keys.unshifted })
  $('#container').html(keyboardHtml)
}

const onKeydown = event => {
  const key = event.code
  // const item = $('#container').find(`#${key}`)
  // item.addClass('clicked')
  // console.log(item)
  const element = document.getElementById('container').querySelector('#' + key)
  console.log(element.classList)
}

const onKeyup = event => {
  const key = event.code
  $('#container').find(`#${key}`).removeClass('clicked')
}

const addHandlers = () => {
  document.addEventListener('keydown', onKeydown)
  document.addEventListener('keyup', onKeyup)
}

module.exports = {
  loadUnshift,
  loadShift,
  addHandlers
}
