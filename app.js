'use strict';

// data holding
var tiles = document.getElementsByClassName('tiles');
var totalMoves = 0;
var tile1 = document.getElementById('Tile1');
var tile2 = document.getElementById('Tile2');
var tile3 = document.getElementById('Tile3');
var tile4 = document.getElementById('Tile4');
var tile5 = document.getElementById('Tile5');
var tile6 = document.getElementById('Tile6');
var tile7 = document.getElementById('Tile7');
var tile8 = document.getElementById('Tile8');
var tile9 = document.getElementById('Tile9');
var toptileArray = [tile1, tile2, tile3];
var midtileArray = [tile4, tile5, tile6];
var bottileArray = [tile7, tile8, tile9];
var allTiles = [toptileArray, midtileArray, bottileArray];
var allImages = [];



function makeChart() {
  var gameCanvas = document.getElementById('gameCanvas')
  var ctx = gameCanvas.getContext('2d');
ctx.drawImage(allTiles[0][0], 0, 0);
ctx.drawImage(allTiles[0][1], 180, 0);
ctx.drawImage(allTiles[0][2], 360, 0);
ctx.drawImage(allTiles[1][0], 0, 180);
ctx.drawImage(allTiles[1][1], 180, 180);
ctx.drawImage(allTiles[1][2], 360, 180);
ctx.drawImage(allTiles[2][0], 0, 360);
ctx.drawImage(allTiles[2][1], 180, 360);
ctx.drawImage(allTiles[2][2], 360, 360);
};


// Initial Tile Set up
// function MakeComponents(width, height, path, xPos, yPos, type) {
//   if (type === 'image') {
//     this.image = new Image();
//     this.image.src = path;
//   }
//     this.width = width;
//     this.height = height;
//     this.xPos = xPos;
//     this.yPos = yPos;
//     this.type = type;
//
//     this.update = function() {
//       ctx = gameCanvas.getContext('2d');
//       if (type === 'image') {
//         ctx.drawImage(this.image,
//             this.xPos,
//             this.yPos,
//             this.width,
//             this.height);
//         }
//     }
// }

//function to render new set up based on array positions
//
//




// function renderTiles() {
//   // remove fullPic populateTiles
// };

// function
//function to check and set local storage
// if local storage, render current game, else create new game
//e handler
  // function shuffleTiles(allTiles) {}
  // function to render the tiles to the canvas
    // count clicks, push local storage
//function to check settings
//function to validate tiles adjcent
//function to render tile movement
//function to check for completion, if complete inner html to reset (or delete local storage?)
//function to check and set local storage
//function to reset array values

//e listener

//function to render scores
