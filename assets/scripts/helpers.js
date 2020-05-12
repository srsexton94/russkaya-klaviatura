'use strict'

const store = require('./store')

const shifting = () => {
  $('li span').toggleClass('hidden')
  store.shifted = true
}

const unshifting = () => {
  $('.lower').removeClass('hidden')
  $('.upper').addClass('hidden')
  store.shifted = false
}

const capslock = locked => {
  if (locked) {
    store.capsLocked = true
    shifting()
  } else {
    store.capsLocked = false
    unshifting()
  }
}

const editTxt = key => {
  const screenTxt = $('#screen').text()
  // $('.lower')
  switch (key) {
    case 'Tab':
      event.preventDefault() // prevent user tabbing into textarea
      $('#screen').text(screenTxt + '   ') // add a tab space
      break
    case 'Space':
      $('#screen').text(screenTxt + ' ') // add a space
      break
    case 'Backspace':
      $('#screen').text(screenTxt.slice(0, -1))
      break
    case 'Enter':
      $('#screen').text(`${screenTxt}
`)
      break
    default:
      shifting()
  }
}

const typeTxt = key => {
  let newTxt
  if (store.shifted) {
    newTxt = $(`#${key} span`).text().charAt(1)
  } else {
    newTxt = $(`#${key} span`).text().charAt(0)
  }
  $('#screen').text($('#screen').text() + newTxt)
}

module.exports = {
  capslock,
  editTxt,
  shifting,
  typeTxt,
  unshifting
}
