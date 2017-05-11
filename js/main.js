
var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];

var cardsInPlay = [];

var flipCard = function(cardId){
	console.log("User flipped " + cards[cardId].rank);
	console.log("User flipped " + cards[cardId].cardImage);
	console.log("User flipped " + cards[cardId].suit);
	cardsInPlay.push(cards[cardId]);
}

var checkForMatch = function(){
	if (cardsInPlay[1]===cardsInPlay[0]) {
		alert("You found a match!");
	}else{
		alert("try again");
	}
}
flipCard(0);
flipCard(2);
checkForMatch();