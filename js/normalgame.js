document.addEventListener('DOMContentLoaded', function () {
    // SOUND
    const clickedSound = document.getElementById('clickedSound');

    // BUTTON
    const restartBtn = document.getElementById('restartBtn');
    const quitBtn = document.getElementById('quitBtn');
    const normalBtn = document.getElementById('normalBtn');
    
    // SECTIONS
    const startSection = document.querySelector('.start-section');
    const gameplaySection = document.querySelector('.gameplay-section');
    const gameplaySettingSection = document.querySelector('.gameplay-setting');
    const highscoreSection = document.querySelector('.highscore-section');
    const modeSection = document.querySelector('.mode-section');
    
    // ARRAY OF OBJECTS
    const questions = [
        // PLANT CATEGORY
        { category: 'Plant', question: 'An payong nin agta\nDae nababasa', answer: 'natong', status: true},
        { category: 'Plant', question: 'Tubig sa daso\nDae nagkakalago-kago', answer: 'tubo' , status: true},
        { category: 'Plant', question: 'An magurang dai naghihiro\nAn aki nagkakamang', answer: 'kalabasa' , status: true},
        { category: 'Plant', question: 'Harong ko sa Masbate\nSaro saro an harigi', answer: 'kabute' , status: true},
        { category: 'Plant', question: 'Sako na ngani si hilaw\nSaimo na hinog\nTano ka pa nagkukuharaw', answer: 'sili' , status: true},
        { category: 'Plant', question: 'Namotan ko si aki mo\nGinadan ko si ina mo', answer: 'batag', status: true},
        { category: 'Plant', question: 'Tubig sa rikandikan\nDae nauuranan', answer: 'tipong', status: true},
        { category: 'Plant', question: 'Bola an laog\nGapas an laog dagom\nDagom an laog tubig', answer: 'lukban', status: true},
        { category: 'Plant', question: 'Tulak ni Padre Gomez\nPano nin perdigones', answer: 'tapayas', status: true},
        { category: 'Plant', question: 'Orig ko sa pulo\nBulbul na pako', answer: 'langka', status: true}, 
        
        // OBJECT CATEGORY
        { category: 'Object', question: 'Yugyog sa kabalagunan\nHuning kapunayan', answer: 'gitara', status: true},
        { category: 'Object', question: 'Harong ko sa bulod\nSaro-saro an tukod', answer: 'tubo', status: true},
        { category: 'Object', question: 'Bakong tao, bakong hayop\nMaitom an payo', answer: 'palito', status: true},
        { category: 'Object', question: 'Bakong tao, bakong hayop\nNagsusulot plantsado', answer: 'ulunan', status: true},
        { category: 'Object', question: 'Binotong ko si balagon\nNaribok si maghapon', answer: 'kampana', status: true},
        { category: 'Object', question: 'Kun basog tindog\nKun gutom lup-og', answer: 'sako', status: true},
        { category: 'Object', question: 'May ngipon daeng ngimot\nMay bitis daeng kamot', answer: 'kudkudan', status: true},
        { category: 'Object', question: 'Labi an rutab rutab\nMantang naglulutab', answer: 'kandila', status: true},
        { category: 'Object', question: 'May lalawgon mayong mata\nMay kamot mayong takyag\nKun nagagadan dae nalalapa', answer: 'relo', status: true},
        { category: 'Object', question: 'Talodtod nin buaya\nMaghapon balada', answer: 'atop', status: true},
        { category: 'Object', question: 'Kun ati hararom\n Kun taob hababaw', answer: 'dulay', status: true},
        { category: 'Object', question: 'Kapti an ikog ko\nTa maladop ako', answer: 'tabo', status: true},
        { category: 'Object', question: 'Dara mo, dara ka\nDara pa an saimong dara', answer: 'sapatos', status: true},
        { category: 'Object', question: 'Pagkaaga minatindog\nPagkabanggi lupaypay', answer: 'banig', status: true},
        { category: 'Object', question: 'Saro an nilaugan\nTulo an niluwasan', answer: 'bado', status: true},
        { category: 'Object', question: 'Kargada ni ama mo\nNagliligid sa abo', answer: 'talayop', status: true},
        { category: 'Object', question: 'Ikog kan Karabaw\nNakaabot sa mindanao', answer: 'Kable', status: true},
        { category: 'Object', question: 'Binakal kong itom\nGinamit kong pula\nKan apuna nagin abo', answer: 'oring', status: true},
        { category: 'Object', question: 'Ikog kan amid\nNakasablay sa bukid', answer: 'dalan', status: true},
        { category: 'Object', question: 'Tulong magturugang\nMapuputi an daghan', answer: 'Taluhong', status: true},

        // ANIMAL CATEGORY
        { category: 'Animal', question: 'An atop kawali\nAn tuhod barari', answer: 'An-it', status: true},
        { category: 'Animal', question: 'Arado sa inutan\nWitwit sa haruhan', answer: 'Orig', status: true},
        { category: 'Animal', question: 'May payo mayong buhok\nMay tulak mayong pusod', answer: 'Talapang', status: true},
        { category: 'Animal', question: 'Biribid an tulang\nBiribid an laman', answer: 'Tabagwang', status: true},
        { category: 'Animal', question: 'Naglalayog si Ilay\nNaglalaad an kiray', answer: 'Aninipot', status: true},
        { category: 'Animal', question: 'Sadit pa si kumpare\nSuminakat na sa tore', answer: 'Tanga', status: true},
        { category: 'Animal', question: 'Sadit pa si Nene\nTatao na magtahi', answer: 'Lawa', status: true},

        // FRUIT CATEGORY
        { category: 'Fruit', question: 'Namotan ko si aki mo\nGinadan ko si ina mo', answer: 'Batag', status: true},
        { category: 'Fruit', question: 'Tubig sa rikandikan\nDae nauuranan', answer: 'Tipong', status: true},
        { category: 'Fruit', question: 'Bola an laog gapas\nGapas an laog dagom\nDagom an laog tubig', answer: 'Lukban', status: true},
        { category: 'Fruit', question: 'Tulak ni Padre Gomez\nPano nin perdigones', answer: 'Tapayas', status: true},
        { category: 'Fruit', question: 'Orig ko sa pulo\nBulbol na pako', answer: 'Langka', status: true},

        // // BODY PARTS CATEGORY
        { category: 'BodyPart', question: 'Orig kong mataba\nNakakodal nin tingga', answer: 'Dila', status: true},
        { category: 'BodyPart', question: 'Duwang bolang itom\nHarayo an inabaton\nDae man inapon', answer: 'Mata', status: true},
        { category: 'BodyPart', question: 'Kaputi ta yaon\n Hilinga ta mayo', answer: 'Talinga', status: true},
        { category: 'BodyPart', question: 'Mapasatubig, Mapasakalayo\nDae naaano', answer: 'Anino', status: true},

        // HEAVENLY BODIES
        { category: 'HeavenlyBody', question: 'Kalibkib na lubi\nNag iidos kun banggi', answer: 'Bulan', status: true},

        // FOOD
        { category: 'Food', question: 'Harong ko sa laog malapot\nDaeng pwerta daeng gakot', answer: 'Sugok', status: true},
        { category: 'Food', question: 'Tubig naging dugo\nDugo naging gapo', answer: 'Sangkaka', status: true},
        { category: 'Food', question: 'Namotan ko si aki mo\nGinadan ko si ina mo', answer: 'Batag', status: true},
        { category: 'Food', question: 'Tubig sa rikandikan\nDae nauuranan', answer: 'Tipong', status: true},
        { category: 'Food', question: 'Bola an laog gapas\nGapas an laog dagom\nDagom an laog tubig', answer: 'Lukban', status: true},
        { category: 'Food', question: 'Tulak ni Padre Gomez\nPano nin perdigones', answer: 'Tapayas', status: true},
        { category: 'Food', question: 'Orig ko sa pulo\nBulbol na pako', answer: 'Langka', status: true},
        { category: 'Food', question: 'An payong nin agta\nDae nababasa', answer: 'Natong', status: true},
        { category: 'Food', question: 'Tubig sa daso\nDae nagkakalago-kago', answer: 'Tubo', status: true},
        { category: 'Food', question: 'An magurang dai naghihiro\nAn aki nagkakamang', answer: 'Kalabasa', status: true},
        { category: 'Food', question: 'Harong ko sa Masbate\nSaro saro an harigi', answer: 'Kabute', status: true},
        { category: 'Food', question: 'Sako na ngani si hilaw\nSaimo na si hinog\nTano ka pa nagkukurahaw', answer: 'Sili', status: true},

        // NATURAL PHENOMENA
        { category: 'Natural', question: 'Pag-agi ni kuwaw\nHinigop an sabaw', answer: 'Balangaw', status: true},
        { category: 'Natural', question: 'Nag-abot si boy negro\nNagkagaradan si mga tao', answer: 'Banggi', status: true},
        { category: 'Natural', question: 'Aram mo pero dai mo masasabotan\nDai mo nasasabotan pero aram mo', answer: 'Kagadanan', status: true},
        { category: 'Natural', question: 'Bakong tao, bakong hayop\nPero nagsisigarilyo', answer: 'Bulkan', status: true},
    ];
    // GAMEPLAY SECTION
    const answerContainer = document.querySelector('.answer-container');
    const questionParagraph = document.querySelector('.question');
    const scoreParagraph = document.querySelector('.score p');

    let currentQuestionIndex = 0;
    let score = 0;

    // RANDOM QUESTION FUNCTIONALITY
    function getRandomQuestion() {
        // Filter out the answered questions
        const unansweredQuestions = questions.filter(q => q.status);
    
        // Check if there are still unanswered questions
        if (unansweredQuestions.length > 0) {
            // Pick a random index from the unanswered questions
            const randomIndex = Math.floor(Math.random() * unansweredQuestions.length);
            // Get the randomly selected question
            const randomQuestion = unansweredQuestions[randomIndex];
            return randomQuestion;
        } else {
            // All questions have been answered, return null
            return null;
        }
    }

    // GENERATE INPUT TAGS
    function generateInputs(word, question) {
        answerContainer.innerHTML = '';

        // Check if the question is already answered
        if (!question.status) {
            // If the question is answered, display a message or handle it as needed
            console.log('Question already answered:', question);
            return;
        }

        for (let i = 0; i < word.length; i++) {
            const input = document.createElement('input');
            input.type = 'text';
            input.maxLength = 1;
            answerContainer.appendChild(input);

            if (i > 0) {
                input.disabled = true;
            }

            input.addEventListener('input', function () {
                if (i < word.length - 1 && input.value) {
                    answerContainer.children[i + 1].disabled = false;
                    answerContainer.children[i + 1].focus();
                }

                // Check if the entire word is filled in
                const isWordFilledIn = Array.from(answerContainer.children).every(input => input.value);
                
                if (isWordFilledIn && Array.from(answerContainer.children).every(input => input.value.toLowerCase() === word.charAt(Array.from(answerContainer.children).indexOf(input)).toLowerCase())) {
                    // Mark the question as answered
                    question.status = false;
                    playCorrectSound();
                    // Word is correct, add the "CORRECT" animation and proceed to the next question or highscore if all questions are answered
                    const correctElement = document.createElement('h1');
                    correctElement.classList.add('animate__animated', 'animate__flash','animate__faster', 'correct-text');
                    correctElement.textContent = 'CORRECT';
                    document.body.appendChild(correctElement);

                    setTimeout(() => {
                        document.body.removeChild(correctElement);

                        currentQuestionIndex++;
                        score += 100;
                        if (currentQuestionIndex < questions.length) {
                            displayQuestion(currentQuestionIndex);
                        } else {
                            displayHighscore();
                        }
                    }, 1000); // Adjust the delay as needed
                } else if (isWordFilledIn) {
                    playIncorrectSound();
                    // Incorrect answer handling
                    const incorrectElement = document.createElement('h1');
                    incorrectElement.classList.add('animate__animated', 'animate__flash','animate__faster', 'incorrect-text');
                    incorrectElement.textContent = 'INCORRECT';
                    document.body.appendChild(incorrectElement);

                    setTimeout(() => {
                        document.body.removeChild(incorrectElement);

                        // Mark the question as answered
                        question.status = false;

                        // Proceed to the next question
                        currentQuestionIndex++;
                        if (currentQuestionIndex < questions.length) {
                            displayQuestion(currentQuestionIndex);
                        } else {
                            displayHighscore();
                        }
                    }, 1000); // Adjust the delay as needed
                }
            });

            input.addEventListener('keydown', function (e) {
                if (e.key === 'Backspace') {
                    input.value = '';
                    if (i > 0) {
                        answerContainer.children[i - 1].focus();
                        answerContainer.children[i + 1].disabled = true;
                    }
                }
            });
        }

        // Set autofocus to true for the first input
        answerContainer.children[0].focus();
    }

        // Function to scramble the answer
        function scrambleAnswer(answer) {
            // Split the answer into an array of characters, shuffle them, then join them back into a string
            return answer.split('').sort(() => Math.random() - 0.5).join('');
        }
    
        // Function to handle hint button click
        function handleHint() {
            const hintContainer = document.querySelector('.hint-container');
            // Toggle the visibility of the hint container
            hintContainer.style.display = 'block';
    
            // Hide the hint container after 2 seconds
            setTimeout(function () {
                hintContainer.style.display = 'none';
            }, 2000);
        }
    
        // Event listener for the hint button
        hintBtn.addEventListener('click', handleHint);
    
        // Function to generate hint tags
        function generateHint(scrambledAnswer) {
            const hintContainer = document.querySelector('.hint-container');
            hintContainer.innerHTML = '';
            const hint = document.createElement('p');
            hint.textContent = scrambledAnswer;
            hintContainer.appendChild(hint);
        }
    
    
        function displayQuestion() {
            const currentQuestion = getRandomQuestion();
        
            if (currentQuestion) {
                const formattedQuestion = currentQuestion.question.replace(/\n/g, '<br>');
                questionParagraph.innerHTML = `${formattedQuestion}`;
                scoreParagraph.textContent = `SCORE: ${score}`;
                generateInputs(currentQuestion.answer, currentQuestion);
    
                // Generate hint for the current question
                generateHint(scrambleAnswer(currentQuestion.answer));
            } else {
                // All questions answered, proceed to highscore
                displayHighscore();
            }
        }
    
    function displayHighscore() {
        // Display high score
        highscoreSection.style.display = 'block';
        gameplaySection.style.display = 'none';
    
        // Display the final score in the highscore section
        const highscoreParagraph = document.querySelector('.highscore p');
        highscoreParagraph.textContent = `${score}`;
    
        // Reset the score and question for the next game
        currentQuestionIndex = 0;
        score = 0;
    }
    
    //RESTART
    restartBtn.addEventListener('click', function () {
        currentQuestionIndex = 0;
        score = 0;
        gameplaySection.style.display = 'block';
        gameplaySettingSection.style.display = 'none';
        displayQuestion(currentQuestionIndex);
        clickedSound.play();
    });

    //QUIT
    quitBtn.addEventListener('click', function () {
        currentQuestionIndex = 0;
        score = 0;
        gameplaySettingSection.style.display = 'none';
        startSection.style.display = 'block';
        clickedSound.play();
    });

    //JUMP TO GAMEPLAY SECTION
    normalBtn.addEventListener('click', function () {
        modeSection.style.display = 'none';
        gameplaySection.style.display = 'block';
        clickedSound.play();
    });
    
    document.getElementById('passBtn').addEventListener('click', function () {
        clickedSound.play();
        // Mark the current question as answered (status = false)
        if (currentQuestionIndex < questions.length) {
            questions[currentQuestionIndex].status = false;
        }
    
        // Proceed to the next question or highscore if all questions are answered
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            displayQuestion(currentQuestionIndex);
        } else {
            displayHighscore();
        }
    });

    document.getElementById('shuffleBtn').addEventListener('click', function () {
        clickedSound.play();
        displayQuestion(currentQuestionIndex);
    })
    function playCorrectSound() {
        const correctSound = document.getElementById('correct');
        correctSound.play();
    }

    // Play incorrect sound
    function playIncorrectSound() {
        const incorrectSound = document.getElementById('incorrect');
        incorrectSound.play();
    }
    // DISPLAY FIRST QUESTION
    displayQuestion(currentQuestionIndex);
});