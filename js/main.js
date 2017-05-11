
var cards = ["queen", "queen", "king", "king"];
var cardOne = cards[0];
var cardTwo = cards[2];
var cardsInPlay = [];
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);
if (cardsInPlay.length===2){
	console.log("correct length")
}
if (cardsInPlay[1]===cardsInPlay[0]) {
	alert("You found a match!");
}else{
	alert("try again");
}
for (var i = 0; i < cardsInPlay.length; i++) {
	console.log("User flipped " + cardsInPlay[i]);
}
