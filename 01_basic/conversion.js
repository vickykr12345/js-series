let score = ["qwerty", 12345];

console.log(typeof score); // result => object
console.log(typeof(score)); // result => object

let scoring = "qwerty234";
let max_score = Number (scoring);

console.log(typeof max_score); // result => number
console.log(max_score);  // result => nan


let maxxin_score = null;
console.log(maxxin_score); // result => null
let maxxin_score_get = Number(maxxin_score);
console.log(maxxin_score_get); // result => 0

let low_score = undefined;
let low_score_get = Number(low_score);
console.log(low_score_get); // result => nan

let low_score1 = false;
let low_score_get1 = Number(low_score1);
console.log(low_score_get1); // result => 0, because low_score1 varibale is boolean and in boolean true is 1 and false is 0

let is_logged_in = "";
let iss_logged_in = Boolean(is_logged_in);
console.log(iss_logged_in); // result => true ; when we check with empty string they give the answer of false 