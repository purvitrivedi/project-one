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
  let rotationNum = 0



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
        this.dimensions = this.dimensions.map((cell, index) => {
          return cell -= iRotate[index]
        })
        this.createShape()
        console.log(pos)
        this.rotateI.called = false
      } else {
        this.removeShape()
        this.dimensions = this.dimensions.map((cell, index) => {
          return cell += iRotate[index]
        })
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
        this.dimensions = this.dimensions.map((cell, index) => {
          return cell -= sRotate[index]
        })
        this.createShape()
        this.rotateS.called = false
      } else {
        this.removeShape()
        pos = pos + width
        this.dimensions = this.dimensions.map((cell, index) => {
          return cell += sRotate[index]
        })
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
        this.dimensions = this.dimensions.map((cell, index) => {
          return cell -= zRotate[index]
        })
        this.createShape()
        this.rotateZ.called = false
      } else {
        this.removeShape()
        this.dimensions = this.dimensions.map((cell, index) => {
          return cell += zRotate[index]
        })
        this.createShape()
        this.rotateZ.called = true
      }
    }
  }


  class L extends Tetrimino {
    constructor(name, dimensions, className) {
      super(name, dimensions, className)
    }

    rotateL() {
      if (rotationNum === 0) {
        this.removeShape()
        this.dimensions = this.dimensions.map((cell, index) => {
          return cell += lRotateFirst[index]
        })
        this.createShape()
        rotationNum++

      } else if (rotationNum === 1) {
        this.removeShape()
        this.dimensions = this.dimensions.map((cell, index) => {
          return cell += lRotateSecond[index]
        })
        this.createShape()
        rotationNum++
      } else if (rotationNum === 2) {
        this.removeShape()
        this.dimensions = this.dimensions.map((cell, index) => {
          return cell += lRotateThird[index]
        })
        this.createShape()
        rotationNum++
      } else {
        this.removeShape()
        this.dimensions = this.dimensions.map((cell, index) => {
          return cell += lRotateLast[index]
        })
        this.createShape()
        rotationNum = 0
      }
    }
  }



  class J extends Tetrimino {
    constructor(name, dimensions, className) {
      super(name, dimensions, className)
    }

    rotateJ() {
      if (rotationNum === 0) {
        this.removeShape()
        this.dimensions = this.dimensions.map((cell, index) => {
          return cell += jRotateFirst[index]
        })
        this.createShape()
        rotationNum++

      } else if (rotationNum === 1) {
        this.removeShape()
        this.dimensions = this.dimensions.map((cell, index) => {
          return cell += jRotateSecond[index]
        })
        this.createShape()
        rotationNum++
      } else if (rotationNum === 2) {
        this.removeShape()
        this.dimensions = this.dimensions.map((cell, index) => {
          return cell += jRotateThird[index]
        })
        this.createShape()
        rotationNum++
      } else {
        this.removeShape()
        this.dimensions = this.dimensions.map((cell, index) => {
          return cell += jRotateLast[index]
        })
        this.createShape()
        rotationNum = 0
      }
    }
  }

  class T extends Tetrimino {
    constructor(name, dimensions, className) {
      super(name, dimensions, className)
    }
    rotateT() {
      if (rotationNum === 0) {
        this.removeShape()
        this.dimensions = this.dimensions.map((cell, index) => {
          return cell += tRotateFirst[index]
        })
        this.createShape()
        rotationNum++

      } else if (rotationNum === 1) {
        this.removeShape()
        this.dimensions = this.dimensions.map((cell, index) => {
          return cell += tRotateSecond[index]
        })
        this.createShape()
        rotationNum++
      } else if (rotationNum === 2) {
        this.removeShape()
        this.dimensions = this.dimensions.map((cell, index) => {
          return cell += tRotateThird[index]
        })
        this.createShape()
        rotationNum++
      } else {
        this.removeShape()
        this.dimensions = this.dimensions.map((cell, index) => {
          return cell += tRotateLast[index]
        })
        this.createShape()
        rotationNum = 0
      }
    }
  }



  const oShape = [5, 6, 17, 18]

  const iShape = [4, 5, 6, 7]
  const iRotate = [2, 13, 24, 35]

  const sShape = [5, 6, 16, 17]
  const sRotate = [0, 0, -23, 1]

  const zShape = [4, 5, 17, 18]
  const zRotate = [13, 0, -11, -24]


  const lShape = [5, 6, 4, 16]
  const lRotateFirst = [0, -13, 13, 2]
  const lRotateSecond = [0, 11, -11, -24]
  const lRotateThird = [0, 13, -13, -2]
  const lRotateLast = [0, -11, 11, 24]


  const jShape = [5, 4, 6, 18]
  const jRotateFirst = [0, 13, -13, -24]
  const jRotateSecond = [0, -11, 11, -2]
  const jRotateThird = [0, -13, 13, 24]
  const jRotateLast = [0, 11, -11, 2]


  const tShape = [5, 6, 4, 17]
  const tRotateFirst = [0, -13, 13, -11]
  const tRotateSecond = [0, 11, -11, -13]
  const tRotateThird = [0, 13, -13, 11]
  const tRotateLast = [0, -11, 11, 13]


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

  const myArray = [o.name, i.name, s.name, z.name, l.name, j.name, t.name]


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
          s.rotateS()
          break
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

