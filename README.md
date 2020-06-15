# General Assembly Project 1: Tetris

***Timeframe***

9 days

## Goal:

To create a fully functioning browser-based game of your choice using vanilla JavaScript

## Technologies Used
* HTML5 with HTML5 audio
* CSS3 with animation
* JavaScript (ES6)
* Git
* GitHub
* Google Fonts


# Tetris

This is a 2D, single-player game based on [Math is Fun's implementation](https://www.mathsisfun.com/games/tetris.html) of the classic game Tetris.

### Play deployed version

https://purvitrivedi.github.io/project-one/

![Tetris-Gameplay](assets/TetrisGameplay.gif)

## Controls

* Click the Start Button or press spacebar to start the game
* Use the left  ( <img src="https://img.icons8.com/ios/50/000000/long-arrow-left.png" alt="left-arrow" width="10" /> )  and right  ( <img src="https://img.icons8.com/ios/50/000000/long-arrow-right.png" alt="right-arrow" width="10" /> )  arrow keys to move Tetriminos left and righ, respectively.
* Up ( <img src="https://img.icons8.com/ios/50/000000/long-arrow-up.png" alt="up-arrow" width="10" /> ) arrow key rotates the Tetrimino in play
* Down ( <img src="https://img.icons8.com/ios/50/000000/long-arrow-down.png" alt="down-arrow" width="10" /> ) arrow key accelerates the Tetrimino's downward motion

## Development Process
Out of the options we were given for this project, Tetris ranked as one of the highest in difficulty. 

This made me quite nervous about picking it as my game of choice, however if there was a time to get over any fear of coding, it was right at the beggining! 

I decided that strong, step-by-step planning and a 'calm mindset' would be key to making this project a success.

I also decided to use Objects and Class Methods for this project as this was a weak point in my learning at that time and I wanted to practice it further.

### Day One: 

#### Pseudocoding and Basic Structure

> *Starter Checklist*:
> * Create a 12 x 20 grid
> * Make a colour move left and right
> * Make color move downwards on timer and stop at the bottom
> * Make all tetrimino shape as arrays
> * Start with o-shape: ensure it falls down, moves left & right and, stops at the bottom
> * Do this for all shapes
> * Rotation: Start with l-shape, then move on to others
> * Block cells contain tetriminos
> * Collision Detection
> * Line Clearing once a row is occupied
> * Line dropping and shifting
> * Game over Logic
> * Wall Kicks
> * Score Implementaion & Styling


The grid was made using the starter code provided by our instructor, Jack May. 

The movement of a block is achieved by adding and removing 'occupied' cell class. As the block moves position - the class is removed form the previous cell and applied to the new one. The block falls down on a timer, with the width of the grid added at each interval.


### Day Two: 

#### Making Shapes, Applying Movements to O-shape and using Object class methods

A typical array of tetriminos would look like this - with each value in the array as the starting grid position:

    const oShape = [5, 6, 17, 18]
    const iShape = [5, 4, 6, 7]

With object class methods I would essentialy be applying similar methods to all shapes. Each Tetrimino object had three properties and 2 common methods: 

createShape and removeShape methods would add and remove classNames based on movements:

    class Tetrimino {
        constructor(name, dimensions, className) {
          this.name = name
          this.dimensions = dimensions
          this.className = className

        }
        createShape() {
          this.dimensions.forEach(cell => {
            cells[cell].classList.add(this.   className)
          })
        }

        removeShape() {
          this.dimensions.forEach(cell => {
            cells[cell].classList.remove(this.    className)
          })
        }

      }

They also had their own movement restrictions based on their shapes.

An example:

    class S extends Tetrimino {
      constructor(name, dimensions, className) {
        super(name, dimensions, className)
      }
      moveTetriminosS(keycode) {
        const x = [this.dimensions[2] % width, this.   dimensions[1] % width]
        switch (keycode) {
          case 39:
  
            this.removeShape()
            if (x[1] < width - 1) {
              this.dimensions = this.dimensions.map  (cell => {
                return cell += 1
              })
            }
            this.createShape()
            break
          case 37:
            this.removeShape()
            if (x[0] > 0) {
              this.dimensions = this.dimensions.map  (cell => {
                return cell -= 1
              })
            }
            this.createShape()
            break
          default:
            console.log('rotate or move down')
        }
    }


### Day 3 & 4

* Write class methods for rotations and movements as the tetriminos are falling down 
* Came across a bug for rotations, spent half a day to work on the fix
* Create a new tetrimino randomly when previous tetrimino hits the floor

### Day 5 and 6

* Collision Detection
* Line Clearing
* Line Shifting

### Day 7

* Realised properties of a tetrimino once it is falls down get mixed up. This meant I had to give occupied blocks a new color. 

* Game over Logic
* MVP Achieved
* Wall Kicks for I shape


### Day 8 & 9

* Implement Keydown feature to accelerate downwards movement 
* Created a score count and start button
* Styling
* Sounds 
* Bug fixes


## Bugs

* Collision Detection does not work left and right
* Wall kicks does not work for all shops
* Downwards acceleration stops earlier than expected

* Not a bug, but a styling setback:  Removing color from occupied cells makes them transparent and therefore, the game becomes unplayable.

## Wins

* Got the MVP! 

* Worked with Objects Class methods: I always felt like this was a weak point in my JS learning. I feel a lot more comfortable.

* Styling - quite happy with the floating space look

## Challenges

* Working with Object Class Methods - I learned about Object Mutability, I had to move all methods to inheritated classes so they apply as required.


## Future Content

* Speed increases with score
* Mobile Support

