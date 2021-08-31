var questions = {};
questions[0] = []; //module0
questions[1] = []; //module1
questions[2] = []; //osvs...

var q1 = {};
q1.stage = 0;
q1.question = 'hva er 1+1?';
q1.questionHelpText = "1,2 eller 3";
q1.answer = "2";
q1.score = 1;
questions[0].push(q1);



var q2 = {};
q2.stage = 1;
q2.question = "hva er 3 x 4";
q2.questionHelpText = "(9, 16, 12)";
q2.answer = "12";
q2.score = 3;

questions[0].push(q2);



var q3 = {};
q3.stage = 2;
q3.question = "Jostein sover i sofaen  - Jostein is sleeping in the car";
q3.questionHelpText = "Her skal man svare korrekt eller ikke korrekt";
q3.answer = "ikke korrekt";
q3.score = 5;

questions[1].push(q3);
