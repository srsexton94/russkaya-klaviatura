'use strict'

const keyboard = require('./keyboard')

$(() => {
  $('.upper').addClass('hidden')
  keyboard.addHandlers()
})
