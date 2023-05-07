// making sure javascript is connected and assign box classes to an array
let boxes = Array.from(document.getElementsByClassName('box'))
let resetButton = document.getElementById('resetButton')
let playerText = document.getElementById('playerText')
console.log(boxes)
// making player moveslll
let O_Text = 'O'
let X_Text = 'X'
let currentPlayer = X_Text
// filling spaces with a null
let spaces = Array(9).fill(null)
console.log(spaces)