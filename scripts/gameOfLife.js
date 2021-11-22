const size = 150;

const lifeInit = () => {
    return Array(size).fill().map(() => Array.from({ length: size }, () => (Math.random() >= 0.5 ? 1 : 0)));
}

//Not one liner cause of forEach not returning value
const rotateLeft = (matrix) => {
    let temp = cloneMatrix(matrix);
    temp.forEach(row => row.push(row.shift()));
    return temp;
}
const rotateRight = (matrix) => {
    let temp = cloneMatrix(matrix);
    temp.forEach(row => row.unshift(row.splice(-1)[0]));
    return temp;
}
const rotateUp = (matrix) => {
    let temp = cloneMatrix(matrix);
    temp.push(temp.shift());
    return temp;
}
const rotateDown = (matrix) => {
    let temp = cloneMatrix(matrix);
    temp.unshift(temp.splice(-1)[0]);
    return temp;
}

//Utility
const cloneMatrix = (matrix) => {
    return matrix.map(arr => arr.slice());
}
const sumTwoMatrices = (base, toSum) => {
    for(let i = 0; i < size; i++){
        for(let j = 0; j < size; j++){
            base[i][j] += toSum[i][j];
        }
    }
}

//Logical operations for two matrices
const logicalAND = (base, toAnd) => {
    for(let i = 0; i < size; i++){
        for(let j = 0; j < size; j++)
            base[i][j] = base[i][j] && toAnd[i][j] ? 1 : 0;
    }
}
const logicalOR = (base, toOr) => {
    for(let i = 0; i < size; i++){
        for(let j = 0; j < size; j++)
            base[i][j] = base[i][j] || toOr[i][j] ? 1 : 0;
    }
}

//Counting neighbors summing any rotation possible
const countNeighbor = (base) => {

    let counter = rotateUp(rotateLeft(base));
    const matricesToSum = [
        rotateUp(base), rotateUp(rotateRight(base)), 
        rotateLeft(base), cloneMatrix(base), rotateRight(base), 
        rotateDown(rotateLeft(base)), rotateDown(base), rotateDown(rotateRight(base))
    ];

    matricesToSum.forEach(matrix => sumTwoMatrices(counter, matrix));
    return counter;
}

//Base function to iterate
const lifeIter = (base) => {
    
    let neighbors = countNeighbor(base);

    //Mapping threes and fours with boolean
    let threes = neighbors.map(row => {return row.map( item => {return item == 3 ? 1 : 0} )});
    let fours = neighbors.map(row => {return row.map( item => {return item == 4 ? 1 : 0} )});
    
    //Logical operation to calculate the living value (0 or 1)

    //See if fours were alive (and keep them alive if it was the case)
    logicalAND(fours, base);
    //Combining threes with fours (threes stay alive)
    logicalOR(threes, fours);

    //The result of logicalOR of threes and fours
    return threes;
    
}

