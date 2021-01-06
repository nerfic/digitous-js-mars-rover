// Gérer minuscule / Majuscule = La lettre que l'user nous envoie on la compare en tant que lowerCase result.toUpperCase === "n"



var prompt = require("prompt");

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
    direction: "W",
    x: 0,
    y: 0,
    travelLog: []
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
    if (rover.direction === "N") {
        rover.y += 1;
    } else if (rover.direction === "E") {
        rover.x += 1;
    } else if (rover.direction === "S") {
        rover.y -= 1;
    } else if (rover.direction === "W") {
        rover.x -= 1;
    }
}

turnRight(rover)
moveForward(rover)
turnRight(rover)
moveForward(rover)
console.log(rover)



// console.log("Départ du rover \n", grid.join('\n') + '\n\n');

// newposition = position ancienne
// poisition ancienne = ' '

// grid[0][1] = grid[0][0]
// grid[0][0] = ' '
// console.log("Position suivante\n", grid.join('\n'))

// grid[1][1] = grid[0][1]
// grid[0][1] = ' '
// console.log("Position suivante\n", grid.join('\n'))

// function roverGame() {

//     var playerResult = grid[0][0];

//     prompt.start();
//     prompt.get(['moove'], function (err, result) {

//         playerResult = result.moove;

//         var i = 0;

//         while (i < playerResult.length) {
//             if (playerResult.charAt(i) === "L") {
//                 turnLeft(rover);
//             } else if (playerResult.charAt(i) === "R") {
//                 turnRight(rover);
//             } else if (playerResult.charAt(i) === "F") {
//                 moveForward(rover);
//             }
//             i++;
//         }
//         console.log(grid.join('\n'))
//     });
// }

// roverGame()

// newposition = position ancienne
// poisition ancienne = ' '

// grid[0][1] = grid[0][0]
// grid[0][0] = ' '
// console.log("Position suivante\n", grid.join('\n'))

// grid[1][1] = grid[0][1]
// grid[0][1] = ' '
// console.log("Position suivante\n", grid.join('\n'))
