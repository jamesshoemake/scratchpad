// const grandparent = document.getElementById('grandparent-id')
// const grandparent = document.querySelector('#grandparent-id')
// const grandparent = document.querySelector('.grandparent')
// console.log(grandparent)
// changeColor(grandparent)

// getElementsByClassName returns a collection
// converting to an array allows for forEach
// const parents = Array.from(document.getElementsByClassName('parent'))

// query selector selects first element that match the selector
// const parent = document.querySelector('.parent')
// changeColor(parent)
// querySelectorAll returns a node list which has forEach method
// const parents = document.querySelectorAll('.parent')
// parents.forEach(changeColor)

// children
// const parents = Array.from(grandparent.children)
// parents.forEach(changeColor)

// const parentOne = parents[0]
// const children = parentOne.children

// const childOne = grandparent.querySelector('.child')
// const children = grandparent.querySelectorAll('.child')
// changeColor(children[0])
// changeColor(childOne)
// children.forEach(changeColor)

// moving up tree
// const childOne = document.querySelector('#childOne')
// const parent = childOne.parentElement
// const grandParent = parent.parentElement
// changeColor(parent)
// changeColor(grandParent)

// grand parent from childOne
// const grandParent = childOne.closest('.grandparent')
// changeColor(grandParent)

// siblings
// const childOne = document.querySelector('#childOne')
// const childTwo = childOne.nextElementSibling
// changeColor(childTwo)
// changeColor(childTwo.previousElementSibling)

function changeColor(element) {
  element.style.backgroundColor = '#333'
}
