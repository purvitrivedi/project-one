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
      })
    }

    removeShape() {
      this.dimensions.forEach(cell => {
        cells[cell].classList.remove(this.className)
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
      cell.id = `cell${i}`
      cell.textContent = i
      cells.push(cell)

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

      makeShape.removeShape()
      makeShape.dimensions = makeShape.dimensions.map(cell => {
        return cell += width
      })
      makeShape.createShape()

      if (Math.max(...makeShape.dimensions) > (cells.length - 12) || makeShape.dimensions.some(element => cells[element].classList.contains('occupied'))) {
        clearInterval(timerId)

        if (makeShape.dimensions.some(element => cells[element].classList.contains('occupied'))) {
          makeShape.removeShape()
          makeShape.dimensions = makeShape.dimensions.map(cell => {
            return cell -= width
          })
          makeShape.createShape()

        }

        makeShape.dimensions.forEach(element => {
          cells[element].classList.add('occupied')
        })
        clearLine()
        rotationNum = 0
        // createNewShape()
        
      }
    }, 200)

  }



  function clearLine() {
    blockedCells = document.querySelectorAll('.occupied')
    console.log(blockedCells)
    const blockedArray = []
    blockedCells.forEach(element => blockedArray.push(parseFloat(element.textContent)))
    console.log(blockedArray)
    const rowCheck = []
    for (let i = 0; i < blockedArray.length; i++) {
      if (blockedArray[i] % 12 === 0
        && blockedArray.includes(blockedArray[i] + 1)
        && blockedArray.includes(blockedArray[i] + 2)
        && blockedArray.includes(blockedArray[i] + 3)
        && blockedArray.includes(blockedArray[i] + 4)
        && blockedArray.includes(blockedArray[i] + 5)
        && blockedArray.includes(blockedArray[i] + 6)
        && blockedArray.includes(blockedArray[i] + 7)
        && blockedArray.includes(blockedArray[i] + 8)
        && blockedArray.includes(blockedArray[i] + 8)
        && blockedArray.includes(blockedArray[i] + 10)
        && blockedArray.includes(blockedArray[i] + 11)) {

        rowCheck.push(blockedArray[i])
        rowCheck.push(blockedArray[i] + 1)
        rowCheck.push(blockedArray[i] + 2)
        rowCheck.push(blockedArray[i] + 3)
        rowCheck.push(blockedArray[i] + 4)
        rowCheck.push(blockedArray[i] + 5)
        rowCheck.push(blockedArray[i] + 6)
        rowCheck.push(blockedArray[i] + 7)
        rowCheck.push(blockedArray[i] + 8)
        rowCheck.push(blockedArray[i] + 9)
        rowCheck.push(blockedArray[i] + 10)
        rowCheck.push(blockedArray[i] + 11)

      }
    }

    console.log(rowCheck)

    const clearRow = []
    for (let i = 0; i < rowCheck.length; i++) {
      clearRow.push(document.querySelector(`#cell${rowCheck[i]}`))
    }
    clearRow.forEach(element => element.classList.remove('occupied'))
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