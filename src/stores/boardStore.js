import { observable, action, computed } from 'mobx';

class BoardStore {
	@observable sciences = [];
	@observable wild = [];

	constructor() {
		this.sciences.push({ symbol: "tablet", count: 2 });
		this.sciences.push({ symbol: "compass", count: 2 });
		this.sciences.push({ symbol: "gear", count: 2 });

		// Both wildcards default to false
		this.wild.push(false);
		this.wild.push(false);
	}

	@action toggleWild = (index) => {
		this.wild[index] = !this.wild[index];
	}

	// Get the score of the cards passed.
	getScore = (countArray) => {
		var score = 0;

		countArray.forEach(count => {
			score += (count * count);
		});

		var sets = Math.min(...countArray)

		score += (sets * 7);
		return score;
	}


	@computed get total() {
		var total = this.getScore(this.totalArray, this.sets);
		return total;
	}

	@computed get sets() {
		return Math.min(...this.totalArray)
	}

	@computed get scienceCardArray() {
		return this.sciences.map(science => science.count);
	}

	@computed get wildCardArray() {
		// Gets the difference between the best scoring possibility and the cards actually selected.
		// We may need to show where the wildcards go
		var result = [];
		for (let i = 0; i < this.totalArray.length; i++) {
			result.push(this.totalArray[i] - this.scienceCardArray[i]);
		}

		return result;
	}

	// Total cards including wildcards for scoring purposes
	// This method could use some ES6 sauce to make it shorter!
	@computed get totalArray() {
		var wildCardCount = this.wild.filter(v => v).length;
		var allPossibilities = this.getAllCombinations(this.scienceCardArray, wildCardCount);

		var highest = 0;
		var highestPos;

		// Get the highest scoring placement for the wildcards.
		allPossibilities.forEach(pos => {
			var posScore = this.getScore(pos);
			if (posScore > highest) {
				highest = posScore;
				highestPos = pos;
			}
		});

		return highestPos;
	}

	// Recursive function to determine best place to put wildcards
	getAllCombinations = (countArray, wildCardsLeft) => {
		// escape condition
		if (wildCardsLeft <= 0) return [countArray];

		var possibilities = [];

		// We try adding a wild card to each of the columns
		for (var i = 0; i < countArray.length; i++) {
			var potentialArray = [...countArray];
			potentialArray[i]++; // Add wildcard

			// And then every column of that possibility. They may need to go on different columns.
			possibilities.push(...this.getAllCombinations(potentialArray, wildCardsLeft - 1));
		}

		return possibilities;
	}

	@action addTech = (clicked) => {
		var match = this.sciences.find((science) => { return science.symbol === clicked.symbol });
		match.count++;
	}

	@action removeTech = (clicked) => {
		var match = this.sciences.find((science) => { return science.symbol === clicked.symbol });
		match.count--;
	}
}

export default new BoardStore();
