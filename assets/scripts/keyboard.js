'use strict'

const keys = require('./keys')
const help = require('./helpers')
const store = require('./store')

const onKeydown = event => {
  const key = event.code // get the string code for key pressed (element ID)
  $(`#${key}`).addClass('clicked') // add class to corresponding UI 'key'
  if (key === 'CapsLock') {
    help.capslock(true)
  } else if (keys.text.includes(key)) {
    help.typeTxt(key)
  } else if (keys.edits.includes(key)) {
    help.editTxt(key)
  }
}

const onKeyup = event => {
  const key = event.code
  $(`#${key}`).removeClass('clicked')
  if (key === 'CapsLock') {
    help.capslock(false)
  } else if (key === 'ShiftLeft' || key === 'ShiftRight') {
    store.shifted = false
  } else if (!store.capsLocked && !store.shifted) {
    help.unshifting()
  }
}

const addHandlers = () => {
  document.addEventListener('keydown', onKeydown)
  document.addEventListener('keyup', onKeyup)
}

module.exports = {
  addHandlers
}
