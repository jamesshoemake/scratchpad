// const body = document.body

// may append: strings, multiple things
// body.append('Hello World', 'bye)

// only append elements
// body.appendChild('hello world')
// const div = document.createElement('div')
//
// div.innerText = 'Hello World'
//
// div.textContent = 'Hello World'
// body.append(div)
// body.appendChild(div)
// const div = document.querySelector('div')
//  print textContent directly from HTML includes invisiable elements
// console.log(div.textContent)
// prints visible text
// console.log(div.innerText)

// add html elements
// const div = document.createElement('div')
// insecure
// div.innerHTML = '<strong>hello</strong'

// body.append(div)
const body = document.body
const div = document.querySelector('div')
const spanHi = document.querySelector('#hi')
const spanBye = document.querySelector('#bye')

// spanBye.remove()
// div.removeChild(spanBye)

// console.log(spanHi.getAttribute('id'))
// console.log(spanHi.getAttribute('title'))
// spanHi.setAttribute('id', 'somethingelse')
// spanBye.id = 'something'
// spanHi.removeAttribute('id')
// console.log(spanHi.dataset)
// console.log(spanHi.dataset.longName)
// spanHi.dataset.newName = 'hi'
// console.log(spanHi.dataset)
// spanHi.classList.add('newHi')
// spanHi.classList.remove('hi1')
// spanHi.classList.toggle('hi3')
//  auto add or remove based on 2nd arguement
// spanHi.classList.toggle('hi3', false)
// spanHi.classList.toggle('hi3', true)
// console.log(spanHi.classList)
spanHi.style.backgroundColor = 'red'
spanBye.style.display = 'block'
