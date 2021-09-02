// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
var term = new Terminal({ fontSize: 30, fontFamily: 'Courier New' });
var fitAddon = new FitAddon.FitAddon();
term.loadAddon(fitAddon);
term.open(document.getElementById('terminal'));
fitAddon.fit();
window.addEventListener('resize', function (event) {
    fitAddon.fit();
}, true);


//vi disabler pil opp og ned tastene
term.attachCustomKeyEventHandler(function (e) {
    if (e.code == "ArrowUp" || e.code == "ArrowDown") {
      return false;
    }
  });


//bruker innstillinger
var score = 0;
var currentStage = 0;
var currentModule = 0;
var failedAttempts = 0;
var maxFailedAttempts = 2;
var currentAnswer = "";
var gameisOver = false;


//helper functions
function isTheGameOver(stage) {
    if ((questions[currentModule].length-1) == stage) {
        return true
    }
    else false;
}

function resetGame() {
    currentStage = 0;
    gameisOver = false;
    score = 0;
    failedAttempts = 0;
    maxFailedAttempts = 2;
    currentAnswer = "";
}


function showFinalScore() {
    term.writeln('-----SPILLET ER SLUTT----');
    term.writeln('DU FIKK:');
    term.writeln(`${score} poeng`);
    if(score < 3){
        term.writeln("\u001b[36mI know this was your first quiz, but I suggest you try again.\033[0m")
    }
    else {
        term.writeln("Well done, lets go to the next stage?");
       
        //koden nedenfor går til modul2 av spillet
        // currentModule++;
        // resetGame();
        // print_lines(5);
        // term.writeln(questions[currentModule][currentStage].question);
        // if(questions[currentModule][currentStage].questionHelpText !== ""){
        //     term.writeln(`(Hjelp: ${questions[currentModule][currentStage].questionHelpText})`);         
        // }
    }
}

function print_lines(lines){
    for (let i = 0; i < lines; i++) {
        term.writeln("\n")
      } 
}



// -------------------------GAMELOOP---------------------
function gameLoop(userinput) {
    var _currentQuestion = questions[currentModule][currentStage];
    if (userinput.toLowerCase() == _currentQuestion.answer.toLowerCase()) {
        score = score + _currentQuestion.score;
        term.writeln('RIKTIG!!!!!!');
        term.write('\n');
        if(isTheGameOver(currentStage)){
            gameisOver = true;
            showFinalScore();
            return;
        }
        currentStage++;
        var _nextQuestion = questions[currentModule][currentStage];
        term.writeln(_nextQuestion.question);
        if(_nextQuestion.questionHelpText !== ""){
            term.writeln(`(Hjelp: ${_nextQuestion.questionHelpText})`);         
        }
    }
    else {
        term.writeln('\x1B[1;3;31mFeil!\x1B[0m');
        failedAttempts++;
        if((maxFailedAttempts-failedAttempts) == 0)
        {
            term.writeln(`-----GAME OVER-----`);
            gameisOver = true;
            return;
        }
        term.writeln(`Du har svart feil ${failedAttempts} ganger, og har ${maxFailedAttempts-failedAttempts} forsøk igjen`);
        term.writeln(_currentQuestion.question);
    }
}
// -------------------------GAMELOOP---------------------






// -------------------------BRUKER INPUT---------------------
term.onKey( e => {
    if(gameisOver){
        return;
    }
    if (e.domEvent.code == "Backspace") {
        term.write("\b \b"); //denne koden sletter tegn
        currentAnswer = currentAnswer.substring(0, currentAnswer.length-1);
        return;
    }
    
    term.write(e.key);
    if(e.key !== '\r'){
        currentAnswer = currentAnswer + e.key;
    }
    
    if (e.key == '\r') {
        term.write('\n');
        userinput = currentAnswer;
        currentAnswer = "";
        gameLoop(userinput)
    }
})
// -------------------------BRUKER INPUT---------------------




term.writeln(questions[currentModule][currentStage].question);
if(questions[currentModule][currentStage].questionHelpText !== ""){
    term.writeln(`(Hjelp: ${questions[currentModule][currentStage].questionHelpText})`);         
}