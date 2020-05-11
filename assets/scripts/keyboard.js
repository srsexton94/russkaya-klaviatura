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

// const addHandlers = () => {}

module.exports = {
  loadUnshift,
  loadShift
}
