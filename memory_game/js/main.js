///


var cards = ["Queen", "Queen", "King", "King"];
var cardsInPlay = [];


function checkForMatch() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log("you found a match");}
    else {console.log("sorry, try again");
  }
}

function flipCard (cardId) {
  console.log("user flipped " + cards[cardId]);
  cardsInPlay.push(cards[cardId]);

  if (cardsInPlay.length === 2) {
    checkForMatch();
  }
}

flipCard(0);
flipCard(2);
