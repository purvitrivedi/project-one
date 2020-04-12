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


  // * Create Grid
  createCells()


  // * Declaring Tetriminos

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
        // pos = pos + width
        this.dimensions = this.dimensions.map(cell => {
          return cell += width
        })
        console.log(pos)
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
          console.log(pos)
          break
        case 37:
          this.removeShape()
          console.log('should move left')
          this.dimensions = this.dimensions.map(cell => {
            return cell -= 1
          })
          break
          // case 38:
          //   console.log('should rotate')
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
        for (let i = 0; i < this.dimensions.length; i++) {
          this.dimensions[i] -= iRotate[i]
        }
        this.createShape()
        console.log(pos)
        this.rotateI.called = false
      } else {
        this.removeShape()
        for (let i = 0; i < this.dimensions.length; i++) {
          this.dimensions[i] += iRotate[i]
        }
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
        for (let i = 0; i < this.dimensions.length; i++) {
          this.dimensions[i] -= sRotate[i]
        }
        this.createShape()
        this.rotateS.called = false
      } else {
        this.removeShape()
        pos = pos + width
        for (let i = 0; i < this.dimensions.length; i++) {
          this.dimensions[i] += sRotate[i]
        }
        this.createShape()
        this.rotateS.called = true
      }
    }
  }


  class Z extends Tetrimino {
    constructor(name, dimensions, className) {
      super(name, dimensions, className)
    }

    rotateZ() {
      if (this.rotateZ.called) {
        this.removeShape()
        for (let i = 0; i < this.dimensions.length; i++) {
          this.dimensions[i] -= zRotate[i]
        }
        this.createShape()
        this.rotateZ.called = false
      } else {
        this.removeShape()
        pos = pos + width
        for (let i = 0; i < this.dimensions.length; i++) {
          this.dimensions[i] += zRotate[i]
        }
        this.createShape()
        this.rotateZ.called = true
      }
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



  const oShape = [5, 6, 17, 18]

  const iShape = [4, 5, 6, 7]
  const iRotate = [2, 13, 24, 35]

  const sShape = [5, 6, 16, 17]
  const sRotate = [0, 0, -23, 1]

  const zShape = [4, 5, 17, 18]
  const zRotate = [13, 0, -11, -24]




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

  // const myArray = [o.name, i.name, s.name, z.name, l.name, j.name, t.name]
  const myArray = [z.name]

  function generateTetrimino() {
    const newShape = myArray[Math.round(Math.random() * (myArray.length - 1))]
    console.log(newShape)
    switch (newShape) {
      case 'o':
        o.tetriminoFalling()
        break
      case 'i':
        i.tetriminoFalling()
        break
      case 's':
        s.tetriminoFalling()
        break
      case 'z':
        z.tetriminoFalling()
        break
      case 'l':
        l.tetriminoFalling()
        break
      case 'j':
        j.tetriminoFalling()
        break
      default:
        t.tetriminoFalling()
    }
    return newShape
  }


  const generated = generateTetrimino()


  function rotateTetriminos(event) {

    if (event.keyCode === 38) {
      switch (generated) {
        case 'i':
          i.rotateI()
          break
        case 's':
          break
          s.rotateS()
        case 'z':
          z.rotateZ()
          break
        case 'l':
          l.rotateL()
          break
        case 'j':
          j.rotateJ()
          break
        case 't':
          t.rotateT()
          break
        default:
          console.log('no rotation')
      }
    }

  }


  // * event handler

  document.addEventListener('keyup', rotateTetriminos)



}


window.addEventListener('DOMContentLoaded', init)

