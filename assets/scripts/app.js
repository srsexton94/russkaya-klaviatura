'use strict'

const keyboard = require('./keyboard')

$(() => {
  $('.upper').addClass('hidden')
  keyboard.addHandlers()
  $('#clear').on('click', () => {
    $('#screen').text('')
  })
})
