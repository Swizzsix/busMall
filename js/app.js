'use strict';

// // randomly want to put three busMallAssets on the screen

// // allows users to click on one of three busMallAssets

// // tally the votes each asset onclicks

// // allow a certain number of votes and stop voting after that

// // a user clicks on an asset
// // add to the asset object
// // check how votes we have so far, if we still have votes left
// // render more assets
// // repeat
// // if not turn off listener
// // render results

// -------------------------- global variables/constants
const resultsPannelUlElem = document.getElementById('asset-clicks');
const assetImageSectionTag = document.getElementById('all_assets');
const leftAssetImageTag = document.getElementById('left_asset_img');
const middleAssetImageTag = document.getElementById('middle_asset_img');
const rightAssetImageTag = document.getElementById('right_asset_img');
const leftAssetH2Elem = document.getElementById('left_asset_h2');
const middleAssetH2Elem = document.getElementById('middle_asset_h2');
const rightAssetH2Elem = document.getElementById('right_asset_h2');

let assetClicks = 0;

// come back to define current assets
let currentRightAsset = null;
let currentMiddleAsset = null;
let currentLeftAsset = null;

// goat constructor function
// names, image
function Asset(name, imgPath) {
  this.name = name;
  this.imgPath = imgPath;
  this.votes = 0;
  this.timesShown = 0;

   // you might not see this in production code depending on where you work but it is a handy way of getting every goat into the allGoat array every time you make one
  Asset.allAssets.push(this)
}

// let locations = [];
Asset.allAssets = [];

// make a method that renders one goat to the page
// needs to know 'this'
// needs to know where to render it h2 image tag
Asset.prototype.renderAsset = function(h2, imageTag) {
  imageTag.src = this.imgPath;
  h2.textContent = this.name;
}

// make a global function that takes two goats and calls their render method - take two goats as arguments
function renderThreeAssets(leftAsset, middleAsset, rightAsset) {
  leftAsset.renderAsset(leftAssetH2Elem, leftAssetImageTag);
  middleAsset.renderAsset(middleAssetH2Elem, middleAssetImageTag);
  rightAsset.renderAsset(rightAssetH2Elem, rightAssetImageTag);
}

// build this after the pick new goats function?
const renderNewAssets = function (leftIndex, middleIndex, rightIndex){
  // we render goats based off the random goat we picked
  leftAssetImageTag.src = AssetPicture.allImages[leftIndex].url;
  leftAssetH2Elem.textContent = AssetPicture.allImages[leftIndex].name;
  middleAssetImageTag.src = AssetPicture.allImages[middleIndex].url;
  middleAssetH2Elem.textContent = AssetPicture.allImages[middleIndex].name;
  rightAssetImageTag.src = AssetPicture.allImages[rightIndex].url;
  rightAssetH2Elem.textContent = AssetPicture.allImages[rightIndex].name;
};

// // pick random goats
// // maybe want have those global vars that represent the current goats that we pick
// // write a function that picks one goat, and then another, making sure the first and the second goat are not the same
function pickAssets() {
  const leftAssetIndex = Math.floor(Math.random() * Asset.allAssets.length);
  // let rightAssetIndex = Math.floor(Math.random() * Asset.allAssets.length)
  // while (rightAssetIndex === leftAssetIndex) {
  //   rightAssetIndex = Math.floor(Math.random() * Asset.allAssets.length)
  // }
  let rightAssetIndex;
  while (rightAssetIndex === undefined || rightAssetIndex === leftAssetIndex) {
    rightAssetIndex = Math.floor(Math.random() * Asset.allAssets.length);
  }
  // lets assign the current left and current right assets based off the index numbers we got ^^^^
  currentLeftAsset = Asset.allAssets[leftAssetIndex];
  // currentMiddleAsset = Asset.allAssets[middleAssetIndex];
  currentRightAsset = Asset.allAssets[rightAssetIndex];
}

function renderResults() {
  resultsPannelUlElem.innerHTML = '';
  const h2Elem = document.createElement('h2');
  h2Elem.textContent = 'Asset Likes';
  resultsPannelUlElem.appendChild(h2Elem);
  for (let asset of Asset.allAssets) {
    Aset.allAssets[i] === asset
    const liElem = document.createElement('li');
    liElem.textContent = `${asset.name} : ${asset.votes}`;
    resultsPannelUlElem.appendChild(liElem);
  }

  for (let i = 0; i < Asset.allAssets.length; i++) {
    let goat = Asset.allAssets[i];
    const liElem = document.createElement('li');
    liElem.textContent = `${asset.name} : ${asset.votes}`;
    resultsPannelUlElem.appendChild(liElem);
  }
}

function handleClick(e) {
  console.log('I am listening');
  let thingTheyClickedOn = e.target;
  console.log(thingTheyClickedOn);
  // we need to account for votes
 if (assetClicks < 10) {
    if (thingTheyClickedOn === leftAssetImageTag || thingTheyClickedOn === middleAssetImageTag || thingTheyClickedOn === rightAssetImageTag) {
      // count the vote/ increment our vote count
      voteCounter++;
      // add to the goat they clicked ons votes
      if (thingTheyClickedOn === leftAssetImageTag) {
        currentLeftAsset.votes++;
      } else {
        currentRightAsset.votes++;
      }

      // render new
      pickAssets();
      renderThreeAssets(currentLeftAsset, currentMiddleAsset, currentRightAsset);
      // alert('you got it')
    } else {
      alert('You really missed the asset!');
    }
  } else {
    assetImageSectionTag.removeEventListener('click', handleClick);
    // alert('This is where we would render our results');
    renderResults();
  }
}

// add a listener and a handler

assetImageSectionTag.addEventListener('click', handleClick)

new Asset('Bag Asset', './assets/bag.jpg');

new Asset('Banana Asset', './assets/banana.jpg');
new Asset('Bathroom Asset', './assets/bathroom.jpg');
new Asset('Boots Asset', './assets/boots.jpg');
new Asset('Breakfast Asset', './assets/breakfast.jpg');
new Asset('Bubblegum Asset', './assets/bubblegum.jpg');
new Asset('Chair Asset', './assets/chair.jpg');
new Asset('Cthulhu Asset', './assets/cthulhu.jpg');
new Asset('Dragon Asset', './assets/dog-duck.jpg');
new Asset('Pen Asset', './assets/pen.jpg');
new Asset('Pet-Sweep Asset', './assets/pet-sweep.jpg');
new Asset('Scissors Asset', './assets/scissors.jpg');
new Asset('Shark Asset', './assets/shark.jpg');
new Asset('Sweep Asset', './assets/sweep.jpg');
new Asset('Tauntaun Asset', './assets/tauntaun.jpg');
new Asset('Unicorn Asset', './assets/unicorn.jpg');
new Asset('Water-Can Asset', './assets/water-can.jpg');
new Asset('Wine-Glass Asset', './assets/wine-glass.jpg');

pickAssets();
console.log(currentRightAsset)
console.log(currentMiddleAsset)
console.log(currentLeftAsset)
renderThreeAssets(currentLeftAsset, currentMiddleAsset, currentRightAsset)