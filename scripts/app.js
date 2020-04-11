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
      document.addEventListener('keyup', this.moveTetriminos)

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

    tetriminoFalling() {
      this.createShape()
      const timerId = setInterval(() => {
        this.removeShape()
        this.dimensions = this.dimensions.map(cell => {
          return cell += width
        })
        this.createShape()
        if (Math.max(...this.dimensions) > 227) clearInterval(timerId)

      }, 500)

    }

    moveTetriminos = (e) => {
      switch (e.keyCode) {
        case 39:
          this.removeShape()
          console.log('should move right')
          this.dimensions = this.dimensions.map(cell => {
            return cell += 1
          })
          break
        case 37:
          this.removeShape()
          console.log('should move left')
          this.dimensions = this.dimensions.map(cell => {
            return cell -= 1
          })
          break
          // case 38:
          //   console.log('hi')
          //   if (this.tetriminoFalling === s.tetriminoFalling) this.rotateS()
          //   else if (this.tetriminoFalling === i.tetriminoFalling) this.rotateI()
          //   else console.log('no')

        // break
        default:
          console.log('invalid key')
      }

    }


  }

  class I extends Tetrimino {
    constructor(name, dimensions, className) {
      super(name, dimensions, className)
    }
    rotateI() {
      if (this.rotateI.called) {
        this.removeShape()
        this.dimensions = iShape
        this.createShape()
        this.rotateI.called = false
      } else {
        this.removeShape()
        pos = pos + width
        this.dimensions = [pos - width, pos, pos + width, pos + width * 2]
        this.createShape()
        this.rotateI.called = true
      }
    }
  }


  class S extends Tetrimino {
    constructor(name, dimensions, className) {
      super(name, dimensions, className)
    }

    rotateS() {
      if (this.rotateS.called) {
        this.removeShape()
        this.dimensions = sShape
        this.createShape()
        this.rotateS.called = false
      } else {
        this.removeShape()
        pos = pos + width
        this.dimensions = [pos, pos - width, pos + 1, pos + 1 + width]
        this.createShape()
        this.rotateS.called = true
      }
    }

    // rotateFirst() {

    //   this.removeShape()
    //   pos = pos + width
    //   this.dimensions = [pos, pos - width, pos + 1, pos + 1 + width]
    //   this.createShape()
    // }

    // rotateSecond() {
    //   this.removeShape()
    //   this.dimensions = sShape
    //   this.createShape()
    // }
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


  const oShape = [pos, pos + 1, pos + width, pos + width + 1]
  const iShape = [pos, pos - 1, pos - 2, pos + 1]
  const sShape = [pos, pos + 1, pos + width, pos + width - 1]
  const zShape = [pos, pos - 1, pos + width, pos + width + 1]
  const lShape = [pos, pos - 1 + width, pos - 1, pos + 1]
  const jShape = [pos, pos - 1, pos + 1, pos + 1 + width]
  const tShape = [pos, pos + width, pos - 1, pos + 1]

  const o = new Tetrimino('o', oShape, 'o-shape')
  const i = new I('i', iShape, 'i-shape')
  const s = new S('s', sShape, 's-shape')
  const z = new Z('z', zShape, 'z-shape')
  const l = new L('l', lShape, 'l-shape')
  const j = new J('j', jShape, 'j-shape')
  const t = new T('t', tShape, 't-shape')



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

  const myArray = ['i', 's']


  function generate() {
    const newShape = myArray[Math.round(Math.random() * (myArray.length - 1))]
    if (newShape === 'i') {
      i.tetriminoFalling()
      console.log(newShape)
    } else {
      s.tetriminoFalling()
      console.log(newShape)
    }
    return newShape
  }


  const generated =  generate()

  function rotateTetriminos(event) {

    if (event.keyCode === 38) {
      if (generated === 'i') {
        i.rotateI()
      } else {
        s.rotateS()
      }


    }

  }



  // * event handler

  document.addEventListener('keyup', rotateTetriminos)



}


window.addEventListener('DOMContentLoaded', init)

