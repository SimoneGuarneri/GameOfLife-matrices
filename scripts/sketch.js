let cellSize; //Size of the signe rectangle
let base; //Base matrix

//Random color picking from palettes
const palettes = [["#ffff3f", "#2d3142"], ["#2b9348", "#272640"], ["#f7b801", "#3d348b"]]
let colors;

function setup(){
    
    createCanvas(windowWidth, windowHeight);
    
    cellSize = parseInt((windowWidth+200) / size);
    base = lifeInit();
    colors = palettes[parseInt(random(0, 3))];
    
    noStroke();
    frameRate(30); //FPS

}

function draw(){
    display(base);
    base = lifeIter(base);
}

function display(matrix){

    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            
            fill(matrix[y][x] == 1 ? colors[0] : colors[1]);
            rect(x * cellSize, y * cellSize, cellSize, cellSize);
          
        }
    }

}

