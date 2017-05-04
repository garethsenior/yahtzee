jest.unmock('../ytz');

// first let's get a lookup table of the scoring objects
function keyed_scored(game) {
	var keys = {};
	for (var i=0; i<game.complex_scores.length; i++) {
		var score_obj = game.complex_scores[i];
		keys[score_obj['name']] = score_obj;
	}
	return keys;
} 

describe('score Yahtzee', () => {
	it('correctly scores a Yahtzee as 50 pts', () => {
		const ytz = require('../ytz')
		const game = ytz();
		const score_objs = keyed_scored(game);
		// test all possible yahtzee scores
		for (var i=1; i<=6; i++) {
			var score_desc = game.dice_utils.create_dice_desc([i,i,i,i,i]);
			var yahtzee = score_objs['Yahtzee'].calc_score(score_desc);
			expect(yahtzee).toBe(50);
		}
	});
	it('correctly scores a non-Yahtzee as 0 pts', () => {
		const ytz = require('../ytz')
		const game = ytz();
		const score_objs = keyed_scored(game);
		for (var i=0; i<=4; i++) {
			var scores = [5,5,5,5,5];
			scores[i] = 2;
			var score_desc = game.dice_utils.create_dice_desc(scores);
			var yahtzee = score_objs['Yahtzee'].calc_score(score_desc);
			expect(yahtzee).toBe(0);
		}
	});
});

describe('score Full House', () => {
	it('correctly scores a Full House as 25 pts', () => {
		const ytz = require('../ytz')
		const game = ytz();
		const score_objs = keyed_scored(game);
		const scores = [
			[1,1,3,3,3],
			[2,2,2,3,3],
			[6,6,1,1,6],
			[2,4,2,4,4],
			[5,6,5,6,5]
		];
		for (var i=1; i<scores.length; i++) {
			var score_desc = game.dice_utils.create_dice_desc(scores[i]);
			var score = score_objs['Full House'].calc_score(score_desc);
			expect(score).toBe(25);
		}
	});
	it('correctly scores a non-Full House as 0 pts', () => {
		const ytz = require('../ytz')
		const game = ytz();
		const score_objs = keyed_scored(game);
		const scores = [
			[1,3,3,3,3],
			[2,2,2,2,2],
			[6,6,1,1,5],
			[2,4,2,4,3],
			[5,6,1,6,5]
		];
		for (var i=1; i<scores.length; i++) {
			var score_desc = game.dice_utils.create_dice_desc(scores[i]);
			var score = score_objs['Full House'].calc_score(score_desc);
			expect(score).toBe(0);
		}
	});
});

describe('score a short run', () => {
	it('correctly scores a Short Run as 30 pts', () => {
		const ytz = require('../ytz')
		const game = ytz();
		const score_objs = keyed_scored(game);
		const scores = [
/*
			[1,2,3,4,1],
			[1,2,3,4,2],
			[1,2,3,4,3],
			[1,2,3,4,4],
*/
			[1,2,3,4,5],
			[1,2,3,4,6],
/*
			[2,3,4,5,5],
			[2,5,3,4,5],
			[2,3,5,4,5],
			[2,3,4,5,5],
			[6,2,3,4,5]
*/
		];
		for (var i=1; i<scores.length; i++) {
			var score_desc = game.dice_utils.create_dice_desc(scores[i]);
			var score = score_objs['Short Run'].calc_score(score_desc);
			expect(score).toBe(30);
		}
	});
/*
	it('correctly scores a non-Short Run as 0 pts', () => {
		const ytz = require('../ytz')
		const game = ytz();
		const score_objs = keyed_scored(game);
		const scores = [
			[1,2,3,3,1],
			[1,2,3,3,2],
			[1,2,3,3,3],
			[1,2,3,5,5]
		];
		for (var i=1; i<scores.length; i++) {
			var score_desc = game.dice_utils.create_dice_desc(scores[i]);
console.log(score_desc)
			var score = score_objs['Short Run'].calc_score(score_desc);
			expect(score).toBe(0);
		}
	});
*/
});
