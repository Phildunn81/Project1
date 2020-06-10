const pack = document.querySelectorAll('.card');
const cards = [...pack];
const moves = document.getElementById('moves');

// shuffle cards

let openedCards = []
// click cards show, stay shown, close
const cardOpen =(card) => {
    openedCards.push(card);
    console.log(openedCards)
    let length = openedCards.length;
    if(length === 2) {
        moveCounter();
        if (openedCards[0].alt === openedCards[1].alt) {
            matched();
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

const unmatched= () =>{
    openedCards[0].classList.toggle('close');
    openedCards[1].classList.toggle('close');
    openedCards = [];
}

const showCard = (event) => {  
    event.target.classList.toggle('show');
}
for (const card of cards) {card.addEventListener('click', (event) =>{
    console.log(event.target)
 showCard(event);
 cardOpen(event.target);
})}
    


// click 2 cards add 1 to moves
const moveCounter = () => {
    let movesCount = 0;
    movesCount ++;
    moves.innerHTML= movesCount;
}

// start game and timer when window open

const startGame =()=> {
    const zero = 0,
    display = document.getElementById('timer');
    startTimer(zero, display);
 };
const startTimer = (duration, display) => {
    let timer = duration, minutes, seconds;
    setInterval( () => {
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

//restart game
const restartGame = () =>{
    timer=0;
    moves =0;
}


// final score

const finalScore = () =>{
    if (matched);
}
window.onload= startGame();
 //pause





 // // randomise the cards

// const shuffle(cards) => {
//     for(let i = cards.length — 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * i)
//     const temp = cards[i]
//     cards[i] = cards[j]
//     cards[j] = temp
//   };
// };

// const shuffle = (cards) => {
//     let currentIndex = cards.length, temporaryValue, randomIndex;
//     while (currentIndex !== 0) {
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex -= 1;
//       temporaryValue = cards[currentIndex];
//       cards[currentIndex] = cards[randomIndex];
//       cards[randomIndex] = temporaryValue;
//     }
//     return cards;
//   }

// const deck = document.querySelector(".deck");
//     function beginGame(){
//    let shuffledCards = shuffle(cards);
//    for (let i= 0; i < shuffledCards.length; i++){
//       [].forEach.call(shuffledCards, function(item){
//          deck.appendChild(item);
//       });
//    }
// }