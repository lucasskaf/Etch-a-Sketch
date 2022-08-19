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

function drawColor(initialColor, colorValue){
  const gridSquare = document.querySelectorAll('.grid-square')

  for(let i = 0; i < gridSquare.length; i++){
    gridSquare[i].addEventListener('mouseenter', () => {
      if(isMousePressed){
        gridSquare[i].style.backgroundColor = colorValue
      }
    })
  }
}

let initialColor = `#FFFFFF`
const arrayOfColors = []

const divGrid = document.querySelector('.grid')

generateGrid(divGrid, initialColor)

const colorPicker = document.querySelector('#color-picker');
const resetButton = document.querySelector('#reset')
const gridSquare = document.querySelectorAll('.grid-square')
const eraser = document.querySelector('#eraser')
const pencil = document.getElementById('pencil')
const plusColor = document.getElementById('save-color')
const palette = document.getElementById('palette')

colorPicker.addEventListener('input', e => {
  drawColor(initialColor, colorPicker.value)
  console.log(e)
})

plusColor.addEventListener('click', () => {
  if(arrayOfColors.length <= 3){
    arrayOfColors.push(colorPicker.value)
    let newColorDiv = document.createElement('div')
    newColorDiv.setAttribute('id', `color-${arrayOfColors.length}`)

    palette.appendChild(newColorDiv)
  }
})

pencil.addEventListener('click', e => {
  pencil.classList.add('selected')
  eraser.classList.remove('selected')
  drawColor(initialColor, colorPicker.value)
})

eraser.addEventListener('click', () => {
  eraser.classList.add('selected')
  pencil.classList.remove('selected')
  drawColor(initialColor, initialColor)
})

resetButton.addEventListener('click', () => {
  resetGrid(initialColor)
})