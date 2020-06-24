const pack = document.querySelectorAll('.card');
const cards = [...pack];
const moves = document.getElementById('moves');
const restart = document.getElementById('restart');
const display = document.getElementById('timer');
const modal = document.getElementById('modal');
const modalText = document.getElementById('modal-text');
const span = document.getElementsByClassName("close")[0];
const audio = new Audio('cheeky_monkey_fun_app_playful_cheeky.mp3');


const shopkinsImage = {
    card1: "./images/banan.jpg",
    card2: "./images/tissue.jpg",
    card3: "./images/ice.png",
    card4: "./images/cake.jpg",
    card5: "./images/lip.png",
    card6: "./images/pan.png",
    card7: "./images/apple.jpg",
    card8: "./images/donut.jpg",
    card9: "./images/toast.jpg",
    card10: "./images/strawberry.jpg",
};

let openedCards = [];
let totalMatched = [];
let movesCount = 0;
let timeout;
let zero = 0;

//loops through cards and asigns a eventlistner that triggers image change and the cardopen logic below
for (const card of cards) {card.addEventListener('click', (event) =>{
    showCard(event);
    cardOpen(event.target);
   })}
//matches the object of images with the alt description in html for the cards thats targeted to show the card
const showCard = (event) => { 
    event.target.src = shopkinsImage[event.target.alt]
};
// loops through the cards, checking for matches of 2
const cardOpen =(card) => {
    openedCards.push(card);
    let length = openedCards.length;
    if(length === 2) {
        moveCounter();
        if (openedCards[0].alt === openedCards[1].alt) {
            matched();
            totalMatch();
        } else {
        unmatched();
        }
    }
};
//matched function, toggles CSS  
const matched = () => {
    openedCards[0].classList.toggle('matched');
    openedCards[1].classList.toggle('matched');
    openedCards = [];
}; 
//unmatched function with a delay, 
const unmatched= () => {
    setTimeout(() => {
    openedCards[0].src= "./images/shopkin.jpg";
    openedCards[1].src= "./images/shopkin.jpg";
    openedCards = [];
},250);
};
//counts the moves stored in moves count variable and displayed in moves html
const moveCounter = () => {
    movesCount ++;
    moves.innerHTML= movesCount;
};
// shuffles card
const shuffle = (cards) => {
    let currentIndex = cards.length, temporaryValue, randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = cards[currentIndex];
      cards[currentIndex] = cards[randomIndex];
      cards[randomIndex] = temporaryValue;
    };
    return cards;
};
// puts shuffled cards back into the html grid
const gameArea = document.querySelector(".cards");
const cardsInHtml = (cards) => {
    gameArea.innerHTML = "";
    cards.forEach(card => {
        gameArea.appendChild(card);
    });
};
// starts the game off
const startGame =()=> {
    moves.innerHTML =0;
    clearInterval(timeout);
    startTimer(zero, display);
    beginGame();  
    changeImageBack();
    audio.play()
};
// changes images back to original
const changeImageBack = () => {
    cards.forEach(card=> { 
        card.src = "./images/shopkin.jpg";
    });
};
   // shuffles cards at the start of the game
const beginGame = () => {
    let shuffledCards = shuffle(cards);
     cardsInHtml(shuffledCards);
};
 // starts the timer
const startTimer = (duration, display) => {
    let timer = duration, minutes, seconds;
    timeout = setInterval( () => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;
        if (++ timer < 0) {
            timer = duration;
        }
    }, 1000);
};
//Pops out a modal when the game is over
 const totalMatch = (match) => {
    totalMatched.push(match);
    let leng = totalMatched.length;
    if(leng >= 10) { 
        modal.style.display = "block";
        modalText.innerHTML = `Congratulations!!\n Time: ${display.textContent} Moves: ${movesCount}`;
    }
};
// click to close the modal
span.onclick = function() {
    modal.style.display = "none";
};
  
// click outside modal to close modal
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
};
  
    // document.getElementById("myAudio");
    // new Audio

// restart button
restart.addEventListener('click', startGame);
// calls the start game function
startGame();





//pause
// const textWrapper = document.querySelector('.title');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
