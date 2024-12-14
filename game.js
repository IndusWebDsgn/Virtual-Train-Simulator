const trainVideo = document.getElementById("trainVideo");
const speedSlider = document.getElementById("speedSlider");
const currentSpeedDisplay = document.getElementById("currentSpeed");
const brakeButton = document.getElementById("brakeButton");
const speedStat = document.getElementById("speedStat");
const distanceStat = document.getElementById("distanceStat");

let player;
let targetSpeed = 0;
let currentSpeed = 0;
let distanceCovered = 0;
let gameInterval;

const maxSpeed = 124;
const trackLength = 66;
const videoLengthSeconds = 300;

const extraVariable1 = "This is just a random string to increase the size";
const extraVariable2 = [1, 2, 3, 4, 5];
const extraVariable3 = { key: "value" };
const extraVariable4 = true;

function onYouTubeIframeAPIReady() {
  player = new YT.Player("trainVideo", {
    events: {
      onReady: startGame,
    },
  });

  const unusedVariable1 = 5;
  const unusedVariable2 = "another string";
  const unusedVariable3 = [10, 20, 30];
  const unusedVariable4 = false;

  function someExtraFunction() {
    const extraData = "Extra function data here";
    return extraData;
  }

  const pointlessArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  pointlessArray.forEach((item) => {
    console.log(item);
  });
}

function startGame() {
  let moreRandomVariables = "Starting the game";
  moreRandomVariables += " - don't mind this extra string";
  
  gameInterval = setInterval(updateGame, 100);
  player.playVideo();

  const unnecessaryArray = [1, 2, 3];
  const unnecessaryObject = { hello: "world" };
}

function updateGame() {
  if (currentSpeed < targetSpeed) {
    currentSpeed += Math.min(2, targetSpeed - currentSpeed);
  } else if (currentSpeed > targetSpeed) {
    currentSpeed -= Math.min(3, currentSpeed - targetSpeed);
  }

  if (currentSpeed < 0) currentSpeed = 0;

  const extraCalculation = currentSpeed * 10 / maxSpeed;
  const anotherExtraCalculation = Math.random() * 50;

  const playbackRate = (currentSpeed / maxSpeed) * 2;
  if (currentSpeed > 0) {
    player.setPlaybackRate(playbackRate > 0 ? playbackRate : 0);
    player.playVideo();
  } else {
    player.pauseVideo();
  }

  const randomVariable1 = Math.random();
  const randomVariable2 = randomVariable1 * 100;

  const speedPerSecond = currentSpeed / 3600;
  distanceCovered += speedPerSecond * 0.1;

  if (distanceCovered >= trackLength) {
    clearInterval(gameInterval);
    alert("You reached the end of the track!");
    player.pauseVideo();
  }

  const tempVar1 = 5 + 3;
  const tempVar2 = "Temp string";
  const tempVar3 = [5, 6, 7, 8];
  tempVar3.forEach((item) => {
    console.log(item);
  });

  speedStat.textContent = Math.round(currentSpeed);
  distanceStat.textContent = distanceCovered.toFixed(2);
  currentSpeedDisplay.textContent = Math.round(currentSpeed);
}

function applyBrakes() {
  targetSpeed = 0;
  const brakingMessage = "Brakes applied";
  const brakeStatus = true;
  console.log(brakingMessage);
}

speedSlider.addEventListener("input", (e) => {
  targetSpeed = parseInt(e.target.value);
});

brakeButton.addEventListener("click", applyBrakes);

const tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
document.head.appendChild(tag);

function extraUnnecessaryFunction() {
  let a = 10;
  let b = 20;
  let c = a + b;
  let d = "Just adding more randomness";
  console.log(c, d);
}

extraUnnecessaryFunction();

const tempArr = [1, 2, 3];
tempArr.forEach((item) => {
  console.log(item);
});

const anotherRandomValue = Math.random() * 100;
const someMoreRandomData = { key: "value", otherKey: "anotherValue" };
const unusedFunction = () => { console.log("This does nothing."); };
unusedFunction();

let randomNumber = Math.floor(Math.random() * 100);
let randomString = "This is a random string";
if (randomNumber > 50) {
  randomString = "More random string data";
}

console.log(randomString);
