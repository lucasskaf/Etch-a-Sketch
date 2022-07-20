const divGrid = document.querySelector('.grid')

function generateGrid() {
  for (let r = 0; r < 32; r++) {
    for (let c = 0; c < 32; c++) {
      const gridSquare = document.createElement('div')
      gridSquare.setAttribute('class', 'grid-square')
      divGrid.appendChild(gridSquare)

      gridSquare.addEventListener('mouseover', () => {
        gridSquare.style.backgroundColor = 'rgb(255, 0, 255)'
      })
    }
  }
}

function resetGrid() {
  const gridSquare = document.querySelectorAll('.grid-square')
  
  for(let i = 0; i < gridSquare.length; i++){
    gridSquare[i].style.backgroundColor = 'rgb(0, 0, 0)'
  }
}

generateGrid()

const resetButton = document.querySelector('#reset')

resetButton.addEventListener('click', () => {
  resetGrid()
})
