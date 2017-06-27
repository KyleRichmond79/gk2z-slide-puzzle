'use strict';

// data holding
var toptileArray = [];
var midtileArray = [];
var bottileArray = [];
var allTiles = [toptileArray, midtileArray, bottileArray];
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

function makeChart() {
  var gameCanvas = document.getElementById('gameCanvas')
  var fullPic = document.getElementById('fullCatImage');
  var ctx = gameCanvas.getContext('2d');
ctx.drawImage(tile1, 0, 0);
ctx.drawImage(tile2, 180, 0);
ctx.drawImage(tile3, 360, 0);
ctx.drawImage(tile4, 0, 180);
ctx.drawImage(tile5, 180, 180);
ctx.drawImage(tile6, 360, 180);
ctx.drawImage(tile7, 0, 360);
ctx.drawImage(tile8, 180, 360);
ctx.drawImage(tile9, 360, 360);
};


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
