function init() {


  // * DOM elements
  const grid = document.querySelector('.grid')
  const cells = []

  //* Grid Variables

  const width = 12
  const height = 20
  const cellCount = height * width


  // * Game Variables

  let pos = 5

  //*Functions


  function createCells() {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      grid.appendChild(cell)
      cell.textContent = i
      cells.push(cell)
      if (i % 2 !== 0) {
        cell.classList.add('odd')
      }
    }
  }

  createCells()
  // cells[pos].classList.add('gold')

  function tetriminoFalling(event) {

    // const x = tetriminoPosition % width
    // const y = Math.floor(tetriminoPosition / width)
    // console.log(y)

    const timerId = setInterval(() => {
      cells[pos].classList.remove('gold')
      pos += width
      cells[pos].classList.add('gold')


      if (pos > 227) clearInterval(timerId)

    }, 1000)
  }

  // tetriminoFalling()

  function moveTetriminos(event) {
    cells[pos].classList.remove('gold')

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

    cells[pos].classList.add('gold')
  }

  // * Event Listeners

  document.addEventListener('keyup', moveTetriminos)



  // const tetriminos = [
  //   {
  //     name: 'o',
  //     width: 

  //   }
  // ]

  // // * o shape work
  // const square = [pos, pos + 1, pos + width, pos + width + 1]

  // square.forEach(cell => {
  //   cells[cell].id = 'o-shape'
  // })



  // // * l shape work

  // const line = [pos, pos - 1, pos - 2, pos + 1]


  // pos = pos + width
  // line[0] = pos - width
  // line[1] = pos
  // line[2] = pos + width 
  // line[3] = pos + width * 2


  // line.forEach(cell => {
  //   cells[cell].id = 'i-shape'
  // })






  // // * s shape work

  // const s = [pos, pos + 1, pos + width, pos + width - 1]

  // pos = pos + width
  // s[1] = pos - width
  // s[2] = pos + 1
  // s[3] = pos + 1 + width

  // s.forEach(cell => {
  //   cells[cell].id = 's-shape'
  // })





  // // * z shape work

  // const z = [pos, pos - 1, pos + width, pos + width + 1]

  // pos = pos + width
  // z[0] = pos
  // z[1] = pos + width
  // z[2] = pos + 1
  // z[3] = pos + 1 - width


  // z.forEach(cell => {
  //   cells[cell].id = 'z-shape'
  // })





  // * l shape work

  // // * start point
  // const l = [pos, pos - 1 + width, pos - 1, pos + 1]

  // //* first rotation
  // pos = pos + width
  // l[0] = pos
  // l[1] = pos - width
  // l[2] = pos + width
  // l[3] = pos + width + 1


  // //* second rotation

  // l[0] = pos
  // l[1] = pos - 1
  // l[2] = pos + 1
  // l[3] = pos - width + 1

  // //* third rotation

  // l[0] = pos
  // l[1] = pos - width
  // l[2] = pos + width
  // l[3] = pos - width - 1

  // l.forEach(cell => {
  //   cells[cell].id = 'l-shape'
  // })


  // // * j shape work
  // const j = [pos, pos - 1, pos + 1, pos + 1 + width]

  // //* first rotation
  // pos = pos + width
  // j[0] = pos
  // j[1] = pos - width
  // j[2] = pos + width
  // j[3] = pos - width + 1


  // // //* second rotation

  // j[0] = pos
  // j[1] = pos - 1
  // j[2] = pos + 1
  // j[3] = pos - width - 1

  // //* third rotation

  // j[0] = pos
  // j[1] = pos - width
  // j[2] = pos + width
  // j[3] = pos + width - 1


  // j.forEach(cell => {
  //   cells[cell].id = 'j-shape'

  // })




  // // * t shape work

  // const t = [pos, pos + width ,pos - 1, pos + 1 ]

  // //* first rotation
  // pos = pos + width
  // t[0] = pos
  // t[1] = pos - width
  // t[2] = pos + width
  // t[3] = pos + 1


  // // //* second rotation

  // t[1] = pos - width
  // t[2] = pos + 1
  // t[3] = pos - 1

  // //* third rotation

  
  // t[1] = pos - width
  // t[2] = pos + width
  // t[3] = pos - 1

  // t.forEach(cell => {
  //   cells[cell].id = 't-shape'
  // })


  cells[pos].id = 'gold-shape'






}


window.addEventListener('DOMContentLoaded', init)

