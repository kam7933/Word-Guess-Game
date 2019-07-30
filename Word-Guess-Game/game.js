let list =["a", 
           "b", 
           "c", 
           "d", 
           "e", 
           "f", 
           "g", 
           "h", 
           "i", 
           "j", 
           "k", 
           "l", 
           "m", 
           "n", 
           "o", 
           "p", 
           "q", 
           "r", 
           "s", 
           "t", 
           "u", 
           "v", 
           "x", 
           "y", 
           "z"];

let wins = 0;
let losses = 0;
let left = 9;
let guesses = 9;
let guessesSoFar = [];
let psychicLetter;

let newLetter = function() {
    psychicLetter = list[Math.floor(Math.random()* list.length)];
};
let soFar = function() {
    document.getElementById("guesses").innerHTML = "Guesses so far: " + guessesSoFar.join(",");
};

let guessesleft = function(){
    document.getElementById("left").innerHTML = "Guesses left: "  + left;

};

let newGame = function () {
    guessedLetters = [];
   left = 9;
    newLetter();
    guessesleft();
    soFar();
}


document.onkeyup = function(event) {
    let userGuess = event.key;
    left--;
    guessesSoFar.push(userGuess);
    soFar();
    guessesleft();
    if (left > 0) {
        if (userGuess == psychicLetter) {
            wins++;
            document.getElementById("wins").innerHTML = "Wins" + wins;
            newGame();

        }    
        } else if (left ==0) {
            losses++;
            document.getElementById("losses").innerHTML = "Losses:"  + losses;
            newGame();
        }
    };
