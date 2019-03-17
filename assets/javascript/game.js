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
        songclip: "assets/songclips/bizetcarmen.mp3"
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
    }];

    console.log(composerArray);
    
    var gameStatus = false;

    //Generate randomNumber
    var randomNumber = Math.floor(Math.random() * composerArray.length);
    
    //Apply randomNumber to obtain random word (answer), and related images.
    var composer = composerArray[randomNumber].word;
    var composerPicture = composerArray[randomNumber].picture;
    var composerSong = composerArray[randomNumber].songclip;
    
    //Establish lettersRemaining (for win);
    var lettersRemaining = composer.length;
    
    //Set up the answer array to store word (answer) as an array for indexing.
    var answerArray = []; 
    
    /* LISTENERS
     ----------------------------------------------------------------------------------------------------------------*/
    
    //Use key events to listen for the letters that your players will type.
    document.addEventListener("keyup", function(event){
        //If gameStatus (or game round) has been initialized, then proceed to playing.
        if(gameStatus) {
            letterCheck(event);
        } else {
            //If gameStatus (or game round) has completed, re-initialize (or reset) the game.
            init();
        }
    });
    
    //Setup alphabet array for letter checking
    var alphabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
    function letterCheck(guess) {
        //If letter key is press, check if the letter pressed is in the answer.
        if (alphabetArray.indexOf(guess.key) > -1) {
            correctGuessCheck(guess);
        }
    }
    
    //Check whether the guess is correct
    var winScore = 0;
    function correctGuessCheck(guess) {
        if (composer.indexOf(guess.key) > -1) {
            //if guess is correct, run correctGuess function.
            correctGuess(guess);
        } else {
            //If guess is incorrect, run incorrectGuess function.
            incorrectGuess(guess);
        }
    }
    
    function correctGuess(guess) {
        if (answerArray.indexOf(guess.key.toUpperCase()) < 0) {
            //If the correctGuess doesn't exist in the answerArray, run addCorrectLetter function.
            addCorrectLetter(guess);
        }
    }
    
    function addCorrectLetter(guess) {
        for (var j = 0; j < composer.length; j++) {
            //If guess matches an existing letter in the answer.
            if (guess.key === composer[j]) {
                //Push correct letter to answerArray as upperCase.
                answerArray[j] = guess.key.toUpperCase();
                displayCurrentWord();
                //Reduce letters remaining for win by one.
                lettersRemaining--;
                //If letters left has reached 0, user wins. 
                if (lettersRemaining === 0) {
                    //Add 1 to win score.
                    winScore++;
                    //Display new win score.
                    displayWins();
                    //Reveal the Pokemon's identiy.
                    changeImage();
                    //Turn correct answer green.
                    addCorrect();
                    //display currentWord with new green font.
                    displayCurrentWord();
                }
            }
        }
    }
    
    //Set up an incorrect answer array
    var incorrectGuessesMade = [];
    //Establish the number of guesses.
    var guessesLeft = 9;
    
    function incorrectGuess(guess) {
        if (incorrectGuessesMade.indexOf(guess.key.toUpperCase()) < 0) {
            //If the inCorrectGuess doesn't exist in the answerArray, run addIncorrectLetter function.
            addIncorrectLetter(guess);
        }
    }
    
    function addIncorrectLetter(guess) {
        //Push incorrect guess into the incorrectGuessesMade array
        incorrectGuessesMade.push(guess.key.toUpperCase());
        //Inform user of incorrectGuessesMade
        displayGuessesMade();
        //Lower guessesLeft by 1
        guessesLeft--;
        //Inform user of guessesLeft
        displayGuessesLeft();
        if (guessesLeft === 0) {
            //If guesses left reaches equals 0, then Game Over.
            changeImage();
            //Display corrent answer.
            displayAnswer();
        }
    }
    
    /* HANDLERS
    ----------------------------------------------------------------------------------------------------------------*/
    
    //Displays the number of wins user has obtains.
    function displayWins() {
        var winsDisplay = document.querySelector("#winsDisplay");
        winsDisplay.textContent = winScore;
    }
    
    //Displays the letters the user has guessed.
    function displayGuessesMade() {
        var guessesMadeDisplay = document.querySelector("#guessesMadeDisplay");
        guessesMadeDisplay.textContent = incorrectGuessesMade.join(", ");
    }
    
    //Displays how many user guesses are left.
    function displayGuessesLeft() {
        var guessesLeftDisplay = document.querySelector("#guessesLeftDisplay");
        guessesLeftDisplay.textContent = guessesLeft;
    }
    
    //Displays current solve status of answerArray.
    function displayCurrentWord() {
        var currentWordDisplay = document.querySelector("#currentWordDisplay");
        currentWordDisplay.innerHTML = answerArray.join(" ");
    }
    
    //Displays silhouette of Pokemon when game initalizes.
    function displayImage() {
        var pictureDisplay = document.querySelector("#pictureDisplay");
        pictureDisplay.src = composerPicture;

        var song = document.querySelector("#song");
        song.src = composerSong;

    }
    
    //Reveals Pokemon identiy regardless of whether user was able to solve. 
    function changeImage() {
        //var pictureDisplay = document.querySelector("#pictureDisplay");
       // pictureDisplay.src = composerPicture;
        gameStatus = false;
    }
    
    //Reveals answer if user is unable to solve.
    function displayAnswer() {
        var revealedAnswerDisplay = document.querySelector("#revealedAnswerDisplay");
        revealedAnswerDisplay.textContent = composer.toUpperCase();
    }
    
    //Turns current word green (to indicate correctness)
    function addCorrect() {
        var currentWordDisplay = document.querySelector("#currentWordDisplay");
        currentWordDisplay.classList.add('correct');
    }
    
    //Removes green color of current word (for re-initalizing purposes)
    function removeCorrect() {
        var currentWordDisplay = document.querySelector("#currentWordDisplay");
        currentWordDisplay.classList.remove('correct');
    }
    
    
    /* Initalize (or re-initialize) the game.
    ----------------------------------------------------------------------------------------------------------------*/
    
    function init() {
        //Changes gameStatus to ready.
        gameStatus = true;
        
        //Generate a new random number
        randomNumber = Math.floor(Math.random() * composerArray.length);
        
        //Apply new randomNumber to obtain random word (answer), and related images.
        composer = composerArray[randomNumber].word;
        composerPicture = composerArray[randomNumber].picture;
        composerSong = composerArray[randomNumber].songclip;
    
        //Re-establish lettersRemaining (for win);
        lettersRemaining = composer.length;
    
        //Re-establish answer array.
         answerArray = []; 
    
        //Convert word answer into an array.
        for (var i = 0; i < composer.length; i++) {
            //If an answer has more than one word, use + as a separator. A space will be displayed when currentWord is displayed. Not applicable for this particlar Pokemon game, but here for flexibility.
            if (composer[i] === "+") {
                answerArray[i] = "&nbsp;";
            } else {
                //Replace word answer with "_"s
                answerArray[i] = "_";
            }
        }
    
        //Re-establish lettersRemaining (for win)
        lettersRemaining = composer.length;
    
        //Re-establish guessesLeft for user.
        guessesLeft = 9;
        displayGuessesLeft()
    
        //Re-establish guessesMade array.
        incorrectGuessesMade = [];
        displayGuessesMade()
        
        //Display current word.
        displayCurrentWord();
    
        //Display Pokemon silhouette.
        displayImage();
    
        //Empty revealedAnswer display if user was unsuccessful previously.
        revealedAnswerDisplay.textContent = "";
    
        //Play "Who's that composer?" audio.
        document.getElementById('song').play();
    
        //Remove greenColor from currentWord if user was successful previously.
        removeCorrect();
    }

    console.log(pictureDisplay);