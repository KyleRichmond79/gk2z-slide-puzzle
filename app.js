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
var array = [tile1, tile2, tile3, tile4, tile5, tile6, tile7, tile8, tile9];

function makeChart() {
  var gameCanvas = document.getElementById('gameCanvas');
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

// // SAVE FOR STRETCH GOAL ONLY. CAN BE USED TO ADD NUMBER OF ELEMENTS
// // ONE WANTS IF ONE WANTS MORE ELEMENTS
// function defineElements(n) {
//   var n = n;
//   var starting = [];
//   for (var i = 1; i < ((n * n) + 1); i++) {
//     console.log(i);
//     starting.push(i);
//     console.log(starting);
//   }
//   console.log('Starting values: ' + starting);
//
//   shuffle(starting,n);
// }

// functions to shuffle tiles and split them into number of arrays needed
// array = array you want to shuffle then split into arrays
// n = number of arrays you want to split array
function shuffle() {
  var m = array.length, t, i;
  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  console.log('Randomized values: ' + array);
  splitShuffle(array);
}

function splitShuffle(array) {
  var chunks = [],
    i = 0,
    x = array.length,
    n = 3;

  while (i < x) {
    chunks.push(array.slice(i, i += n));
  }

  console.log(chunks);
  return chunks;
}

function renderTiles() {
//   // remove fullPic populateTiles
};
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
