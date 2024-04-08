const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});

// Define the maze as a 2D array
const maze = [
    ['#', '#', '#', '#', '#', '#', '#'],
    ['#', ' ', ' ', ' ', ' ', ' ', '#'],
    ['#', '#', '#', ' ', '#', '#', '#'],
    ['#', ' ', '#', ' ', ' ', ' ', '#'],
    ['#', ' ', '#', ' ', '#', '#', '#'],
    ['#', ' ', ' ', ' ', ' ', ' ', '#'],
    ['#', ' ', '#', ' ', ' ', '#', '#'],
    ['#', '#', '#', '#', '#', '#', '#']
];

// Player and goal positions
let player = {x: 1, y: 1};
let goal = {x: 5, y: 5};

// Define lose as an array of objects
let lose = [
    {x: 4, y: 2},
    {x: 5, y: 1},
    {x: 2, y: 5},
];

// Define boxes as an array of objects
let boxes = [{x: 3, y: 4}]; // Example box position

// Function to draw the maze
function drawMaze() {
    console.table(maze);
}

// Function to initialize the maze
function initializeMaze() {
    // Set player and goal positions
    maze[player.y][player.x] = 'X';
    maze[goal.y][goal.x] = 'W';
    // Set lose point in the maze
    for (let i = 0; i < lose.length; i++) {
        maze[lose[i].y][lose[i].x] = 'O'
    }
    // Set boxes in the maze
    for (let box of boxes) {
        maze[box.y][box.x] = 'B';
    }
}

// Function to move player
function movePlayer(direction) {
    let newX = player.x, newY = player.y;
    if (direction === 'w') newY--;
    else if (direction === 's') newY++;
    else if (direction === 'a') newX--;
    else if (direction === 'd') newX++;

    // Check if new position is valid
    if (maze[newY][newX] !== '#' && !isBoxAt(newX, newY)) {
        maze[player.y][player.x] = ' '; // Clear previous position
        player.x = newX;
        player.y = newY;
        maze[player.y][player.x] = 'X'; // Update player position
    } else if (isBoxAt(newX, newY)) {
        // Check if box can be pushed
        let nextX = newX + (newX - player.x);
        let nextY = newY + (newY - player.y);
        if (maze[nextY][nextX] !== '#' && !isBoxAt(nextX, nextY)) {
            // Move the box
            let boxIndex = getBoxIndex(newX, newY);
            boxes[boxIndex].x = nextX;
            boxes[boxIndex].y = nextY;
            // Move the player
            maze[player.y][player.x] = ' ';
            player.x = newX;
            player.y = newY;
            maze[player.y][player.x] = 'X';
            // Update box position in the maze
            maze[nextY][nextX] = 'B';
        }
    }
}

// Function to check if there's a box at a given position
function isBoxAt(x, y) {
    return boxes.some(box => box.x === x && box.y === y);
}

// Function to get the index of the box at a given position
function getBoxIndex(x, y) {
    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].x === x && boxes[i].y === y) {
            return i;
        }
    }
    return -1;
}

// Main game loop
function playGame() {
    console.clear();
    drawMaze();

    rl.question('Enter direction (w/s/a/d) or x to exit: ', (direction) => {
        if (direction.toLowerCase() === 'x') {
            console.log('Exiting game...');
            rl.close();
            return;
        }

        movePlayer(direction.toLowerCase());
        if (player.x === goal.x && player.y === goal.y) {
            console.clear();
            drawMaze();
            console.log('Congratulations! You reached the goal!');
            rl.close();
        } else {
            for (let i = 0; i < lose.length; i++) {
                if (player.x === lose[i].x && player.y === lose[i].y) {
                    console.clear();
                    drawMaze();
                    console.log('Congratulations! You are a loser as always!');
                    rl.close();
                    i += lose.length;
                } else {
                    playGame();
                }
            }
        }

    });
}

// Start the game
initializeMaze();
playGame();