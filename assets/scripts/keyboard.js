'use strict'

const onKeydown = event => {
  const keyId = `#${event.code}`
  const newTxt = $(keyId + ' span').text().charAt(0)
  const screenTxt = $('#screen').text()
  $('#screen').text(screenTxt + newTxt)
  console.log(screenTxt)
  console.log(newTxt)
  $(keyId).addClass('clicked')
}

const onKeyup = event => {
  const key = event.code
  $(`#${key}`).removeClass('clicked')
}

const addHandlers = () => {
  document.addEventListener('keydown', onKeydown)
  document.addEventListener('keyup', onKeyup)
}

module.exports = {
  addHandlers
}
