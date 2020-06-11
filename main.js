const pack = document.querySelectorAll('.card');
const cards = [...pack];
const moves = document.getElementById('moves');
const restart = document.getElementById('restart');

const shopkinsImage = {
    card1: "./images/banan.jpg",
    card2: "./images/tissue.jpg",
    card3: "./images/ice.png",
    card4: "./images/cake.jpg",
    card5: "./images/lip.png",
    card6: "./images/pan.png",
    card7: "./images/apple.jpg",
    card8: "./images/donut.jpg",
    
}

// shuffle cards
let openedCards = [];
let match = 1;
let totalMatched = [];
let movesCount = 0;

// click cards show, stay shown, close
const cardOpen =(card) => {
    openedCards.push(card);
    let length = openedCards.length;
    if(length === 2) {
        moveCounter();
        if (openedCards[0].alt === openedCards[1].alt) {
            matched();
            totalMatched.push();
        } else {
            unmatched();
        }
    }
};

const matched = () => {
    openedCards[0].classList.toggle('matched');
    openedCards[1].classList.toggle('matched');
    openedCards = [];
}

const unmatched= () => {
    openedCards[0].classList.toggle('start');
    openedCards[1].classList.toggle('start');
    openedCards[0].src= "./images/shopkin.jpg";
    openedCards[1].src= "./images/shopkin.jpg";
    openedCards = [];
}

const showCard = (event) => { 
    event.target.src = shopkinsImage[event.target.alt]
    console.log(event.target.alt)
}

for (const card of cards) {card.addEventListener('click', (event) =>{
 showCard(event);
 cardOpen(event.target);
})}
    
let moveCounter = () => {
    movesCount ++;
    moves.innerHTML= movesCount;
}

const shuffle = (cards) => {
    let currentIndex = cards.length, temporaryValue, randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = cards[currentIndex];
      cards[currentIndex] = cards[randomIndex];
      cards[randomIndex] = temporaryValue;
    }
    return cards;
  }

const gameArea = document.querySelector(".cards");
const cardsInHtml = (cards) => {
    gameArea.innerHTML = "";
    cards.forEach(card => {
        gameArea.appendChild(card);
    })
}


const beginGame = () => {
   let shuffledCards = shuffle(cards);
    cardsInHtml(shuffledCards);
}

 
const startGame =()=> {
    let timeout
    let zero = 0;
    display = document.getElementById('timer');
    movesCount = 0;
    clearInterval(timeout);
    startTimer(zero, display);
    beginGame();
 };
const startTimer = (duration, display) => {
    let timer = duration, minutes, seconds;
    timeout = setInterval( () => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;
        if (++ timer < 0) {
            timer = duration;
        }
    }, 1000);
}

const restartGame = () =>{restart.addEventListener('click',startGame)};
   
let finalScore = () => {
    if (totalMatched.length === 8)
    document.querySelector('congrats').classList.toggle('finish');
    document.createTextNode(`Congrats you finished in ${'movesCount.textContet'} moves and a time of ${'timer'}`);
    // document.getElementById("myAudio");
};

window.onload= startGame();

 //pause
const textWrapper = document.querySelector('.title');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.title .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 100*i
  }).add({
    targets: '.title',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 8000
  });