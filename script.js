const divGrid = document.querySelector('.grid')

function generateGrid() {
  for (let r = 0; r < 16; r++) {
    for (let c = 0; c < 16; c++) {
      const gridSquare = document.createElement('div')
      gridSquare.setAttribute('class', 'grid-square')
      divGrid.appendChild(gridSquare)
    }
  }
}

generateGrid()
