'use strict'

const keys = require('./keys')

const editTxt = key => {
  const screenTxt = $('#screen').text()
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
    //   break
    // case ('CapsLock' || 'ShiftLeft' || 'ShiftRight'):
    //   $('.lower').addClass('hidden')
    //   $('.upper').removeClass('hidden')
  }
  console.log('editor!')
}

const typeTxt = key => {
  const newTxt = $(`#${key} span`).text().charAt(0)
  $('#screen').text($('#screen').text() + newTxt)
}

const onKeydown = event => {
  const key = event.code // get the string code for key pressed (element ID)
  $(`#${key}`).addClass('clicked') // add class to corresponding UI 'key'
  if (keys.text.includes(key)) {
    typeTxt(key)
  } else if (keys.edits.includes(key)) {
    editTxt(key)
  }
}

const onKeyup = event => {
  const key = event.code
  $(`#${key}`).removeClass('clicked')
  // $('li .lower').removeClass('hidden')
  // $('li .upper').addClass('hidden')
}

const addHandlers = () => {
  document.addEventListener('keydown', onKeydown)
  document.addEventListener('keyup', onKeyup)
}

module.exports = {
  addHandlers
}
