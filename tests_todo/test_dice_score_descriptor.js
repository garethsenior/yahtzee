function test_unique_scores_feedback() {
	var testcases = [
		{ dice: [1,1,1,1,1], expect:[1] },
		{ dice: [1,2,1,1,1], expect:[1,2] },
		{ dice: [1,2,3,1,1], expect:[1,2,3] },
		{ dice: [1,2,3,4,1], expect:[1,2,3,4] },
		{ dice: [2,3,4,5,6], expect:[2,3,4,5,6] },
	]
}
function test_total_score() {
	var testcases = [
		{ dice: [1,1,1,1,1], expect:5 },
		{ dice: [1,2,1,1,1], expect:6 },
		{ dice: [1,2,3,1,1], expect:8 },
		{ dice: [1,2,3,4,1], expect:11 },
		{ dice: [2,3,4,5,6], expect:20 },
	]
}
function test_score_counts_feedback() {
	var testcases = [
		{ dice: [1,1,1,1,1], expect:[undefined, 5, 0, 0, 0, 0, 0] },
		{ dice: [1,2,1,1,1], expect:[undefined, 4, 1, 0, 0, 0, 0] },
		{ dice: [1,2,3,1,1], expect:[undefined, 3, 1, 1, 0, 0, 0] },
		{ dice: [1,2,3,4,1], expect:[undefined, 2, 1, 1, 1, 0, 0] },
		{ dice: [2,3,4,5,6], expect:[undefined, 0, 1, 1, 1, 1, 1] },
	]
}