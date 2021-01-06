// ←
// ↓
// ↑
// →
var prompt = require("prompt");

var grid = [
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", "R"]
];



var rover = {
    direction: "N",
    x: 9,
    y: 9,
    travelLog: [],
    //pointer: "↑"
}



function turnLeft(rover) {
    if (rover.direction === "N") {
        rover.direction = "W"
    } else if (rover.direction === "W") {
        rover.direction = "S"
        console.log(rover.direction)
    } else if (rover.direction === "S") {
        rover.direction = "E"
        console.log(rover.direction)
    } else if (rover.direction === "E") {
        rover.direction = "N"
        console.log(rover.direction)
    } else {
        console.log("Erreur: ce n'est pas une direction valide")
    }
}

function turnRight(rover) {
    if (rover.direction === "N") {
        rover.direction = "E"
        console.log("Nouvelle direction", rover.direction)
    } else if (rover.direction === "E") {
        rover.direction = "S"
        console.log("Nouvelle direction", rover.direction)
    } else if (rover.direction === "S") {
        rover.direction = "W"
        console.log("Nouvelle direction", rover.direction)
    } else if (rover.direction === "W") {
        rover.direction = "N"
        console.log("Nouvelle direction", rover.direction)
    } else {
        console.log("Erreur: ce n'est pas une direction valide")
    }
}

function moveForward(rover) {
    var lastY = rover.y
    var lastX = rover.x
    if (rover.direction === "N") {
        rover.y -= 1;
        grid[rover.x][rover.y] = grid[lastX][lastY]
        grid[lastX][lastY] = " "
        if (rover.y < 0 || rover.y > 9) {
            console.log("Erreur nous sortons de la grille")
        }
    } else if (rover.direction === "E") {
        rover.x += 1;
        grid[rover.x][rover.y] = grid[lastX][lastY]
        grid[lastX][lastY] = " "
        if (rover.x < 0 || rover.x > 9) {
            console.log("Erreur nous sortons de la grille")
        }
    } else if (rover.direction === "S") {
        rover.y += 1;
        grid[rover.x][rover.y] = grid[lastX][lastY]
        grid[lastX][lastY] = " "
        if (rover.y < 0 || rover.y > 9) {
            console.log("Erreur nous sortons de la grille")
        }
    } else if (rover.direction === "W") {
        rover.x -= 1;
        grid[rover.x][rover.y] = grid[lastX][lastY]
        grid[lastX][lastY] = " "
        if (rover.x < 0 || rover.x > 9) {
            console.log("Erreur nous sortons de la grille")
        }
    }
}


function roverGame() {

    var playerResult = grid[rover.x][rover.y];

    prompt.start();
    prompt.get(['moove'], function (err, result) {

        playerResult = result.moove;

        var i = 0;

        while (i < playerResult.length) {
            if (playerResult.charAt(i).toUpperCase() === "L") {
                turnLeft(rover);
                console.log(rover)
            } else if (playerResult.charAt(i).toUpperCase() === "R") {
                turnRight(rover);
                console.log(rover)
            } else if (playerResult.charAt(i).toUpperCase() === "F") {
                moveForward(rover);
                console.log(rover)
            } else {
                console.log("Erreur ce n'est pas un bon argument !")
            }
            i++;
        }
        console.log(grid.join('\n'))
    });
}

roverGame()


// newposition = position ancienne
// poisition ancienne = ' '

// grid[0][1] = grid[0][0]
// grid[0][0] = ' '
// console.log("Position suivante\n", grid.join('\n'))

// grid[1][1] = grid[0][1]
// grid[0][1] = ' '
// console.log("Position suivante\n", grid.join('\n'))
