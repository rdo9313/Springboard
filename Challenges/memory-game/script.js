const gameContainer = document.getElementById("game");
let count = 0;
let firstCard;
let freezeCards = false;

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

function showCard(card) {
  count++;
  card.classList.toggle("flipped");
  card.style.backgroundColor = card.classList[0];
}

function hideCard(card) {
  card.classList.toggle("flipped");
  card.style.backgroundColor = "transparent";
}

// TODO: Implement this function!
function handleCardClick(event) {
  if (freezeCards) return;
  if (event.target.classList.length === 1) {
    showCard(event.target);
  }
  if (count === 1) {
    firstCard = event.target;
  } else {
    freezeCards = true;
    setTimeout(() => {
      if (!(firstCard.classList[0] === event.target.classList[0] && firstCard.classList[1] === event.target.classList[1])) {
        hideCard(firstCard);
        hideCard(event.target);
      }
      freezeCards = false;
    }, 1000)
    count = 0;
  }
}

// when the DOM loads
createDivsForColors(shuffledColors);
