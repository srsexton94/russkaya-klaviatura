'use strict'

const keyboard = require('./keyboard')

$(() => {
  keyboard.loadUnshift()
  keyboard.addHandlers()
})
