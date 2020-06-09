// get the html elements
const card = document.querySelectorAll('a');
const cards = [...card];
const reset= document.getElementById('reset');

//timer, click start to begin
const startGame =()=> {
    const zero = 0,
    display = document.getElementById('timer');
    startTimer(zero, display);
 };
const start = document.getElementById('start').addEventListener('click', startGame);
const startTimer = (duration, display) => {
    let timer = duration, minutes, seconds;
    setInterval(function () {
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


// add event listener to each card .for each
const displayCard = () =>{
    this.classlist.toggle('open');
    this.classlist.toggle('show');
    this.classlist.toggle('dontshow');
    for (const card of cards) {card.addEventListener('click', displayCard)};
};
// defualt hide card then when click display card 


// randomise the cards

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
//     return array;
//   }

// const deck = document.querySelector(".deck");
//     function beginGame(){
//    var shuffledCards = shuffle(cards);
//    for (var i= 0; i < shuffledCards.length; i++){
//       [].forEach.call(shuffledCards, function(item){
//          deck.appendChild(item);
//       });
//    }
// }


//cards match - keep open / cards dont match - hide again




// record one move



// go again



// all cards matched - show score and number of moves