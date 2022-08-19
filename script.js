let isMousePressed = false;

document.body.addEventListener('mousedown', () => {
  isMousePressed = true;
})

document.body.addEventListener('mouseup', () => {
  isMousePressed = false;
})

function generateGrid(divGrid, initialColor, size) {
  divGrid.style.width = `${size * 10}px`
  divGrid.style.height = `${size * 10}px`
  divGrid.style.setProperty('grid-template-columns', 'repeat(' + size + ', 1fr)')
  divGrid.style.setProperty('grid-template-rows', 'repeat(' + size + ', 1fr)')

  for (let r = 0; r < size; r++) { // 32
    for (let c = 0; c < size; c++) { // 32
      const gridSquare = document.createElement('div')
      gridSquare.setAttribute('class', 'grid-square')
      gridSquare.style.backgroundColor = initialColor;
      divGrid.appendChild(gridSquare)
    }
  }
}

function resetElementsGrid(divGrid){
  while(divGrid.firstChild){
    divGrid.removeChild(divGrid.firstChild)
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

const startButton = document.getElementById('start')
const size32Button = document.getElementById('size-32')
const size50Button = document.getElementById('size-50')
const sizeCustomButton = document.getElementById('size-custom')
const initialColorPicker = document.querySelector('#initial-color-selector')

let initialColor = `#FFFFFF`
initialColorPicker.value = initialColor
let canvasSize = 0
let oneCanvasOptionPressed = false

size32Button.addEventListener('click', () => {
  canvasSize = 32
  size32Button.classList.add('selected')
  size50Button.classList.remove('selected')
  sizeCustomButton.classList.remove('selected')

  // if(!oneCanvasOptionPressed){
  //   resetElementsGrid(divGrid)
  //   generateGrid(divGrid, initialColor, canvasSize)
  // }
  // else{
  //   oneCanvasOptionPressed = true
  //   generateGrid(divGrid, initialColor, canvasSize)
  // }
  
})

size50Button.addEventListener('click', () => {
  canvasSize = 50
  size50Button.classList.add('selected')
  size32Button.classList.remove('selected')
  sizeCustomButton.classList.remove('selected')

  // if(!oneCanvasOptionPressed){
  //   resetElementsGrid(divGrid)
  //   generateGrid(divGrid, initialColor, canvasSize)
  // }
  // else{
  //   oneCanvasOptionPressed = true
  //   generateGrid(divGrid, initialColor, canvasSize)
  // }
})

sizeCustomButton.addEventListener('click', () => {
  canvasSize = prompt('Please indicate size (only 1 number):')
  sizeCustomButton.classList.add('selected')
  size50Button.classList.remove('selected')
  size32Button.classList.remove('selected')

  // if(!oneCanvasOptionPressed){
  //   resetElementsGrid(divGrid)
  //   generateGrid(divGrid, initialColor, canvasSize)
  // }
  // else{
  //   oneCanvasOptionPressed = true
  //   generateGrid(divGrid, initialColor, canvasSize)
  // }
})

startButton.addEventListener('click', () => {
  const divGrid = document.querySelector('.grid')

  initialColor = initialColorPicker.value
  generateGrid(divGrid, initialColor, canvasSize)

  const modalContainer = document.getElementById('modal-container')
  const contentContainer = document.getElementById('content')

  modalContainer.style.setProperty('display', 'none')
  contentContainer.style.setProperty('display', 'flex')
})


const arrayOfColors = []
let colorPosition = 0

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
    newColorDiv.style.backgroundColor = colorPicker.value

    newColorDiv.addEventListener('click', () => {
      if(newColorDiv.getAttribute('id') == 'color-1'){
        colorPicker.value = arrayOfColors[0]
        drawColor(initialColor, colorPicker.value)
      }
      else if(newColorDiv.getAttribute('id') == 'color-2'){
        colorPicker.value = arrayOfColors[1]
        drawColor(initialColor, colorPicker.value)
      }
      else if(newColorDiv.getAttribute('id') == 'color-3'){
        colorPicker.value = arrayOfColors[2]
        drawColor(initialColor, colorPicker.value)
      }
      else if(newColorDiv.getAttribute('id') == 'color-4'){
        colorPicker.value = arrayOfColors[3]
        drawColor(initialColor, colorPicker.value)
      }
      
    })

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