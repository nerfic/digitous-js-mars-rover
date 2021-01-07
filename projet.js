// ←
// ↓
// ↑
// →
// Pblm de hors zone
// Rajouter le cas d'erreur pour un espace dans le prompt ????
// Afficher la direction dans la grille

var prompt = require("prompt");
var colors = require("colors/safe");

var rover = {
    direction: "N",
    x: 0,
    y: 0,
}

var pointerDirection = colors.white.bold("↑");

var grid = [
    [pointerDirection, " ", " ", " ", " ", " ", " ", " ", " ", " "],
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

// function pointer(direction) {

//     if (rover.direction === "N") {
//         pointerDirection = "↑";
//     } else if (rover.direction === "E") {
//         pointerDirection = "→";
//     } else if (rover.direction === "S") {
//         pointerDirection = "↓";
//     } else if (rover.direction === "W") {
//         pointerDirection = "←"
//     }
// }

function turnLeft(rover) {
    if (rover.direction === "N") {
        rover.direction = "W"
        pointerDirection = colors.white.bold("←");
        grid[rover.y][rover.x] = pointerDirection;
    } else if (rover.direction === "W") {
        rover.direction = "S"
        pointerDirection = colors.white.bold("↓");
        grid[rover.y][rover.x] = pointerDirection;
    } else if (rover.direction === "S") {
        rover.direction = "E"
        pointerDirection = colors.white.bold("→");
        grid[rover.y][rover.x] = pointerDirection;
    } else if (rover.direction === "E") {
        rover.direction = "N"
        pointerDirection = colors.white.bold("↑");
        grid[rover.y][rover.x] = pointerDirection;
    } else {
        console.log("Erreur: ce n'est pas une direction valide")
    }
}

function turnRight(rover) {
    if (rover.direction === "N") {
        rover.direction = "E"
        pointerDirection = colors.white.bold("→");
        grid[rover.y][rover.x] = pointerDirection;
    } else if (rover.direction === "E") {
        rover.direction = "S"
        pointerDirection = colors.white.bold("↓");
        grid[rover.y][rover.x] = pointerDirection;
    } else if (rover.direction === "S") {
        rover.direction = "W"
        pointerDirection = colors.white.bold("←");
        grid[rover.y][rover.x] = pointerDirection;
    } else if (rover.direction === "W") {
        rover.direction = "N"
        pointerDirection = colors.white.bold("↑");
        grid[rover.y][rover.x] = pointerDirection;
    } else {
        console.log("Erreur: ce n'est pas une direction valide")
    }
}

function moveForward(rover) {
    var lastX = rover.x
    var lastY = rover.y

    if (rover.direction === "N") {
        rover.y -= 1;
        if (rover.y < 0 || rover.y > 9) {
            console.log(colors.brightRed("Erreur nous sortons de la grille"))
        } else {
            grid[rover.y][rover.x] = grid[lastY][lastX];
            grid[lastY][lastX] = " ";
            grid[rover.y][rover.x] = pointerDirection;
        }
    } else if (rover.direction === "E") {
        rover.x += 1;
        if (rover.x < 0 || rover.x > 9) {
            console.log(colors.brightRed("Erreur nous sortons de la grille"))
        } else {
            grid[rover.y][rover.x] = grid[lastY][lastX];
            grid[lastY][lastX] = " ";
            grid[rover.y][rover.x] = pointerDirection;
        }
    } else if (rover.direction === "S") {
        rover.y += 1;
        if (rover.y < 0 || rover.y > 9) {
            console.log(colors.brightRed("Erreur nous sortons de la grille"))
        } else {
            grid[rover.y][rover.x] = grid[lastY][lastX];
            grid[lastY][lastX] = " ";
            grid[rover.y][rover.x] = pointerDirection;
        }
    } else if (rover.direction === "W") {
        rover.x -= 1;
        if (rover.x < 0 || rover.x > 9) {
            console.log(colors.brightRed("Erreur nous sortons de la grille"))
        } else {
            grid[rover.y][rover.x] = grid[lastY][lastX];
            grid[lastY][lastX] = " ";
            grid[rover.y][rover.x] = pointerDirection;
        }
    }
}

function moveBackward(rover) {
    var lastX = rover.x
    var lastY = rover.y

    if (rover.direction === "N") {
        rover.y += 1;
        if (rover.y < 0 || rover.y > 9) {
            console.log(colors.brightRed("Erreur nous sortons de la grille"))
        } else {
            grid[rover.y][rover.x] = grid[lastY][lastX];
            grid[lastY][lastX] = " ";
        }
    } else if (rover.direction === "E") {
        rover.x -= 1;
        if (rover.x < 0 || rover.x > 9) {
            console.log(colors.brightRed("Erreur nous sortons de la grille"))
        } else {
            grid[rover.y][rover.x] = grid[lastY][lastX];
            grid[lastY][lastX] = " ";
        }
    } else if (rover.direction === "S") {
        rover.y -= 1;
        if (rover.y < 0 || rover.y > 9) {
            console.log(colors.brightRed("Erreur nous sortons de la grille"))
        } else {
            grid[rover.y][rover.x] = grid[lastY][lastX];
            grid[lastY][lastX] = " ";
        }
    } else if (rover.direction === "W") {
        rover.x += 1;
        if (rover.x < 0 || rover.x > 9) {
            console.log(colors.brightRed("Erreur nous sortons de la grille"))
        } else {
            grid[rover.y][rover.x] = grid[lastY][lastX];
            grid[lastY][lastX] = " ";
        }
    }
}

function roverGame() {

    var playerResult = grid[rover.x][rover.y];


    prompt.message = colors.cyan("Envoyez une commande au rover");
    console.log(colors.brightGreen("Voici les commandes:"))
    console.log(colors.brightYellow("F pour avancer"))
    console.log(colors.brightYellow("B pour reculer"))
    console.log(colors.brightYellow("R pour regarder à droite"))
    console.log(colors.brightYellow("L pour regarder à gauche"))

    prompt.start();
    prompt.get(['moove'], function (err, result) {

        playerResult = result.moove;

        var i = 0;
        console.log(colors.bgGrey.brightWhite(`Log n°0 (position initiale) =`, rover))
        while (i < playerResult.length) {
            if (playerResult.charAt(i).toUpperCase() === "L") {
                turnLeft(rover);
                console.log(colors.bgGrey.brightWhite(`Log n°${i + 1} (regarde à gauche) =`, rover))
            } else if (playerResult.charAt(i).toUpperCase() === "R") {
                turnRight(rover);
                console.log(colors.bgGrey.brightWhite(`Log n°${i + 1} (regarde à droite) =`, rover))
            } else if (playerResult.charAt(i).toUpperCase() === "F") {
                moveForward(rover);
                console.log(colors.bgGrey.brightWhite(`Log n°${i + 1} (avance) =`, rover))
            }
            else if (playerResult.charAt(i).toUpperCase() === "B") {
                moveBackward(rover);
                console.log(colors.bgGrey.brightWhite(`Log n°${i + 1} (recule) =`, rover))
            }
            else if (playerResult.charAt(i) === " ") {
            }
            else {
                console.log(colors.brightRed(`Erreur le caractere ${playerResult.charAt(i)} n'est pas pris en charge !`))
                break;
            }
            i++;
        }
        console.log(colors.bgBrightMagenta.magenta(grid.join('\n')))
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
