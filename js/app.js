'use strict';
var imageLocationOne = document.getElementById('imageLocationOne');
var imageLocationTwo = document.getElementById('imageLocationTwo');
var imageLocationThree = document.getElementById('imageLocationThree');

var allProducts = [];
var productInOne = 0;
var productInTwo = 0;
var productInThree = 0;

//building object constructor
var Product = function(productName,filePath) {
  this.productName = productName;
  this.filePath = filePath;
  var productShows = 0;
  var productClicks = 0;
  allProducts.push(this);
}

Product.prototype.displayImage = function(imageLocationId) {
  var img = document.createElement('img');
  img.src = this.filePath;
  this.productShows += 1;
  imageLocationId.appendChild(img);
}

var bag = new Product('Bag','img/bag.jpg');
var banana = new Product('Banana', 'img/banana.jpg');
var boots = new Product('Boots', 'img/boots.jpg');
var chair = new Product('Chair', 'img/chair.jpg');
var cthulhu = new Product('Cthulu', 'img/cthulhu.jpg');
var dragon = new Product('Dragon Meat', 'img/dragon.jpg');
var pen = new Product('Pen Silverware', 'img/pen.jpg');
var scissors = new Product('Pizza Scissors', 'img/scissors.jpg');
var shark = new Product('Shark Sleepig Bag', 'img/shark.jpg');
var sweep = new Product('Sweep', 'img/sweep.png');
var unicorn = new Product('Unicorn Meat', 'img/unicorn.jpg');
var usb = new Product('USB Tentacle', 'img/usb.gif');
var water_can = new Product('Watering Can', 'img/water-can.jpg');
var wine_glass = new Product('Wine Glass', 'img/wine-glass.jpg');

function randomImageDisplay() {
  var i = Math.ceil(Math.random() * (allProducts.length - 1));
  allProducts[i].displayImage();
}

function threeRandomProducts() {
  var i = Math.floor(Math.random() * (allProducts.length));
  var j = Math.floor(Math.random() * (allProducts.length));
  console.log(j);
  var k = Math.floor(Math.random() * (allProducts.length));
  var randomProductOne = allProducts[i];
  var randomProductTwo = allProducts[j];
  var randomProductThree = allProducts[k];

  while (i === j) {
    j = Math.floor(Math.random() * (allProducts.length));
    console.log(j);
    randomProductTwo = allProducts[j];
  }

  while (j === k || i === k) {
    k = Math.floor(Math.random() * (allProducts.length));
    console.log(k);
    randomProductThree = allProducts[k];
  }

  randomProductOne.displayImage(imageLocationOne, randomProductOne);
  randomProductTwo.displayImage(imageLocationTwo, randomProductTwo);
  randomProductThree.displayImage(imageLocationThree, randomProductThree);
}

//Inital population of the page
threeRandomProducts();

function handleClickOnOne (event) {
  console.log(event);
  event.preventDefault();


  imageLocationOne.innerHTML = ' ';
  imageLocationTwo.innerHTML = ' ';
  imageLocationThree.innerHTML = ' ';

  threeRandomProducts();
}

function handleClickOnTwo (event) {
  console.log(event);
  event.preventDefault();


  imageLocationOne.innerHTML = ' ';
  imageLocationTwo.innerHTML = ' ';
  imageLocationThree.innerHTML = ' ';

  threeRandomProducts();
}

function handleClickOnThree (event) {
  console.log(event);
  event.preventDefault();


  imageLocationOne.innerHTML = ' ';
  imageLocationTwo.innerHTML = ' ';
  imageLocationThree.innerHTML = ' ';

  threeRandomProducts();
}

imageLocationOne.addEventListener('click', handleClickOnOne);
imageLocationTwo.addEventListener('click', handleClickOnTwo);
imageLocationThree.addEventListener('click', handleClickOnThree);
