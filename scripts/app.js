function init() {


  // * DOM elements
  const grid = document.querySelector('.grid')
  const cells = []

  //* Grid Variables

  const width = 12
  const height = 20
  const cellCount = height * width

  // * Create Grid

  createCells()

  // * Game Variables
  let rotationNum = 0
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

    moveTetriminos = (e) => {
      switch (e.keyCode) {
        case 39:
          this.removeShape()
          console.log('should move right')
          this.dimensions = this.dimensions.map(cell => {
            return cell += 1
          })
          console.log(this.dimensions)
          break
        case 37:
          this.removeShape()
          console.log('should move left')
          this.dimensions = this.dimensions.map(cell => {
            return cell -= 1
          })
          break
        default:
          console.log('key')
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


  const tetriminos = ['o', 'i', 's', 'z', 'l', 'j', 't']

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
      if (i >= 228) {
        cell.classList.add('bottom')
      }
    }
  }


  function createNewShape() {
    const shape = tetriminos[Math.round(Math.random() * (tetriminos.length - 1))]
    let makeShape
    switch (shape) {
      case 'i':
        makeShape = new I('i', iShape, 'i-shape')
        break
      case 's':
        makeShape = new S('s', sShape, 's-shape')
        break
      case 'z':
        makeShape = new Z('z', zShape, 'z-shape')
        break
      case 'l':
        makeShape = new L('l', lShape, 'l-shape')
        break
      case 'j':
        makeShape = new J('j', jShape, 'j-shape')
        break
      case 't':
        makeShape = new T('t', tShape, 't-shape')
        break
      default:
        makeShape = new Tetrimino('o', oShape, 'o-shape')
    }
    fall(makeShape)
    return makeShape

  }

  const newTetrimino = createNewShape()

  function fall(makeShape) {
    makeShape.createShape()

    const timerId = setInterval(() => {
      makeShape.removeShape()
      makeShape.dimensions = makeShape.dimensions.map(cell => {
        return cell += width
      })
      makeShape.createShape()
      if (Math.max(...makeShape.dimensions) > 227) {
        clearInterval(timerId)
        blocked(makeShape.dimensions)
      }
    }, 200)

  }


  const bottomGrid = document.querySelectorAll('.bottom')

  function blocked(dimensions) {
    dimensions.forEach(cell => cells[cell].classList.add('blocked'))
    const isBlocked = regenerate()
    console.log(isBlocked)
    if (isBlocked) {
      // createNewShape()
    }
  }


  function regenerate() {
    console.log('regenerate function')
    const newArray = []

    for (let i = 0; i < bottomGrid.length; i++) {
      newArray.push(bottomGrid[i])
    }

    return newArray.some(element => element.classList.contains('blocked'))

  }



  function rotateTetriminos(event) {

    if (event.keyCode === 38) {
      switch (newTetrimino.name) {
        case 'i':
          newTetrimino.rotateI()
          break
        case 's':
          newTetrimino.rotateS()
          break
        case 'z':
          newTetrimino.rotateZ()
          break
        case 'l':
          newTetrimino.rotateL()
          break
        case 'j':
          newTetrimino.rotateJ()
          break
        case 't':
          newTetrimino.rotateT()
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