

function test_scores_chance() {
	var testcases = [
		{ dice: [1,1,1,1,1], expect:5 },
		{ dice: [1,2,1,1,1], expect:6 },
		{ dice: [1,2,3,1,1], expect:8 },
		{ dice: [1,2,3,4,1], expect:9 },
		{ dice: [2,3,4,5,6], expect:20 },
	]
}
function test_scores_yahtzee() {
	var testcases = [
		{ dice: [1,1,1,1,1], expect:50 },
		{ dice: [1,2,1,1,1], expect:0 },
		{ dice: [1,2,3,1,1], expect:0 },
		{ dice: [1,2,3,4,1], expect:0 },
		{ dice: [2,3,4,5,6], expect:0 },
	]
}
function test_scores_fullhouse() {
	var testcases = [
		{ dice: [1,1,3,3,3], expect:50 },
		{ dice: [2,4,2,4,4], expect:50 },
		{ dice: [5,6,5,6,5], expect:50 },
		{ dice: [1,2,3,4,1], expect:0 },
		{ dice: [2,3,4,5,6], expect:0 },
	]
}
function test_scores_four_of_a_kind() {
	var testcases = [
		{ dice: [1,3,3,3,3], expect:50 },
		{ dice: [4,4,2,4,4], expect:50 },
		{ dice: [5,6,5,5,5], expect:50 },
		{ dice: [1,2,3,4,1], expect:0 },
		{ dice: [2,2,4,5,2], expect:0 },
	]
}
function test_scores_shortrun() {
	var testcases = [
		{ dice: [1,2,3,4,5], expect:50 },
		{ dice: [1,2,3,4,4], expect:50 },
		{ dice: [3,6,5,3,4], expect:50 },
		{ dice: [1,2,3,3,1], expect:0 },
		{ dice: [2,2,4,5,2], expect:0 },
	]
}
function test_scores_longrun() {
	var testcases = [
		{ dice: [1,2,3,4,5], expect:50 },
		{ dice: [5,2,3,4,6], expect:50 },
		{ dice: [1,2,3,4,4], expect:0 },
		{ dice: [1,2,4,5,6], expect:0 },
		{ dice: [2,2,4,5,2], expect:0 },
	]
}