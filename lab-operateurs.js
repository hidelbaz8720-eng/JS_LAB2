console.log("===== Lab JavaScript : Opérateurs =====");


var score = 8;
console.log("Compétences de niveau moyen:", score > 0 && score < 10);


var timeRemaining = 0;
var energy = 10;
console.log("Fin du jeu:", timeRemaining === 0 || energy === 0);

var num1 = 2;
var num2 = 5;

var test1 = num1 % 2;
var test2 = num2 % 2;

var result1 = test1 == 0;
var result2 = test2 == 0;

console.log("Est-ce que", num1, "est un nombre pair ?", result1);
console.log("Est-ce que", num2, "est un nombre pair ?", result2);


console.log(5 + 10); // 15


var now = "Now in ";
var three = 3;
var d = "D!";
console.log(now + three + d);

var counter = 0;
counter += 5;
counter += 3;
console.log(counter); // 8