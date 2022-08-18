let isMousePressed = false;

document.body.addEventListener('mousedown', () => {
  isMousePressed = true;
})

document.body.addEventListener('mouseup', () => {
  isMousePressed = false;
})

function generateGrid(divGrid, initialColor) {
  for (let r = 0; r < 32; r++) {
    for (let c = 0; c < 32; c++) {
      const gridSquare = document.createElement('div')
      gridSquare.setAttribute('class', 'grid-square')
      gridSquare.style.backgroundColor = initialColor;
      divGrid.appendChild(gridSquare)
    }
  }
}

function resetGrid(initialColor) {
  const gridSquare = document.querySelectorAll('.grid-square')
  
  for(let i = 0; i < gridSquare.length; i++){
    gridSquare[i].style.backgroundColor = initialColor;
  }
}

function hoverColor(initialColor, colorValue){
  const gridSquare = document.querySelectorAll('.grid-square')

  for(let i = 0; i < gridSquare.length; i++){
    gridSquare[i].addEventListener('mouseenter', () => {
      if(isMousePressed){
        gridSquare[i].style.backgroundColor = colorValue
      }
    })
  }
}

function changeColor(colorValue){
  const gridSquare = document.querySelectorAll('.grid-square')

  for(let i = 0; i < gridSquare.length; i++){
    gridSquare[i].addEventListener('click', () => {
      gridSquare[i].style.backgroundColor = colorValue
    })
  }
}

let initialColor = `#FFFFFF`

const divGrid = document.querySelector('.grid')

generateGrid(divGrid, initialColor)

const colorPicker = document.querySelector('#color-picker');
const resetButton = document.querySelector('#reset')
const gridSquare = document.querySelectorAll('.grid-square')
const eraser = document.querySelector('#eraser')
const pencil = document.getElementById('pencil')

// changeColor(colorPicker.value)

// colorPicker.addEventListener('input', () => {
//   color = colorPicker.value
// })

colorPicker.addEventListener('input', e => {
  hoverColor(initialColor, colorPicker.value)
  console.log(e)
})

pencil.addEventListener('click', e => {
  hoverColor(initialColor, colorPicker.value)
  // changeColor(colorPicker.value)
  console.log(e)
})

eraser.addEventListener('click', () => {
  hoverColor(initialColor, initialColor)
  // changeColor(initialColor)
})

resetButton.addEventListener('click', () => {
  resetGrid(initialColor)
})