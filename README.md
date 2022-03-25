# Game Of Life

_**Game of Life implementation counting neighbors using matrices rotations**_

**Demo:** [here](https://simoneguarneri.github.io/GameOfLife-matrices/index.html)

![Life Iterator](https://i.imgur.com/mqNQIuH.png)

## How it Works

The main inspiration I got for this implementation was from [this video](https://www.youtube.com/watch?v=pMslgySQ8nc)
The guy is using APL (an array oriented language) and its calculating neighbors by every rotation of a single matrix

![Matrices](https://i.imgur.com/YuOXQJi.png)

This are all the rotation, we will sum those and count neighbors (it also resolves problems created by borders)

I decided I wanted to try this in JS and here we are.

## Technologies used
  
  - 🧠 JavaScript
  - 🖼️ [p5js](https://p5js.org)
