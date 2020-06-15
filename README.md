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


# Play Tetris here

https://purvitrivedi.github.io/project-one/





# Overview

Tetris is a puzzle game where the player has to fit different shaped blocks (called Tetriminos) together so that they make a complete line across the playing board. Once a line is achieved it is removed from the game board and the player's score is increased.

The player can move the Tetriminos left and right and rotate them clockwise in 90º increments.

The aim of the game is to get as many points as possible before the game board is filled with Tetriminos.

![Tetris-Gameplay](assets/TetrisGameplay.gif)


# How to Play

* Click the Start Button or press spacebar to start game

* Left and right keys move the tetriminos left and right

* Up key rotates the Tetrimino in play

* Down key accelerates the Tetrimino's downward motion


# Process

## Timeframe

9 days

## Requirements

* The game should stop if a Tetrimino fills the highest row of the game board

* The player should be able to rotate each Tetrimino about its own axis

* If a line is completed it should be removed and the pieces above should take its place


## Technologies Used
* HTML5 with HTML5 audio
* CSS3 with animation
* JavaScript (ES6)
* Git
* GitHub
* Google Fonts


## Approach Taken

### Day 1 & 2

To make grid of cells(divs) and make colour from from one to another:
* Left and right using event handler
* Downwards using Set Interval with the color stopping at the bottom

To Make Shapes and move some of them: 
* Make O tetrimino shape and apply movements
* Create all shapes. I decided to use Object class methods for this as I would essentialy be applying similar methods to all shapes.


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

* Got the MVP! I was nervous about making Tetris and struggled a lot in the beggining -- however, midway I decided to change my mindset to 'calm mode' and stop fearing the project. After this, I was so much faster.

* Worked with Objects Class methods: I always felt like this was a weak point in my JS learning. I feel a lot more comfortable.

* Styling - quite happy with the floating space look

## Challenges

* Working with Object Class Methods - I learned about Object Mutability, I had to move all methods to inheritated classes so they apply as required. Although I have learned a lot, there are still a few gaps in my knowledge -- so I will be addressing those soon.


## Future Content

* Speed increases with score
* Responsive Design
* Tetriminos retain color once occupied

