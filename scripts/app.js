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


  // * Dimensions of all the shapes and their rotations 

  const oShape = [5, 6, 17, 18]


  const iShape = [5, 4, 6, 7]
  const iRotate = [0, -11, 11, 22]

  const iRotateLeft = [0, -13, 10, 21]
  const iRotateLeftBack = [1, -12, 11, 22]

  const iRotateRight = [0, -11, 14, 27]
  const iRotateRightBack = [0, -11, 14, 27]



  // const iRotateRight = [12, -1, -14,-27]

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

  class O extends Tetrimino {
    constructor(name, dimensions, className) {
      super(name, dimensions, className)
    }

    moveTetriminosO(keycode) {
      const x = [this.dimensions[0] % width, this.dimensions[3] % width]
      switch (keycode) {
        case 39:
          this.removeShape()
          if (x[1] < width - 1) {
            this.dimensions = this.dimensions.map(cell => {
              return cell += 1
            })
          }
          this.createShape()
          break
        case 37:
          this.removeShape()
          if (x[0] > 0) {
            this.dimensions = this.dimensions.map(cell => {
              return cell -= 1
            })
          }
          this.createShape()
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
        console.log('second rotation')
        if (Math.max(...this.dimensions) % 12 >= 10) {
          console.log('i rotation right wall')
          this.removeShape()
          this.dimensions = this.dimensions.map((cell, index) => {
            return cell = cell - iRotateRight[index]
          })
          this.createShape()
          rotationNum = 3
          console.log(rotationNum)
          return
        }
        if (Math.max(...this.dimensions) % 12 === 0) {
          console.log('i rotation left')
          this.removeShape()
          this.dimensions = this.dimensions.map((cell, index) => {
            return cell = cell - iRotateLeft[index]

          })
          this.createShape()
          rotationNum++
          console.log(rotationNum)

        } else {
          console.log('regular horizontal')
          this.removeShape()
          this.dimensions = this.dimensions.map((cell, index) => {
            return cell -= iRotate[index]
          })
          this.createShape()
          rotationNum = 0
        }

      } else if (rotationNum === 2) {
        console.log('iRotation left back')
        if (Math.min(...this.dimensions) <= 11) return
        if (Math.max(...this.dimensions) > 191) return
        this.removeShape()
        this.dimensions = this.dimensions.map((cell, index) => {
          return cell += iRotateLeftBack[index]
        })
        this.createShape()
        rotationNum--

      } else if (rotationNum === 3) {
        console.log('iRotation right back')
        this.removeShape()
        this.dimensions = this.dimensions.map((cell, index) => {
          return cell += iRotateRightBack[index]
        })
        this.createShape()
        rotationNum -= 2

      } else {
        console.log('first rotation')
        if (Math.min(...this.dimensions) <= 11) return
        if (Math.max(...this.dimensions) > 191) return
        this.removeShape()
        this.dimensions = this.dimensions.map((cell, index) => {
          return cell += iRotate[index]
        })
        this.createShape()
        rotationNum++
      }
    }
    moveTetriminosI(keycode) {
      const x = [this.dimensions[0] % width, this.dimensions[3] % width, this.dimensions[1] % width, this.dimensions[2] % width]
      switch (keycode) {
        case 39:
          this.removeShape()
          if (x[1] < width - 1 && x[2] < width - 1 && x[0] < width - 1) {
            this.dimensions = this.dimensions.map(cell => {
              return cell += 1
            })
          }
          this.createShape()
          break
        case 37:
          this.removeShape()
          if (x[0] > 0 && x[1] > 0 && x[2] > 0) {
            this.dimensions = this.dimensions.map(cell => {
              return cell -= 1
            })
          }
          this.createShape()
          break
        default:
          console.log('rotate')
      }

    }



  }


  class S extends Tetrimino {
    constructor(name, dimensions, className) {
      super(name, dimensions, className)
    }

    rotateS() {
      if (Math.min(...this.dimensions) <= 11) return
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

    moveTetriminosS(keycode) {
      const x = [this.dimensions[2] % width, this.dimensions[1] % width]
      switch (keycode) {
        case 39:

          this.removeShape()
          if (x[1] < width - 1) {
            this.dimensions = this.dimensions.map(cell => {
              return cell += 1
            })
          }
          this.createShape()
          break
        case 37:
          this.removeShape()
          if (x[0] > 0) {
            this.dimensions = this.dimensions.map(cell => {
              return cell -= 1
            })
          }
          this.createShape()
          break
        default:
          console.log('rotate')
      }

    }



  }


  class Z extends Tetrimino {
    constructor(name, dimensions, className) {
      super(name, dimensions, className)
    }

    rotateZ() {
      if (Math.min(...this.dimensions) <= 11) return
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
    moveTetriminosZ(keycode) {
      const x = [this.dimensions[0] % width, this.dimensions[3] % width]
      switch (keycode) {
        case 39:
          this.removeShape()
          if (x[1] < width - 1) {
            this.dimensions = this.dimensions.map(cell => {
              return cell += 1
            })
          }
          this.createShape()
          break
        case 37:
          this.removeShape()
          if (x[0] > 0) {
            this.dimensions = this.dimensions.map(cell => {
              return cell -= 1
            })
          }
          this.createShape()
          break
        default:
          console.log('rotate')
      }

    }



  }


  class L extends Tetrimino {
    constructor(name, dimensions, className) {
      super(name, dimensions, className)
    }

    rotateL() {
      if (rotationNum === 1) {
        if (Math.min(...this.dimensions) % width === 0) return
        this.removeShape()
        this.dimensions = this.dimensions.map((cell, index) => {
          return cell += lRotateSecond[index]
        })
        this.createShape()
        rotationNum++

      } else if (rotationNum === 2) {
        if (Math.max(...this.dimensions) > 215) return
        // console.log('third rotation')
        this.removeShape()
        this.dimensions = this.dimensions.map((cell, index) => {
          return cell += lRotateThird[index]
        })
        this.createShape()
        rotationNum++

      } else if (rotationNum === 3) {
        if (Math.max(...this.dimensions) % width === 11) return
        // console.log('fourth rotation')
        this.removeShape()
        this.dimensions = this.dimensions.map((cell, index) => {
          return cell += lRotateLast[index]
        })
        this.createShape()
        rotationNum = 0
      } else {
        if (Math.min(...this.dimensions) <= 11) return
        // console.log('first rotation')
        this.removeShape()
        this.dimensions = this.dimensions.map((cell, index) => {
          return cell += lRotateFirst[index]
        })
        this.createShape()
        rotationNum++

      }
    }

    moveTetriminosL(keycode) {
      const x = [this.dimensions[2] % width, this.dimensions[1] % width, this.dimensions[3] % width]
      switch (keycode) {
        case 39:
          this.removeShape()
          if (x[1] < width - 1 && x[2] < width - 1) {
            this.dimensions = this.dimensions.map(cell => {
              return cell += 1
            })
          }
          this.createShape()
          break
        case 37:
          this.removeShape()
          if (x[0] > 0 && x[1] > 0 && x[2] > 0) {
            this.dimensions = this.dimensions.map(cell => {
              return cell -= 1
            })
          }
          this.createShape()
          break
        default:
          console.log('rotate')
      }



    }

  }



  class J extends Tetrimino {
    constructor(name, dimensions, className) {
      super(name, dimensions, className)
    }

    rotateJ() {
      if (rotationNum === 0) {
        if (Math.min(...this.dimensions) <= 11) return
        if (Math.max(...this.dimensions) > 215) return
        this.removeShape()
        this.dimensions = this.dimensions.map((cell, index) => {
          return cell += jRotateFirst[index]
        })
        this.createShape()
        rotationNum++

      } else if (rotationNum === 1) {
        if (Math.min(...this.dimensions) % width === 0) return
        this.removeShape()
        this.dimensions = this.dimensions.map((cell, index) => {
          return cell += jRotateSecond[index]
        })
        this.createShape()
        rotationNum++
      } else if (rotationNum === 2) {
        if (Math.max(...this.dimensions) > 215) return
        this.removeShape()
        this.dimensions = this.dimensions.map((cell, index) => {
          return cell += jRotateThird[index]
        })
        this.createShape()
        rotationNum++
      } else {
        if (Math.max(...this.dimensions) % width === 11) return
        this.removeShape()
        this.dimensions = this.dimensions.map((cell, index) => {
          return cell += jRotateLast[index]
        })
        this.createShape()
        rotationNum = 0
      }
    }




    moveTetriminosJ(keycode) {
      const x = [this.dimensions[2] % width, this.dimensions[1] % width, this.dimensions[3] % width]
      switch (keycode) {
        case 39:
          this.removeShape()
          if (x[1] < width - 1 && x[2] < width - 1) {
            this.dimensions = this.dimensions.map(cell => {
              return cell += 1
            })
          }
          this.createShape()
          break
        case 37:
          this.removeShape()
          if (x[0] > 0 && x[1] > 0 && x[2] > 0) {
            this.dimensions = this.dimensions.map(cell => {
              return cell -= 1
            })
          }
          this.createShape()
          break
        default:
          console.log('rotate')
      }

    }
  }

  class T extends Tetrimino {
    constructor(name, dimensions, className) {
      super(name, dimensions, className)
    }
    rotateT() {
      if (rotationNum === 0) {
        if (Math.min(...this.dimensions) <= 11) return
        this.removeShape()
        this.dimensions = this.dimensions.map((cell, index) => {
          return cell += tRotateFirst[index]
        })
        this.createShape()
        rotationNum++

      } else if (rotationNum === 1) {
        if (Math.min(...this.dimensions) % width === 0) return
        this.removeShape()
        this.dimensions = this.dimensions.map((cell, index) => {
          return cell += tRotateSecond[index]
        })
        this.createShape()
        rotationNum++
      } else if (rotationNum === 2) {
        if (Math.max(...this.dimensions) > 215) return
        this.removeShape()
        this.dimensions = this.dimensions.map((cell, index) => {
          return cell += tRotateThird[index]
        })
        this.createShape()
        rotationNum++
      } else {
        if (Math.max(...this.dimensions) % width === 11) return
        this.removeShape()
        this.dimensions = this.dimensions.map((cell, index) => {
          return cell += tRotateLast[index]
        })
        this.createShape()
        rotationNum = 0
      }
    }

    moveTetriminosT(keycode) {
      const x = [this.dimensions[2] % width, this.dimensions[1] % width, this.dimensions[3] % width]
      switch (keycode) {
        case 39:
          this.removeShape()
          if (x[1] < width - 1 && x[2] < width - 1 && x[0] < width - 1) {
            this.dimensions = this.dimensions.map(cell => {
              return cell += 1
            })
          }
          this.createShape()
          break
        case 37:
          this.removeShape()
          if (x[0] > 0 && x[1] > 0 && x[2] > 0) {
            this.dimensions = this.dimensions.map(cell => {
              return cell -= 1
            })
          }
          this.createShape()
          break
        default:
          console.log('rotate')
      }

    }

  }


  // const tetriminos = ['o', 'i', 's', 'z', 'l', 'j', 't']

  const tetriminos = ['i']

  //*Functions

  function createCells() {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      grid.appendChild(cell)
      cell.id = `cell${i}`
      cell.textContent = i
      cells.push(cell)
      if (i >= 0 && i < 12) {
        cell.classList.add('top')
      }
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
        makeShape = new O('o', oShape, 'o-shape')
    }
    newTetrimino = makeShape
    fall(makeShape)
    return makeShape

  }

  createNewShape()


  function fall(makeShape) {
    makeShape.createShape()
    const timerId = setInterval(() => {

      makeShape.removeShape()
      makeShape.dimensions = makeShape.dimensions.map(cell => {
        return cell += width
      })
      makeShape.createShape()

      if (Math.max(...makeShape.dimensions) > (cells.length - 13) || makeShape.dimensions.some(element => cells[element].classList.contains('occupied'))) {
        clearInterval(timerId)
        checkOccupiedCells(makeShape.dimensions)
        clearLine()
        if (makeShape.dimensions.some(element => cells[element].classList.contains('top'))) return
        rotationNum = 0
        createNewShape()
      }
    }, 1500)

  }


  function checkOccupiedCells(dimensions) {
    if (dimensions.some(element => cells[element].classList.contains('occupied'))) {
      newTetrimino.removeShape()
      newTetrimino.dimensions = newTetrimino.dimensions.map(cell => {
        return cell -= width
      })
      newTetrimino.createShape()
    }
    newTetrimino.dimensions.map(element => {
      cells[element].classList.add('occupied')
    })
    newTetrimino.dimensions.map(element => {
      cells[element].classList.remove(newTetrimino.className)
    })
  }



  function clearLine() {
    blockedCells = document.querySelectorAll('.occupied')
    const blockedArray = []
    blockedCells.forEach(element => blockedArray.push(parseFloat(element.textContent)))
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
    const clearRow = []
    for (let i = 0; i < rowCheck.length; i++) {
      clearRow.push(document.querySelector(`#cell${rowCheck[i]}`))
    }

    clearRow.forEach(element => element.classList.remove('occupied'))

    blockedRowsDown()
  }


  function blockedRowsDown() {
    let blockedDivs = document.querySelectorAll('.occupied')
    blockedDivs = document.querySelectorAll('.occupied')
    const blockedCells = []
    blockedDivs.forEach(element => blockedCells.push(parseFloat(element.textContent)))

    const blockedRowArrays = []


    let rowStart = []
    for (let i = 0; i < blockedCells.length; i++) {
      if (blockedCells[i] !== 0) {
        rowStart.push(blockedCells[i] - blockedCells[i] % 12)
      }
    }
    rowStart = rowStart.filter((num, index) => {
      return rowStart.indexOf(num) === index
    })


    for (let i = 0; i < rowStart.length; i++) {
      let blockedRow = []
      for (let j = 0; j < 12; j++) {
        blockedRow.push(document.querySelector(`#cell${rowStart[i] + j}`))
      }
      blockedRow = blockedRow.filter(element => element.classList.contains('occupied'))
      blockedRow = blockedRow.map(element => parseFloat(element.textContent))
      blockedRowArrays.push(blockedRow)
    }


    for (let i = blockedRowArrays.length - 1; i >= 1; i--) {
      const current = Math.min(...blockedRowArrays[i])
      let previous = Math.max(...blockedRowArrays[i - 1])
      let difference = current - previous
      while (difference >= 13) {
        blockedRowArrays[i - 1] = blockedRowArrays[i - 1].map(cell => cell + 12)
        previous = Math.max(...blockedRowArrays[i - 1])
        difference = current - previous
      }

    }



    let newBlockedCells = []
    for (let i = 0; i < blockedRowArrays.length; i++) {
      for (let j = 0; j < blockedRowArrays[i].length; j++) {
        newBlockedCells.push(blockedRowArrays[i][j])
      }
    }

    const isOccupied = document.querySelector('.bottom.occupied')

    // if (isOccupied === null){
    //   newBlockedCells = newBlockedCells.map(cell => cell + width)
    // }

    while (isOccupied === null) {
      if (Math.max(...newBlockedCells) >= 228 || newBlockedCells.length === 0) {
        break
      } else {
        newBlockedCells = newBlockedCells.map(cell => cell + width)
      }
    }


    const newBlockedDivs = []
    for (let i = 0; i < newBlockedCells.length; i++) {
      newBlockedDivs.push(document.querySelector(`#cell${newBlockedCells[i]}`))
    }


    blockedDivs.forEach(element => element.classList.remove('occupied'))
    newBlockedDivs.forEach(element => element.classList.add('occupied'))


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

    if (event.keyCode === 39) {
      switch (newTetrimino.name) {
        case 'i':
          newTetrimino.moveTetriminosI(event.keyCode)
          break
        case 's':
          newTetrimino.moveTetriminosS(event.keyCode)
          break
        case 'z':
          newTetrimino.moveTetriminosZ(event.keyCode)
          break
        case 'l':
          newTetrimino.moveTetriminosL(event.keyCode)
          break
        case 'j':
          newTetrimino.moveTetriminosJ(event.keyCode)
          break
        case 't':
          newTetrimino.moveTetriminosT(event.keyCode)
          break
        default:
          newTetrimino.moveTetriminosO(event.keyCode)
      }
    }


    if (event.keyCode === 37) {
      switch (newTetrimino.name) {
        case 'i':
          newTetrimino.moveTetriminosI(event.keyCode)
          break
        case 's':
          newTetrimino.moveTetriminosS(event.keyCode)
          break
        case 'z':
          newTetrimino.moveTetriminosZ(event.keyCode)
          break
        case 'l':
          newTetrimino.moveTetriminosL(event.keyCode)
          break
        case 'j':
          newTetrimino.moveTetriminosJ(event.keyCode)
          break
        case 't':
          newTetrimino.moveTetriminosT(event.keyCode)
          break
        default:
          newTetrimino.moveTetriminosO(event.keyCode)
      }
    }

  }

  function tetriminoDown(event) {

    const y = [
      [Math.floor(Math.max(newTetrimino.dimensions[0]) / width)],
      [Math.floor(Math.max(newTetrimino.dimensions[1]) / width)],
      [Math.floor(Math.max(newTetrimino.dimensions[2]) / width)],
      [Math.floor(Math.max(newTetrimino.dimensions[3]) / width)]]
    if (event.keyCode === 40) {
      if (y[0] < height - 2 && y[1] < height - 2 && y[2] < height - 2 && y[3] < height - 2) {
        newTetrimino.removeShape()
        newTetrimino.dimensions = newTetrimino.dimensions.map(cell => {
          return cell += width
        })
        newTetrimino.createShape()
      }
    }
    if (newTetrimino.dimensions.some(element => cells[element].classList.contains('occupied'))) {
      newTetrimino.removeShape()
      newTetrimino.dimensions = newTetrimino.dimensions.map(cell => {
        return cell -= width
      })
      newTetrimino.createShape()
    }

  }


  // * event handler

  document.addEventListener('keyup', rotateTetriminos)
  document.addEventListener('keydown', tetriminoDown)


}


window.addEventListener('DOMContentLoaded', init)