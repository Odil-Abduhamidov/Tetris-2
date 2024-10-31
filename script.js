function drawTetrisPlayground(x, y, target) {
    if (x <= 0 || y <= 0) throw new Error('x and y cannot be negative')

    if(target.children.length) throw new Error('Aborted: target element should be empty');

    for(let rowsCount = 0; rowsCount < y; rowsCount++) {
        const row = document.createElement('div')
        row.className = 'row'
        row.dataset['row'] = rowsCount;
        row.style.transform = `translateY(${-rowsCount}px)`

        for(let cellsCount = 0; cellsCount < x; cellsCount++) {
            const cell = document.createElement('div')
            cell.className = 'cell'
            cell.dataset['cell'] = cellsCount
            cell.style.transform = `translateX(${-cellsCount}px)`
            row.append(cell)
        }

        target.append(row)
    }
}

const tetrisPlaygroundTarget = document.querySelector('.tetris-playground')
// drawTetrisPlayground(-10, -20, tetrisPlaygroundTarget)
drawTetrisPlayground(10, 20, tetrisPlaygroundTarget)

try {
    drawTetrisPlayground(10, 20, tetrisPlaygroundTarget)
} catch(e) {
    console.log(e.message)
}


const shapes = {
    I: {
        shapeforI: [[1],
                    [1],
                    [1],
                    [1]],
        color: 'lightblue'
    },
    J: {
        shapeforJ: [[0, 1],
                    [0, 1],
                    [1, 1]],
        color: 'darkblue'
    },
    L: {
        shapeforL: [[1, 0],
        [1, 0],
        [1, 1]],
        color: 'lightorange'
    }, 

    O: {
        shapeforO: [[1, 1],
        [1, 1]],
        color: 'yellow'
    }, 

    S: { 
        shape: [[0, 1, 1],
                 [1, 1, 0]],
         color: 'green'
        }, 

    T: {
        shapeforT:[[1, 1, 1],
                [0, 1, 0]],

        color: 'purple'
    },

    Z: {
        shapeforZ: [[1, 1, 0],
                    [0, 1, 1]],
        color: 'red'
    }
} 

const shapeKeys = Object.keys(shapes)

const shapeKeyIndex = Math.floor(Math.random() * shapeKeys.length)

// [0; 1) -> 0 ... 0.99999999999
//        -> 0 * 7 ... 0.99999999999 * 7
//        -> 0 ... 6.99999999999 
const shapeKey = shapeKeys[shapeKeyIndex]

// const currentShape = shapes[shapeKey]
const currentShape = shapes.S
const rowsToColor = currentShape.shape.length
const cellsToColor = currentShape.shape[0].length
console.log(shapes.S)
console.log(currentShape.shape.length) // rows
console.log(currentShape.shape[0].length) // cels

for (let rowIndex = 0; rowIndex < rowsToColor; rowIndex++) {
    const row = tetrisPlaygroundTarget.children[rowIndex];

    for (let cellIndex = 0; cellIndex < cellsToColor; cellIndex++) {
        const cell = row.children[cellIndex];
        if (currentShape.shape[rowIndex][cellIndex]) {
            cell.style.backgroundColor = currentShape.color;
        }
    }
}



const currentShapeforT = shapes.T
const rowsToColorforT = currentShape.shapeforT.length
const cellsToColorforT = currentShape.shapeforT[0].length
console.log(shapes.T)
console.log(currentShapeforT.shapeforT.length) // rows
console.log(currentShapeforT.shapeforT[0].length) // cels

for (let rowIndex = 0; rowIndex < rowsToColorforT; rowIndex++) {
    const row = tetrisPlaygroundTarget.children[rowIndex];

    for (let cellIndex = 0; cellIndex < cellsToColor; cellIndex++) {
        const cell = row.children[cellIndex];
        if (currentShapeforT.shapeforT[rowIndex][cellIndex]) {
            cell.style.backgroundColor = currentShapeforT.color;
        }
    }
}


const currentShapeforL = shapes.L
const rowsToColorforL = currentShape.shapeforL.length
const cellsToColorforL = currentShape.shapeforL[0].length
console.log(shapes.L)
console.log(currentShapeforT.shapeforL.length) // rows
console.log(currentShapeforT.shapeforL[0].length) // cels

for (let rowIndex = 0; rowIndex < rowsToColorforL; rowIndex++) {
    const row = tetrisPlaygroundTarget.children[rowIndex];

    for (let cellIndex = 0; cellIndex < cellsToColor; cellIndex++) {
        const cell = row.children[cellIndex];
        if (currentShapeforL.shapeforT[rowIndex][cellIndex]) {
            cell.style.backgroundColor = currentShapeforT.color;
        }
    }
}






