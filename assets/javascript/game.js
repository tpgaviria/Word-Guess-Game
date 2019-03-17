var composerArray = [
    {
        word: "bach",
        fullName: "Johann Sebastian Bach",
        picture: "assets/images/bach.jpg",
        songclip: "assets/songclips/bachcellosuite1prelude.mp3"
    },
    {
        word: "bach",
        fullName: "Johann Sebastian Bach",
        picture: "assets/images/bach.jpg",
        songclip: "assets/songclips/bachtoccataandfugue.mp3"
    },
    {
        word: "beethoven",
        fullName: "Ludwig van Beethoven",
        picture: "assets/images/beethoven.jpg",
        songclip: "assets/songclips/beethovenfurelise.mp3"
    },
    {
        word: "beethoven",
        fullName: "Ludwig van Beethoven",
        picture: "assets/images/beethoven.jpg",
        songclip: "assets/songclips/beethovenmoonlightsonata.mp3"
    },
    {
        word: "beethoven",
        fullName: "Ludwig van Beethoven",
        picture: "assets/images/beethoven.jpg",
        songclip: "assets/songclips/beethovensymphony5.mp3"
    },
    {
        word: "bizet",
        fullName: "Georges Bizet",
        picture: "assets/images/bizet.jpg",
        songclip: "assets/songclips/bizetcarmenhabanera.mp3"
    },
    {
        word: "brahms",
        fullName: "Johannes Brahms",
        picture: "assets/images/brahms.jpg",
        songclip: "assets/songclips/brahmshungariandance.mp3"
    },
    {
        word: "chopin",
        fullName: "Frederic Chopin",
        picture: "assets/images/chopin.jpeg",
        songclip: "assets/songclips/chopinnocture9no2.mp3"
    },
    {
        word: "dvorak",
        fullName: "Antonin Dvorak",
        picture: "assets/images/dvorak.jpg",
        songclip: "assets/songclips/dvorakhumoresque.mp3"
    },
    {
        word: "grieg",
        fullName: "Edvard Grieg",
        picture: "assets/images/grieg.jpg",
        songclip: "assets/songclips/griegmorningmood.mp3"
    },
    {
        word: "grieg",
        fullName: "Edvard Grieg",
        picture: "assets/images/grieg.jpg",
        songclip: "assets/songclips/grieghallofthemountainking.mp3"
    },
    {
        word: "mozart",
        fullName: "Wolfgang Amadeus Mozart",
        picture: "assets/images/mozart.jpg",
        songclip: "assets/songclips/mozarteinekleinenachtmusik.mp3"
    },
    {
        word: "mozart",
        fullName: "Wolfgang Amadeus Mozart",
        picture: "assets/images/mozart.jpg",
        songclip: "assets/songclips/mozartsymphony40.mp3"
    },
    {
        word: "mozart",
        fullName: "Wolfgang Amadeus Mozart",
        picture: "assets/images/mozart.jpg",
        songclip: "assets/songclips/mozartturkishmarch.mp3"
    },
    {
        word: "ravel",
        fullName: "Maurice Ravel",
        picture: "assets/images/ravel.jpg",
        songclip: "assets/songclips/ravelbolero.mp3"
    },
    {
        word: "rossini",
        fullName: "Gioachino Rossini",
        picture: "assets/images/rossini.jpg",
        songclip: "assets/songclips/rossiniwilliamtell.mp3"
    },
    {
        word: "saintsaens",
        fullName: "Camille Saint Saens",
        picture: "assets/images/saintsaens.jpg",
        songclip: "assets/songclips/saintsaensdansemacabre.mp3"
    },
    {
        word: "satie",
        fullName: "Erik Satie",
        picture: "assets/images/satie.jpg",
        songclip: "assets/songclips/satiegymnopedie.mp3"
    },
    {
        word: "shostakovich",
        picture: "assets/images/shostakovich.jpg",
        songclip: "assets/songclips/shostakovichwaltzno2.mp3"
    },
    {
        word: "tchaikovsky",
        picture: "assets/images/tchaikovsky.jpg",
        songclip: "assets/songclips/tchaikovsky1812.mp3"
    },
    {
        word: "tchaikovsky",
        picture: "assets/images/tchaikovsky.jpg",
        songclip: "assets/songclips/tchaikovskynutcracker.mp3"
    },
    {
        word: "tchaikovsky",
        picture: "assets/images/tchaikovsky.jpg",
        songclip: "assets/songclips/tchaikovskysugarplum.mp3"
    },
    {
        word: "vivaldi",
        picture: "assets/images/vivaldi.jpg",
        songclip: "assets/songclips/vivaldisummer.mp3"
    },
    {
        word: "vivaldi",
        picture: "assets/images/vivaldi.jpg",
        songclip: "assets/songclips/vivaldiwinter.mp3"
    },
    {
        word: "wagner",
        picture: "assets/images/wagner.jpg",
        songclip: "assets/songclips/wagnerrideofthevalkyries.mp3"
    },
    {
        word: "williams",
        picture: "assets/images/williams.jpg",
        songclip: "assets/songclips/williamsimperialmarch.mp3"
    },

];

    console.log(composerArray);
    
    var gameStatus = false;

    var randomNumber = Math.floor(Math.random() * composerArray.length);
    
   
    var composer = composerArray[randomNumber].word;
    var composerPicture = composerArray[randomNumber].picture;
    var composerSong = composerArray[randomNumber].songclip;
    
    var lettersRemaining = composer.length;
    
    var answerArray = []; 
    
    document.addEventListener("keyup", function(event){
        if(gameStatus) {
            letterCheck(event);
        } else {
           
            init();
        }
    });
    
    var alphabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    

    function preGame() {
        if (gameStatus = false) {
            
            var scoreRow = document.getElementById("game-score");
            scoreRow.style.display = "none";
        }
    }

    

    function letterCheck(guess) {
        if (alphabetArray.indexOf(guess.key) > -1) {
            correctGuessCheck(guess);
        }
    }
    
    var winScore = 0;
    function correctGuessCheck(guess) {
        if (composer.indexOf(guess.key) > -1) {
            correctGuess(guess);
        } else {
            incorrectGuess(guess);
        }
    }
    
    function correctGuess(guess) {
        if (answerArray.indexOf(guess.key.toUpperCase()) < 0) {
            addCorrectLetter(guess);
        }
    }
    
    function addCorrectLetter(guess) {
        for (var j = 0; j < composer.length; j++) {
            if (guess.key === composer[j]) {
                answerArray[j] = guess.key.toUpperCase();
                displayCurrentWord();
                lettersRemaining--;
                if (lettersRemaining === 0) {
                    winScore++;
                    displayWins();
                    changeImage();
                    addCorrect();
                    displayCurrentWord();
                }
            }
        }
    }
    
    var incorrectGuessesMade = [];
    var guessesLeft = 9;
    
    function incorrectGuess(guess) {
        if (incorrectGuessesMade.indexOf(guess.key.toUpperCase()) < 0) {
            addIncorrectLetter(guess);
        }
    }
    
    function addIncorrectLetter(guess) {
        incorrectGuessesMade.push(guess.key.toUpperCase());
        displayGuessesMade();
        guessesLeft--;
        displayGuessesLeft();
        if (guessesLeft === 0) {
            changeImage();
            displayAnswer();
        }
    }
    
    function displayWins() {
        var winsDisplay = document.querySelector("#winsDisplay");
        winsDisplay.textContent = winScore;
    }
    
    function displayGuessesMade() {
        var guessesMadeDisplay = document.querySelector("#guessesMadeDisplay");
        guessesMadeDisplay.textContent = incorrectGuessesMade.join(", ");
    }
    
    function displayGuessesLeft() {
        var guessesLeftDisplay = document.querySelector("#guessesLeftDisplay");
        guessesLeftDisplay.textContent = guessesLeft;
    }
    
    function displayCurrentWord() {
        var currentWordDisplay = document.querySelector("#currentWordDisplay");
        currentWordDisplay.innerHTML = answerArray.join(" ");
    }
    
    function displayImage() {
        var pictureDisplay = document.querySelector("#pictureDisplay");
        pictureDisplay.src = composerPicture;

        var song = document.querySelector("#song");
        song.src = composerSong;

    }
    
    function changeImage() {
        gameStatus = false;
    }
    
    function displayAnswer() {
        var revealedAnswerDisplay = document.querySelector("#revealedAnswerDisplay");
        revealedAnswerDisplay.textContent = composer.toUpperCase();
    }
    
    function addCorrect() {
        var currentWordDisplay = document.querySelector("#currentWordDisplay");
        currentWordDisplay.classList.add('correct');
    }
    
    function removeCorrect() {
        var currentWordDisplay = document.querySelector("#currentWordDisplay");
        currentWordDisplay.classList.remove('correct');
    }
    
    
    function init() {
        gameStatus = true;
        
        randomNumber = Math.floor(Math.random() * composerArray.length);
        
        composer = composerArray[randomNumber].word;
        composerPicture = composerArray[randomNumber].picture;
        composerSong = composerArray[randomNumber].songclip;
    
        lettersRemaining = composer.length;
    
         answerArray = []; 
    
        for (var i = 0; i < composer.length; i++) {
         
            if (composer[i] === "+") {
                answerArray[i] = "&nbsp;";
            } else {
                answerArray[i] = "_";
            }
        }
    
        lettersRemaining = composer.length;
    
        guessesLeft = 9;
        displayGuessesLeft()
    
        incorrectGuessesMade = [];
        displayGuessesMade()
        
        displayCurrentWord();
    
        displayImage();
    
        revealedAnswerDisplay.textContent = "";
    
        document.getElementById('song').play();
    
        removeCorrect();


        
    }
