const divGrid = document.querySelector('.grid')
const initialColor = `#000000`

function generateGrid() {
  for (let r = 0; r < 32; r++) {
    for (let c = 0; c < 32; c++) {
      const gridSquare = document.createElement('div')
      gridSquare.setAttribute('class', 'grid-square')
      gridSquare.style.backgroundColor = initialColor;
      divGrid.appendChild(gridSquare)
    }
  }
}

function resetGrid() {
  const gridSquare = document.querySelectorAll('.grid-square')
  
  for(let i = 0; i < gridSquare.length; i++){
    gridSquare[i].style.backgroundColor = initialColor;
  }
}

function changeColor(colorValue){
  const gridSquare = document.querySelectorAll('.grid-square')

  for(let i = 0; i < gridSquare.length; i++){
    gridSquare[i].addEventListener('mouseover', () => {
      gridSquare[i].style.backgroundColor = colorValue
    })
  }
}

generateGrid()

let colorPicker = document.querySelector('#color-picker');
const resetButton = document.querySelector('#reset')

resetButton.addEventListener('click', () => {
  resetGrid()
})

colorPicker.addEventListener('input', () => {
  changeColor(colorPicker.value)
})
