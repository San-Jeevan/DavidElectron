// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

function randint(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

var term = new Terminal();
var fitAddon = new FitAddon.FitAddon();


term.loadAddon(fitAddon);
term.open(document.getElementById('terminal'));
term.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ')
fitAddon.fit();

// -------------------------START---------------------



var familie = ["familie", "asdasd", "foreldre", "mor", "far", "bror", "søster", "søsken", "besteforeldre", "bestefar", "bestemor", "mormor", "morfar",
                 
"brødre", "søstre",

"onkel", "tante",


"sønn", "datter",
"sønner", "døtre",

"lege", "professor", "språkprofessor",


"foreldre bor i Norge og", "besteforeldre bor i Mexixco og", "bror bor i Japan og", "søster bor i Kina og",
"sønn arbeider i Amerika og", "onkel arbeider i Russland og", "tante jobber i Berlin og",

"sønn heter Jasper og", "datter heter Joline og", "sønn heter Mats og", "datter heter Jessica og"]





score = 0


term.writeln("1) What is 1+1?")
term.writeln("\n")
term.writeln("1")
term.writeln("2")
term.writeln("3")
term.writeln("\n")
term.writeln(familie[randint(0, familie.length-1)])


question1 = "";
answer1 = ("2")
term.writeln("\n")

if (question1 == answer1){ 
term.writeln("Correct!")
    score = score + 1
}
else{
term.writeln("Incorrect!")
term.writeln("Score: " + score) 
term.writeln("\n")
term.writeln("\n")
}





navn1 = ["Vi", "Vi og Maria", "Vi og Thomas", "Han", "Han og Peter", "Hun", "Hun og Svein", "Jeg", "Jeg og Alexandra", "Han og Kenneth",
            "De", "De og Peter", "Henrik og Mira", "Tobias og Elisabeth", "Ali og Lisa", "Charlotte og John", "Sofia og Henrik", "Henrik", "Peter",
            "Olav", "John", "Elias", "Tobias", "Henrik", "Ali", "Lisa", "Mira", "Elisabeth", "Maria", "Sofia", "Gunn", "Oda", "Charlotte",
            "Olav og Lisa", "Carlos", "Tim", "Tobias", "Matteus", "James", "Jim", "Jeg og Carlos", "Jeg og Maria", "Jeg og Ali", "Hun og John",
            "De og Tim", "Peter, Mira og Svein", "Daniel, David og Lisa", "Alexander, Elise og Oda"]
                 


verb = ["var i Frankrike", "skal bare være på jobb", "var ikke på jobb", "sover ikke", "slapper av", "slapper ofte av",



                // måltider
                
        "spiser ofte frokost", "spiser ofte middag", "spiser ofte kveldsmat", "spiser ikke frokost",
        "spiser ikke middag", "spiser ikke kveldsmat", "skal ikke spise frokost", "skal ikke spise middag",
        "skal ikke spise kveldsmat",
                
        "skal spise frokost", "skal spise middag", "skal spise kveldsmat",
        "spiser kveldsmat i Spania", "spiser kveldsmat på jobb", "spiser kveldsmat etter jobb",
        "spiser kveldsmat i Russland", "spiser kveldsmat i Oslo",
        "spiser frokost", "spiser frokost før jobb", "spiser frokost etter jobb",
        "spiser middag før jobb", "spiser middag etter jobb", 



        "er ikke på jobb", "skal ikke jobbe", "skal ikke være i Oslo", "skal ikke være i Bergen",
        "skal ikke være i Trondheim", 
        "skal slappe av", "skal sove", "skal snakke norsk", "skal være på jobb", "skal være i London",

        "skal være i Oslo", "skal være i Bergen","skal være i Trondheim",
                
        "jobber", "snakker fransk", "snakker spansk", "snakker norsk", "snakker italiensk",
        "spiser middag på jobb", "skal jobbe", "sover",

        "drar til jobb", "snakker russisk", "var på jobb", "var i Oslo", "var i Stavanger", "var i Bergen",
        "var i Trondheim", "var ikke i Oslo", "var ikke i Bergen", "var ikke i Trondheim", "var ikke i Kina", "var ikke i Italia",
        "var ikke i England", "skal snakke engelsk", "skal snakke spansk", "skal snakke kinesisk", "snakker ofte norsk", "snakker ofte arabisk",
        "snakker ofte fransk"]



klokkeslett = ["i bare 10 minutter", "i bare 15 minutter med Sofia", "i bare 20 minutter", "i en time",



                "fra klokka seks til syv med Oscar", "fra klokka kvart over seks til kvart over syv",
                "fra klokka kvart over seks til kvart på syv", "fra klokka åtte til ni med Louise og Sigurd",
                "fra klokka kvart over åtte til kvart på ni med Daniela og Tor",
                       

                "klokka seks", "klokka syv", "klokka åtte", "klokka ni", "klokka ti",
                "klokka halv seks", "klokka halv syv", "klokka halv åtte", "klokka halv ni", "klokka halv ti",


                "klokka kvart på seks", "klokka kvart over syv", "klokka kvart på åtte", "klokka kvart over ni", "klokka kvart på ti", 

                       
                "klokka seks med Silje eller Marie", "klokka syv med Linn eller Thomas", "klokka ti over åtte med Georg og Simon",
                "klokka ni med Sofia og Svein", "klokka ti med Alexandra",
                "klokka halv åtte med Amund eller Elise", "fra klokka kvart på syv til halv ni", 
                "klokka halv ti med Valentina eller Mats", "fra klokka kvart på åtte til klokka halv ni",


                "om ettermiddagen", "om kvelden",
                "om kvelden med Lina", "om kvelden med Elisabeth",                       
                "om høsten", "om vinteren", "om våren", "om sommeren"]
                       
                                                                                                                                                                                                                                                                                                                                                                  







// 2) Tid + verb

tid = ["Om morgenen", "Om ettermiddagen", "Om kvelden", "Om natten",
               
        "Om sommeren", "Om høsten", "Om vinteren", "Om våren",
        "Før jobb", "Etter jobb",
               
        "Før klokka halv seks", "Etter klokka syv",
               
        "Klokka halv seks", "Klokka halv syv", "Klokka halv åtte", "Klokka halv ni", "Klokka halv ti",
        "Klokka kvart på åtte", "Klokka kvart på ni", "Klokka kvart på ti"]


verb2 = ["går jeg på jobb", "går han på jobb", "går hun på jobb", "går vi på jobb", "går de på jobb",
            "går Maria på jobb", "går Carlos på jobb", "går Elise på jobb", "går Mira på jobb",
                 
            "går jeg ikke på jobb", "går han ikke på jobb", "går hun ikke på jobb", "går vi ikke på jobb", "går de ikke på jobb",
                 
            "slapper jeg av", "slapper han av", "slapper hun av", "slapper vi av", "slapper de av",
                 




            //  måltider
                 
            "spiser jeg ikke frokost", "spiser han ikke frokost", "spiser hun ikke frokost", "spiser vi ikke frokost", "spiser de ikke frokost",
            "spiser jeg sjelden frokost", "spiser han sjelden frokost", "spiser hun sjelden frokost", "spiser vi sjelden frokost", "spiser de sjelden frokost",



            "snakker jeg ofte norsk", "snakker han ofte spansk", "snakker hun ofte fransk", "snakker vi ofte italiensk", "snakker de ofte arabisk",
            "sover jeg", "sover han", "sover hun", "sover vi", "sover de",

            "var jeg i Spania", "var han i Italia", "var hun i Tyskland", "var vi i Russland", "var de i Amerika",
            "var Lisa i Kina", "var Carlos i Japan", "var Charlotte i Norge", "var Magnus i England",
            "var jeg og Lisa i Portugal", "var Ali of Sofia i Mexico", "var Daniel og Maren i Frankrike",

            "skal jeg dra til Spania", "skal han dra til Italia", "skal hun dra til Tyskland", "skal vi dra til Russland", "skal de dra til Amerika",
            "skal Lisa dra til Kina", "skal Carlos dra til Japan", "skal Charlotte dra til Norge", "skal Magnus dra til England"]
                 
               







// 3) Sted + verb

sted = ["I Norge", "I Spania", "I Russland", "I Portugal", "I Italia", "I Mexico", "I England", "I Amerika", "I Kina", "I Japan", "I Tyskland"]

verb3 = ["går jeg på jobb om morgenen", "går han på jobb", "går hun på jobb om natten", "går vi på jobb", "går de på jobb",
            "går Maria på jobb", "går Carlos på jobb om ettermiddagen", "går Elise på jobb", "går Mira på jobb om kvelden",
            "går jeg ikke på jobb", "går han ikke på jobb om morgenen", "går hun ikke på jobb", "går vi ikke på jobb", "går de ikke på jobb",
                 
            "slapper jeg av", "slapper han av", "slapper hun av", "slapper vi av", "slapper de av",
            "slapper jeg ikke av", "slapper han ikke av", "slapper hun ikke av", "slapper vi ikke av", "slapper de ikke av",


            "spiser jeg ikke frokost", "spiser han ikke frokost", "spiser hun ikke frokost", "spiser vi ikke frokost", "spiser de ikke frokost",
            "spiser jeg sjelden frokost", "spiser han sjelden frokost", "spiser hun sjelden frokost", "spiser vi sjelden frokost", "spiser de sjelden frokost",


            "snakker jeg ofte arabisk om kvelden", "snakker han ofte norsk", "snakker hun ofte engelsk om ettermiddagen", "snakker vi ofte tysk", "snakker de alltid fransk",
            "sover jeg fra klokka elleve til klokka syv", "sover han fra klokka elleve til klokka halv seks", "sover hun fra klokka kvart over ni til klokka fem", "sover vi fra klokka halv tolv til klokka halv åtte", "sover de fra klokka kvart på tolv til klokka kvart på syv"]






// 4) I-tid + verb


itid = ["I sommer", "I høst", "I vinter", "I vår",
        "I ettermiddag", "I kveld", "I natt"]

verb4 = ["skal Alexander dra til Spania", "skal han dra til Frankrike", "skal Anna dra til Portugal", "skal vi dra til Italia", "skal de dra til Kina",
            "skal jeg jobbe", "skal vi ikke jobbe", "skal jeg ikke jobbe",

            "skal de snakke kinesisk og engelsk", "skal vi bare snakke norsk",
            "skal vi slappe av", "skal Maria og Peter slappe av",
            "skal jeg og Svein være i Tyskland", "skal vi og Valentina være i England med Thomas og Siri",
                 
            "var Tor i Japan", "var hun i Oslo", "var vi i Bergen", "var Margaret i Mexico", "var de i Amerika",
            "var jeg og Sigurd i England", "var hun i Frankrike med Steven", "var han i London",

            "er jeg i Oslo", "er Miriam og Carlos i Paris", "er James og Sarah i Mexico", "er vi i Spania",
            "er han i Frankrike med Anne og Olav", "er de i Madrid", "er hun og Lisa på jobb",

            "jobber jeg", "jobber han", "jobber hun", "jobber vi", "jobber de",
            "jobber ikke Maria", "jobber ikke Jacob"]
                 







// 5) Subjekt + Verb + Om...

navn2 = ["Vi", "Vi og Maria", "Vi og Thomas", "Han", "Han og Peter", "Hun", "Hun og Svein", "Jeg", "Jeg og Alexandra", "Han og Kenneth",
            "De", "De og Peter", "Henrik og Mira", "Tobias og Elisabeth", "Ali og Lisa", "Charlotte og John", "Sofia og Henrik", "Henrik", "Peter",
            "Olav", "John", "Elias", "Tobias", "Henrik", "Ali", "Lisa", "Mira", "Elisabeth", "Maria", "Sofia", "Gunn", "Oda", "Charlotte",
            "Olav og Lisa", "Carlos", "Tim", "Tobias", "Matteus", "James", "Jim", "Jeg og Carlos", "Jeg og Maria", "Jeg og Ali", "Hun og John",
            "De og Tim", "Peter, Mira og Svein", "Daniel, David og Lisa", "Alexander, Elise og Oda"]





                // måltider

verb5 = ["skal spise frokost", "skal spise lunsj", "skal spise middag", "skal spise kveldsmat",
            "skal spise frokost med Sarah og John", "skal spise lunsj med Alexander, Svein og Mira", "skal spise middag med Victoria",
            "skal ikke spise frokost", "skal ikke spise lunsj", "skal ikke spise middag", "skal ikke spise kveldsmat",
            "skal spise litt frokost og slappe av", "skal spise litt lunsj og slappe av", "skal spise litt middag og slappe av", "skal spise litt kveldsmat og slappe av",





            "skal gå på jobb", "skal ikke gå på jobb",
                 
            "skal slappe av",
            "skal slappe litt av",
            "skal slappe av med Christine og Marie", "skal slappe av med Marta og Carlos",
            "skal slappe av i Spania", "skal slappe av i Italia", "skal slappe av i Mexico", "skal slappe av i Barcelona",

            "skal dra til Spania", "skal dra til Italia", "skal dra til Amerika", "skal dra til Norge", "skal dra til England", "skal dra til Mexico", "skal dra til Frankrike",
            "skal dra til Russland", "skal dra til Kina", "skal dra til Japan", "skal dra til Portugal",
            "skal dra til Spania med Marco", "skal dra til Italia med Johan", "skal dra til Norge med Sigrid", "skal dra til England med John og Steven",

            "skal være på jobb",
            "skal jobbe",
            "skal være på jobb med Michael", "skal være på jobb med Anna",

            "skal slappe av og snakke norsk",
            "skal snakke norsk", "skal snakke engelsk", "skal snakke spansk", "skal snakke fransk", "skal snakke portugisisk",
            "skal være med Maria og Peter", "skal være med Olav og Sofia"]



om = ["om fem minutter", "om ti minutter", "om femten minutter", "om tjue minutter", "om en halv time",
        "om én time", "om to timer", "om tre timer", "om fire timer", "om fem timer", "om seks timer", "om syv timer", "om åtte timer",

              
        "om én og en halv time", "om to og en halv time", "om tre og en halv time", "om fire og en halv time", "om fem og en halv time",
        "om én dag", "om to dager", "om tre dager", "om fire dager", "om fem dager", "om seks dager", "om én uke",
        "om to uker", "om tre uker", "om én måned",
        "om et kvarter"]


term.writeln(navn1[randint(0, navn1.length-1)]+" "+verb[randint(0, verb.length-1)]+" "+klokkeslett[randint(0, klokkeslett.length-1)])                                                                    
    


// ------------------------SLUTT---------------



window.addEventListener('resize', function (event) {
    fitAddon.fit()
}, true);

term.onKey(e => {
    console.log(e.key);
    term.write(e.key);
    if (e.key == '\r') {
        term.write('\n')
    }
})