var questions = {};
questions[0] = []; //module0
questions[1] = []; //module1
questions[2] = []; //osvs...


// MODUL 1
var q1 = {};
q1.stage = 0;
q1.question = 'hva er \u001b[36m 1+1 \033[0m?'; //det er lov å bruke fargekoder her som: \u001b[36mI blabla \033[0m
q1.questionHelpText = "1,2 eller 3"; //det er lov å bruke fargekoder her som: \u001b[36mI blabla \033[0m
q1.answer = "2";
q1.score = 1;
questions[0].push(q1);



var q2 = {};
q2.stage = 1;
q2.question = "hva er 3 x 4";
q2.questionHelpText = "(9, 16, 12)";
q2.answer = "12;tolv";
q2.score = 1;

questions[0].push(q2);

var q3 = {};
q3.stage = 2;
q3.question = "Hva er 2+2?";
q3.questionHelpText = "";
q3.answer = "4;fire;four"; //seerator ;
q3.score = 1;

questions[0].push(q3);



// MODUL 2
var q4 = {};
q4.stage = 2;
q4.question = "Jostein sover i sofaen  - Jostein is sleeping in the car";
q4.questionHelpText = "Her skal man svare korrekt eller ikke korrekt";
q4.answer = "ikke korrekt";
q4.score = 1;

questions[1].push(q4);
