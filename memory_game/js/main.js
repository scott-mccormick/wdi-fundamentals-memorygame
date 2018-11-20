let cards = [{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
}, {
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
}, {
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
}, {
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}];
let cardsInPlay = [];
let userScore = 0;

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
		updateScore();
	} else {
		alert("Sorry, try again.");
	}
}

function flipCard() {
	var cardId = this.getAttribute("data-id");
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute("src", cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
	if (cardsInPlay.length === 1) {
		document.getElementById('reset-btn').classList.toggle('hidden');
	}
}

function createBoard() {
	for(var i = 0; i < cards.length; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
	var resetButton = document.getElementById('reset-btn');
	resetButton.addEventListener('click', resetGame);
}

function resetGame() {
	var gameCards = document.querySelectorAll('#game-board img');
	for(var i = 0; i < gameCards.length; i++){
		gameCards[i].setAttribute('src', 'images/back.png');
	}
	cardsInPlay = [];
	document.getElementById('reset-btn').classList.toggle('hidden');
}

function updateScore() {
	userScore++;
	var scoreBoard = document.getElementById('user-score');
	scoreBoard.innerHTML = userScore;
}

createBoard();