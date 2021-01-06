// ←
// ↓
// ↑
// →
// Pblm de hors zone
// Rajouter le cas d'erreur pour un espace dans le prompt ????
// Afficher la direction dans la grille

var prompt = require("prompt");

var rover = {
    direction: "N",
    x: 0,
    y: 0,
    travelLog: [],
    pointer: "↑"
}
var grid = [
    [rover.pointer, " ", " ", " ", " ", " ", " ", " ", " ", " "],
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

function turnLeft(rover) {
    if (rover.direction === "N") {
        rover.direction = "W"
        rover.pointer = "←"
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
    var lastX = rover.x
    var lastY = rover.y

    if (rover.direction === "N") {
        rover.y -= 1;
        grid[rover.y][rover.x] = grid[lastY][lastX];
        grid[lastY][lastX] = " ";

        if (rover.y < 0 || rover.y > 9) {
            console.log("Erreur nous sortons de la grille")
        }
    } else if (rover.direction === "E") {
        rover.x += 1;
        grid[rover.y][rover.x] = grid[lastY][lastX];
        grid[lastY][lastX] = " ";

        if (rover.x < 0 || rover.x > 9) {
            console.log("Erreur nous sortons de la grille")
        }
    } else if (rover.direction === "S") {
        rover.y += 1;
        grid[rover.y][rover.x] = grid[lastY][lastX];
        grid[lastY][lastX] = " ";

        if (rover.y < 0 || rover.y > 9) {
            console.log("Erreur nous sortons de la grille")
        }
    } else if (rover.direction === "W") {
        rover.x -= 1;
        grid[rover.y][rover.x] = grid[lastY][lastX];
        grid[lastY][lastX] = " ";

        if (rover.x < 0 || rover.x > 9) {
            console.log("Erreur nous sortons de la grille")
        }
    }
}

function moveBackward(rover) {
    var lastX = rover.x
    var lastY = rover.y

    if (rover.direction === "N") {
        rover.y += 1;
        grid[rover.y][rover.x] = grid[lastY][lastX];
        grid[lastY][lastX] = " ";

        if (rover.y < 0 || rover.y > 9) {
            console.log("Erreur nous sortons de la grille")
        }
    } else if (rover.direction === "E") {
        rover.x -= 1;
        grid[rover.y][rover.x] = grid[lastY][lastX];
        grid[lastY][lastX] = " ";

        if (rover.x < 0 || rover.x > 9) {
            console.log("Erreur nous sortons de la grille")
        }
    } else if (rover.direction === "S") {
        rover.y -= 1;
        grid[rover.y][rover.x] = grid[lastY][lastX];
        grid[lastY][lastX] = " ";

        if (rover.y < 0 || rover.y > 9) {
            console.log("Erreur nous sortons de la grille")
        }
    } else if (rover.direction === "W") {
        rover.x += 1;
        grid[rover.y][rover.x] = grid[lastY][lastX];
        grid[lastY][lastX] = " ";

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

                if (rover.x < 0 || rover.x > 9 || rover.y < 0 || rover.y > 9) {
                    console.log("Sortie de grille");
                } else {
                    moveForward(rover);
                    console.log(rover)
                }
            } else if (playerResult.charAt(i).toUpperCase() === "B") {

                if (rover.x < 0 || rover.x > 9 || rover.y < 0 || rover.y > 9) {
                    console.log("Sortie de grille");
                } else {
                    moveBackward(rover);
                    console.log(rover)
                }
            } else if (playerResult.charAt(i) === " ") {
                // vide ?
            }
            else {
                console.log(`Erreur le caractere ${playerResult.charAt(i)} n'est pas pris en charge !`)
                break
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
