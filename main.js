const board = document.querySelector('#board')
const colors = ['BlueViolet', 'Crimson', 'SpringGreen', 'LightSeaGreen', 'DarkOrange', 'Khaki', 'DodgerBlue', 'Beige']
const SQUARES_NUMBER = 100// кол-во клеток поля

for (let i = 0; i < SQUARES_NUMBER; i++){
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', () => setColor(square))
  square.addEventListener('mouseleave', () => removeColor(square))

  board.append(square)
}

function setColor(element) {
  const color = getRandomColor()
  element.style.background = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
  element.style.boxShadow = `0 0 2px #000`
  element.style.background = '#1d1d1d'
}

function getRandomColor() {
  return colors [Math.floor(Math.random() * colors.length)]
}
