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
  let newTetrimino
  let makeShapeCells
  let blockedCells
  const newArray = []

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
        cells[cell].classList.add('current')
      })
    }

    removeShape() {
      this.dimensions.forEach(cell => {
        cells[cell].classList.remove(this.className)
        cells[cell].classList.remove('current')
      })
    }

    moveTetriminos = (e) => {
      const x = [this.dimensions[0] % width, this.dimensions[3] % width]
      switch (e.keyCode) {
        case 39:
          this.removeShape()
          if (x[1] < width - 1) {
            this.dimensions = this.dimensions.map(cell => {
              return cell += 1
            })
          }
          break
        case 37:
          this.removeShape()
          if (x[0] > 0) {
            this.dimensions = this.dimensions.map(cell => {
              return cell -= 1
            })
          }
          break
        default:
          console.log('rotate')
      }

    }

  }


  class I extends Tetrimino {
    constructor(name, dimensions, className) {
      super(name, dimensions, className)
    }
    rotateI() {
      if (rotationNum === 1) {
        this.removeShape()
        this.dimensions = this.dimensions.map((cell, index) => {
          return cell -= iRotate[index]
        })
        this.createShape()
        rotationNum = 0
      } else {
        this.removeShape()
        this.dimensions = this.dimensions.map((cell, index) => {
          return cell += iRotate[index]
        })
        this.createShape()
        rotationNum++
      }
    }
  }


  class S extends Tetrimino {
    constructor(name, dimensions, className) {
      super(name, dimensions, className)
    }

    rotateS() {
      if (rotationNum === 1) {
        this.removeShape()
        this.dimensions = this.dimensions.map((cell, index) => {
          return cell -= sRotate[index]
        })
        this.createShape()
        rotationNum = 0
      } else {
        this.removeShape()
        this.dimensions = this.dimensions.map((cell, index) => {
          return cell += sRotate[index]
        })
        this.createShape()
        rotationNum++
      }
    }
  }


  class Z extends Tetrimino {
    constructor(name, dimensions, className) {
      super(name, dimensions, className)
    }

    rotateZ() {
      if (rotationNum === 1) {
        this.removeShape()
        this.dimensions = this.dimensions.map((cell, index) => {
          return cell -= zRotate[index]
        })
        this.createShape()
        rotationNum = 0
      } else {
        this.removeShape()
        this.dimensions = this.dimensions.map((cell, index) => {
          return cell += zRotate[index]
        })
        this.createShape()
        rotationNum++
      }
    }
  }


  class L extends Tetrimino {
    constructor(name, dimensions, className) {
      super(name, dimensions, className)
    }

    rotateL() {
      if (rotationNum === 1) {
        console.log('second rotation')
        this.removeShape()
        this.dimensions = this.dimensions.map((cell, index) => {
          return cell += lRotateSecond[index]
        })
        this.createShape()
        rotationNum++

      } else if (rotationNum === 2) {
        console.log('third rotation')
        this.removeShape()
        this.dimensions = this.dimensions.map((cell, index) => {
          return cell += lRotateThird[index]
        })
        this.createShape()
        rotationNum++

      } else if (rotationNum === 3) {
        console.log('fourth rotation')
        this.removeShape()
        this.dimensions = this.dimensions.map((cell, index) => {
          return cell += lRotateLast[index]
        })
        this.createShape()
        rotationNum = 0
      } else {
        console.log('first rotation')
        this.removeShape()
        this.dimensions = this.dimensions.map((cell, index) => {
          return cell += lRotateFirst[index]
        })
        this.createShape()
        rotationNum++

      }
      console.log(rotationNum)


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


  // const i = new I('i', iShape,'i-shape')


  const tetriminos = ['o', 'i', 's', 'z', 'l', 'j', 't']

  // const tetriminos = ['l']

  //*Functions

  function createCells() {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      grid.appendChild(cell)
      cell.textContent = i
      cells.push(cell)

      // if (i >= 0 && i < 12) cell.classList.add('row1')
      // if (i >= 12 && i < 24) cell.classList.add('row2')
      // if (i >= 24 && i < 36) cell.classList.add('row3')
      // if (i >= 36 && i < 48) cell.classList.add('row4')
      // if (i >= 48 && i < 60) cell.classList.add('row5')
      // if (i >= 60 && i < 72) cell.classList.add('row6')
      // if (i >= 72 && i < 84) cell.classList.add('row7')
      // if (i >= 84 && i < 96) cell.classList.add('row8')
      // if (i >= 96 && i < 108) cell.classList.add('row19')
      // if (i >= 108 && i < 120) cell.classList.add('row10')
      // if (i >= 120 && i < 132) cell.classList.add('row11')
      // if (i >= 132 && i < 144) cell.classList.add('row12')
      // if (i >= 144 && i < 156) cell.classList.add('row13')
      // if (i >= 156 && i < 168) cell.classList.add('row14')
      // if (i >= 168 && i < 180) cell.classList.add('row15')
      // if (i >= 180 && i < 192) cell.classList.add('row16')
      // if (i >= 192 && i < 204) cell.classList.add('row17')
      // if (i >= 204 && i < 216) cell.classList.add('row18')
      // if (i >= 216 && i < 228) cell.classList.add('row19')
      // if (i >= 228 && i < 240) cell.classList.add('row20')

      // if (i % 12 === 0) cell.classList.add('column1')
      // if (i % 12 === 1) cell.classList.add('column2')
      // if (i % 12 === 2) cell.classList.add('column3')
      // if (i % 12 === 3) cell.classList.add('column4')
      // if (i % 12 === 4) cell.classList.add('column5')
      // if (i % 12 === 5) cell.classList.add('column6')
      // if (i % 12 === 6) cell.classList.add('column7')
      // if (i % 12 === 7) cell.classList.add('column8')
      // if (i % 12 === 8) cell.classList.add('column9')
      // if (i % 12 === 9) cell.classList.add('column10')
      // if (i % 12 === 10) cell.classList.add('column11')
      // if (i % 12 === 11) cell.classList.add('column12')

      if (i % 2 !== 0) {
        cell.classList.add('odd')
      }
      if (i >= 228) {
        cell.classList.add('bottom')
      }
    }
  }



  // function cloneObj(obj) {
  //   return JSON.parse(JSON.stringify(obj))
  // }

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
    newTetrimino = makeShape
    fall(makeShape)
    return makeShape

  }

  createNewShape()
  const bottomGrid = document.querySelectorAll('.bottom')

  function fall(makeShape) {
    makeShape.createShape()
    const timerId = setInterval(() => {
      makeShapeCells = document.querySelectorAll('.current')

      makeShape.removeShape()
      makeShape.dimensions = makeShape.dimensions.map(cell => {
        return cell += width
      })
      makeShape.createShape()

      if (Math.max(...makeShape.dimensions) > (cells.length - 12) || makeShape.dimensions.some(element => cells[element].classList.contains('blocked'))) {
        clearInterval(timerId)

        if (makeShape.dimensions.some(element => cells[element].classList.contains('blocked'))) {
          makeShape.removeShape()
          makeShape.dimensions = makeShape.dimensions.map(cell => {
            return cell -= width
          })
          makeShape.createShape()
          console.log(makeShape.dimensions)

        }

        makeShape.dimensions.forEach(element => {
          cells[element].classList.add('blocked')
        })
        rotationNum = 0
        // createNewShape()
      }
    }, 50)

  }



  // function clearAll() {
  //   console.log(cells)
  // }

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