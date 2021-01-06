var grid = [
    ["R", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
];

var rover = {
    direction: "N",
    x: 0,
    y: 0
}

function turnLeft(rover) {

}

function turnRight(rover) {

}

console.log("Départ du rover \n", grid.join('\n') + '\n\n');

// newposition = position ancienne
// poisition ancienne = ' '

grid[0][1] = grid[0][0]
grid[0][0] = ' '
console.log("Position suivante\n", grid.join('\n'))

grid[1][1] = grid[0][1]
grid[0][1] = ' '
console.log("Position suivante\n", grid.join('\n'))
