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

// -------------------------START---------------------

score = 0

term.writeln("1) What is 1+1?")
term.writeln("\n")
term.writeln("1")
term.writeln("2")
term.writeln("3")
term.writeln("\n")

question1 = "";
answer1 = ("2")
term.writeln("\n")

if (question1 == answer1) {
    term.writeln("Correct!")
    score = score + 1
}
else {
    term.writeln("Incorrect!")
    //term.writeln("Score: " + str(score))
    term.writeln("\n")
    term.writeln("\n")
}


term.writeln('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ')
term.writeln("\u001b[36mPretty good!\033[0m")


// ------------------------SLUTT---------------



window.addEventListener('resize', function (event) {
    fitAddon.fit();
}, true);

term.onKey(e => {
    console.log(e.key);
    term.write(e.key);
    if (e.key == '\r')
        term.write('\n');
})