
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var checkForMatch = function(){
	if (cardsInPlay[1]===cardsInPlay[0]) {
		alert("You found a match!");
	}else{
		alert("try again");
	}
}

var flipCard = function(cardId){
	console.log("User flipped " + cards[cardId]);
}

flipCard(0);
flipCard(1);
checkForMatch();