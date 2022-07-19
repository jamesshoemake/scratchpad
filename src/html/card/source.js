function flipCard() {
  let myCard = document.getElementById('myCard')
  if (myCard.classList.contains('bgcolorblack')) {
    myCard.classList.add('bgcolorgray')
    myCard.classList.remove('bgcolorblack')
  } else {
    myCard.classList.add('bgcolorblack')
    myCard.classList.remove('bgcolorgray')
  }

  let question = document.getElementById('question')

  if (question.classList.contains('visible')) {
    question.classList.add('hidden')
    question.classList.remove('visible')
  } else {
    question.classList.add('visible')
    question.classList.remove('hidden')
  }

  let answer = document.getElementById('answer')

  if (answer.classList.contains('hidden')) {
    answer.classList.add('visible')
    answer.classList.remove('hidden')
  } else {
    answer.classList.add('hidden')
    answer.classList.remove('visible')
  }
}
