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
        var logNumber = 1
        var i = 0;
        console.log(colors.bgGrey.brightWhite(`Log n°0 (position initiale) =`, rover))
        while (i < playerResult.length) {
            if (playerResult.charAt(i).toUpperCase() === "L") {
                if (parseInt(playerResult.charAt(i + 1)) > 0 && parseInt(playerResult.charAt(i + 1)) <= 9) {
                    var j = 0
                    while (j < parseInt(playerResult.charAt(i + 1))) {
                        turnLeft(rover)
                        console.log(colors.bgGrey.brightWhite(`Log n°${logNumber} (regarde à gauche) =`, rover))
                        logNumber++
                        j++
                    }
                } else {
                    turnLeft(rover);
                    console.log(colors.bgGrey.brightWhite(`Log n°${logNumber} (regarde à gauche) =`, rover))
                    logNumber++
                }
            } else if (playerResult.charAt(i).toUpperCase() === "R") {
                if (parseInt(playerResult.charAt(i + 1)) > 0 && parseInt(playerResult.charAt(i + 1)) <= 9) {
                    var j = 0
                    while (j < parseInt(playerResult.charAt(i + 1))) {
                        turnRight(rover)
                        console.log(colors.bgGrey.brightWhite(`Log n°${logNumber} (regarde à droite) =`, rover))
                        logNumber++
                        j++
                    }
                } else {
                    turnRight(rover);
                    console.log(colors.bgGrey.brightWhite(`Log n°${logNumber} (regarde à droite) =`, rover))
                    logNumber++
                }
            } else if (playerResult.charAt(i).toUpperCase() === "F") {
                if (parseInt(playerResult.charAt(i + 1)) > 0 && parseInt(playerResult.charAt(i + 1)) <= 9) {
                    var j = 0
                    while (j < parseInt(playerResult.charAt(i + 1))) {
                        moveForward(rover)
                        console.log(colors.bgGrey.brightWhite(`Log n°${logNumber} (avance) =`, rover))
                        logNumber++
                        j++
                    }
                } else {
                    moveForward(rover);
                    console.log(colors.bgGrey.brightWhite(`Log n°${logNumber} (avance) =`, rover))
                    logNumber++
                }
            } else if (playerResult.charAt(i).toUpperCase() === "B") {
                if (parseInt(playerResult.charAt(i + 1)) > 0 && parseInt(playerResult.charAt(i + 1)) <= 9) {
                    var j = 0
                    while (j < parseInt(playerResult.charAt(i + 1))) {
                        moveBackward(rover)
                        console.log(colors.bgGrey.brightWhite(`Log n°${logNumber} (recule) =`, rover))
                        logNumber++
                        j++
                    }
                } else {
                    moveBackward(rover);
                    console.log(colors.bgGrey.brightWhite(`Log n°${logNumber} (recule) =`, rover))
                    logNumber++
                }
            } else if (playerResult.charAt(i) === " ") {
            } else if (playerResult.charAt(i) > 0 && playerResult.charAt(i) < 10) {

            } else {
                console.log(colors.brightRed(`Erreur le caractere ${playerResult.charAt(i)} n'est pas pris en charge !`))
                break
            }
            i++;
        }
        console.log("\n")
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
