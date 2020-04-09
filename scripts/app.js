function init() {


  // * DOM elements
  const grid = document.querySelector('.grid')
  const cells = []

  //* Grid Variables

  const width = 12
  const height = 20
  const cellCount = height * width


  // * Game Variables

  let tetriminoPosition = 5
  //*Functions


  function createCells() {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      grid.appendChild(cell)
      // cell.textContent = i
      cells.push(cell)
      if (i % 2 !== 0) {
        cell.classList.add('odd')
      }
    }
  }

  createCells()
  cells[tetriminoPosition].classList.add('gold')

  function tetriminoFalling(event) {

    // const x = tetriminoPosition % width
    // const y = Math.floor(tetriminoPosition / width)
    // console.log(y)

    const timerId = setInterval(() => {
      cells[tetriminoPosition].classList.remove('gold')
      tetriminoPosition += width
      cells[tetriminoPosition].classList.add('gold')


      if (tetriminoPosition > 227) clearInterval(timerId)

    }, 1000)
  }

  tetriminoFalling()

  function moveTetriminos(event) {
    cells[tetriminoPosition].classList.remove('gold')

    switch (event.keyCode) {
      case 39:
        console.log('should move right')
        tetriminoPosition++
        break
      case 37:
        console.log('should move left')
        tetriminoPosition--
        break
      default:
        console.log('invalid key')
    }

    cells[tetriminoPosition].classList.add('gold')
  }

  // * Event Listeners

  document.addEventListener('keyup', moveTetriminos)
  


}


window.addEventListener('DOMContentLoaded', init)

