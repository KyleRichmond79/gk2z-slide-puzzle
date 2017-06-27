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
