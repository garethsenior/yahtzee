var ytz = function() {
	var game = {
		init: function() {
			this.init_simple_scores();
			return this;
		},
		init_simple_scores: function() {
			// generate simple scores
			var scores = ['Six', 'Five', 'Four', 'Three', 'Two', 'One']
			for (var i in scores) {
				this.simple_scores.shift(this.dice_utils.generate_simple_score_obj(scores[i], scores.length-i));
			}
		},
		simple_scores: [],
		complex_scores: [
			{
				'name': 'Three Of A Kind',
				'description': 'Three dice with matching values',
				'calc_score': function(score_desc) {
					if ((score_desc['mulitiples'][3] >= 1) || (score_desc['mulitiples'][4] >= 1) || (score_desc['mulitiples'][5] >= 1)) {
						return score_desc['total'];
					}
					return 0;
				},
				'score': 0
			},
			{
				'name': 'Four Of A Kind',
				'description': 'Four dice with matching values',
				'calc_score': function(score_desc) {
					if ((score_desc['mulitiples'][4] >= 1) || (score_desc['mulitiples'][5] >= 1)) {
						return score_desc['total'];
					}

					return 0;
				},
				'score': 0
			},
			{
				'name': 'Short Run',
				'description': 'A run of 4 consecutive numbers',
				'that': this,
				'calc_score': function(score_desc) {
					var uniques = score_desc['unique_scores'].sort();
					var poss = [
						[1, 2, 3, 4],
						[2, 3, 4, 5],
						[3, 4, 5, 6]
					];
// hmmm, indexOf doesnt work here, and comparing arrays doesn't either :(
console.log(poss)
console.log(uniques)
					var uniques1 = uniques.slice(0,4);
console.log(uniques1)
					for (var i=0; i<poss.length; i++) {
console.log(i, poss.length)
console.log(this['that'])
						if (this['that'].dice_utils.compare_arrays(poss[i], uniques1)) {
console.log("MATCH")
//							return this.score;
						}
console.log("NOT A MATCH")

					}
console.log("... no score ...")

					return 0;
				},
				'score': 30
			},
			{
				'name': 'Long Run',
				'description': 'A run of 5 consecutive numbers',
				'calc_score': function(score_desc) {
					var uniques = score_desc['unique_scores'].sort();
					if (uniques.length == 5) return this.score;
					return 0;
				},
				'score': 40
			},

			{
				'name': 'Full House',
				'description': 'A pair and a three',
				'calc_score': function(score_desc) {
					// need a pair and a three
					if ((score_desc['multiples'][2] >= 1) && (score_desc['multiples'][3] >= 1)) {
						return this.score;
					}
					return 0;
				},
				'score': 25
			},
			{
				'name': 'Chance',
				'description': 'Total of all die scores',
				'calc_score': function(score_desc) {
					return score_desc['total'];					
				},
				'score': 0
			},
			{
				'name': 'Yahtzee',
				'description': 'Score the sum of the values of all the die faces showing one',
				'calc_score': function(score_desc) {
					if (score_desc['multiples'][5] === 1) return 50;
					return 0;
				},
				'score': 0
			},
		],

		dice_utils: {
			roll_die: function() {
				return Math.ceil(Math.random() * 6);
			},
			generate_simple_score_obj: function(name, score) {
				/*
				factory method that generates the simple score objects
				*/
				return {
					'name': name,
					'description': 'Score the sum of the values of all the die faces showing ' + name + '.',
					'die_score': score,
					'calc_score': function(score_desc) { return score_desc['score_counts'][this.die_score] * this.die_score; },
					'score': 0
				}
			},
			create_dice_desc: function(die) {
				/* given an array of numbers, returns an object describing that array, e.g:
				{
					unique_scores: [1, 3, 6],
					score_counts: [undefined, 2, 1, 0, 0, 0, 2], 	// 2 x ones, 1 x two, 0 x threes/fours/fives, 2 x sixes
					multiples: [undefined, 1, 2, 0, 0, 0],			// one single, 2 pairs, 0 threes, fours or fives
					total: 16 										// (2x1) + (1x2) + (2x6)
				}
				 */
				var unique_scores = [],
					score_counts = [undefined, 0, 0, 0, 0, 0, 0],
					multiples = [undefined, 0, 0, 0, 0, 0],
					total = 0;
				
				for (var i in die) {
					var val = die[i];
					total = total + val;
					if (unique_scores.indexOf(val) === -1) {
						unique_scores.push(val);
					}
					var curr_count = score_counts[val];
					if (curr_count > 0) {
						multiples[curr_count]--;
					}
					multiples[curr_count+1]++;
					score_counts[val]++;
				}
				return {
					'unique_scores': unique_scores,
					'score_counts': score_counts,
					'multiples': multiples,
					'total': total
				}
			}
		},
		compare_arrays: function(arr1, arr2) {
			/* compares array values */
			// do the cheap reliable compairsons first
console.log(arr1, arr2)
console.log(arr1.length, arr2.length)
			if (arr1.length !== arr2.length) return false;
			if (arr1 === arr2) return true;
			for (var i in arr1) {
console.log(arr1[i], " v ", arr2[i])
				if (arr1[i] !== arr2[i]) return false;
			}
			return true;
		}
	}
	return game.init();
}
try {
	module.exports = ytz
}
catch (e){
// do nothng
}