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










  createCells()


  // * Tetriminos

  class Tetrimino {
    constructor(name, dimensions, className) {
      this.name = name
      this.dimensions = dimensions
      this.className = className

    }
    createShape() {
      this.dimensions.forEach(cell => {
        cells[cell].classList.add(this.className)
      })
    }

    removeShape() {
      this.dimensions.forEach(cell => {
        cells[cell].classList.remove(this.className)
      })
    }

  }

  class I extends Tetrimino {
    constructor(name, dimensions, className) {
      super(name, dimensions, className)
    }

    rotate() {
      this.removeShape()
      pos = pos + width
      this.dimensions = [pos - width, pos, pos + width, pos + width * 2]

      this.createShape()

    }
  }


  class S extends Tetrimino {
    constructor(name, dimensions, className) {
      super(name, dimensions, className)
    }

    rotateFirst() {
      this.removeShape()
      pos = pos + width
      this.dimensions = [pos, pos - width, pos + 1, pos + 1 + width]

      this.createShape()
    }

    rotateSecond() {
      this.removeShape()
      this.dimensions = sShape
      this.createShape()
    }
  }


  class Z extends Tetrimino {
    constructor(name, dimensions, className) {
      super(name, dimensions, className)
    }

    rotateFirst() {
      this.removeShape()
      pos = pos + width
      this.dimensions = [pos, pos + width, pos + 1, pos + 1 - width]
      this.createShape()
    }

    rotateSecond() {
      this.removeShape()
      this.dimensions = zShape
      this.createShape()
    }
  }


  class L extends Tetrimino {
    constructor(name, dimensions, className) {
      super(name, dimensions, className)
    }

    rotateFirst() {
      this.removeShape()
      pos = pos + width
      this.dimensions = [pos, pos - width, pos + width, pos + 1 + width]
      this.createShape()
    }

    rotateSecond() {
      this.removeShape()
      this.dimensions = [pos, pos - 1, pos + 1, pos - width + 1]
      this.createShape()
    }

    rotateThird() {
      this.removeShape()
      this.dimensions = [pos, pos - width, pos + width, pos - width - 1]
      this.createShape()
    }

    rotateFinal() {
      pos = pos - width
      this.removeShape()
      this.dimensions = lShape
      this.createShape()
    }
  }


  class J extends Tetrimino {
    constructor(name, dimensions, className) {
      super(name, dimensions, className)
    }
    rotateFirst() {
      this.removeShape()
      pos = pos + width
      this.dimensions = [pos, pos - width, pos + width, pos - width + 1]
      this.createShape()
    }

    rotateSecond() {
      this.removeShape()
      this.dimensions = [pos, pos - 1, pos + 1, pos - width - 1]
      this.createShape()
    }


    rotateThird() {
      this.removeShape()
      this.dimensions = [pos, pos - width, pos + width, pos + width - 1]
      this.createShape()
    }

    rotateFinal() {
      pos = pos - width
      this.removeShape()
      this.dimensions = jShape
      this.createShape()
    }
  }

  class T extends Tetrimino {
    constructor(name, dimensions, className) {
      super(name, dimensions, className)
    }


    rotateFirst() {
      this.removeShape()
      pos = pos + width
      this.dimensions = [pos, pos - width, pos + width, pos + 1]
      this.createShape()
    }

    rotateSecond() {
      this.removeShape()
      this.dimensions = [pos, pos - width, pos + 1, pos - 1]
      this.createShape()
    }


    rotateThird() {
      this.removeShape()
      this.dimensions = [pos, pos - width, pos + width, pos - 1]
      this.createShape()
    }

    rotateFinal() {
      pos = pos - width
      this.removeShape()
      this.dimensions = tShape
      this.createShape()
    }
  }


  let oShape = [pos, pos + 1, pos + width, pos + width + 1]
  const iShape = [pos, pos - 1, pos - 2, pos + 1]
  const sShape = [pos, pos + 1, pos + width, pos + width - 1]
  const zShape = [pos, pos - 1, pos + width, pos + width + 1]
  const lShape = [pos, pos - 1 + width, pos - 1, pos + 1]
  const jShape = [pos, pos - 1, pos + 1, pos + 1 + width]
  const tShape = [pos, pos + width, pos - 1, pos + 1]



  let o = new Tetrimino('o', oShape, 'o-shape')
  const i = new I('i', iShape, 'i-shape')
  const s = new S('s', sShape, 's-shape')
  const z = new Z('z', zShape, 'z-shape')
  const l = new L('l', lShape, 'l-shape')
  const j = new J('j', jShape, 'j-shape')
  const t = new T('t', tShape, 't-shape')

 
  // o.createShape()

  // cells[pos].classList.add('gold-shape')












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


  function tetriminoFalling() {
    o.createShape()

    const timerId = setInterval(() => {
      o.removeShape()
      oShape = oShape.map(cell => {
        return cell = cell + width
      })
      o = new Tetrimino('o', oShape, 'o-shape')
      console.log(oShape)
      o.createShape()
      // cells[pos].classList.add('gold-shape')


      if (Math.max(...oShape) > 227) clearInterval(timerId)

    }, 500)
  }

  tetriminoFalling()



  // const myArray = [1,2,3,4]
  // console.log(Math.max(...myArray))

  function moveTetriminos(event) {
    cells[pos].classList.remove('gold-shape')

    switch (event.keyCode) {
      case 39:
        console.log('should move right')
        pos++
        break
      case 37:
        console.log('should move left')
        pos--
        break
      default:
        console.log('invalid key')
    }

    // cells[pos].classList.add('gold-shape')
  }

  // * Event Listeners

  // document.addEventListener('keyup', moveTetriminos)






}


window.addEventListener('DOMContentLoaded', init)

