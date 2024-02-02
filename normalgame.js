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
        { category: 'Plant', question: 'Tubig sa daso\nDae nagkakalag o-kag', answer: 'ewan' , status: true},
        { category: 'Plant', question: 'An magurang dai naghihiro\nAn aki nagkakamang', answer: 'probably' , status: true},
        { category: 'Plant', question: 'Harong ko sa Masbate\nSaro saro an harigi', answer: 'idk' , status: true},
        { category: 'Plant', question: 'Sako na ngani si hilaw\nSaimo na hinog\nTano kapa nagkukuharaw', answer: 'iguessso' , status: true},
        { category: 'Plant', question: 'Namotan ko si aki mo\nGinadan ko si ina mo', answer: 'Blue Whale', status: true},
        { category: 'Plant', question: 'Tubig sa rikandikan\nDae nauuranan', answer: 'Blue Whale', status: true},
        { category: 'Plant', question: 'Bola an laog\nGapas an laog dagom\nDagom an laog tubig', answer: 'Blue Whale', status: true},
        { category: 'Plant', question: 'Tulak ni Padre Gomez\nPano nin perdigones', answer: 'Blue Whale', status: true},
        { category: 'Plant', question: 'Orig ko sa pulo\nBulbul na pako', answer: 'Blue Whale', status: true},
        
        // OBJECT CATEGORY
        { category: 'Object', question: 'Yugyog sa kabalagun an huning kapunayan', answer: 'Blue Whale', status: true},
        { category: 'Object', question: 'Harong ko sa bulod\nSaro-saro an tukod', answer: 'Blue Whale', status: true},
        { category: 'Object', question: 'Bakong tao, bakong hayop\nMaitom ang payo', answer: 'Blue Whale', status: true},
        { category: 'Object', question: 'Bakong tao, bakong hayop\nNagsusulot plantsado', answer: 'Blue Whale', status: true},
        { category: 'Object', question: 'Binotong ko si balagon\nNaribok si maghapon', answer: 'Blue Whale', status: true},
        { category: 'Object', question: 'Kun basog tindog\nKun gutom lup-og', answer: 'Blue Whale', status: true},
        { category: 'Object', question: 'May ngipon daeng ngimot\nMay bitis daeng kamot', answer: 'Blue Whale', status: true},
        { category: 'Object', question: 'Labi an rutab rutab\nMantang naglulutab', answer: 'Blue Whale', status: true},
        { category: 'Object', question: 'May lalawgon mayong mata, may kamot mayong takyag\nKun nagagadan dae nalalapa', answer: 'Blue Whale', status: true},
        { category: 'Object', question: 'Talodtod nin buaya\nMaghapon balada', answer: 'Blue Whale', status: true},
        { category: 'Object', question: 'Kun ati hararom\n Kun taob hababaw', answer: 'Blue Whale', status: true},
        { category: 'Object', question: 'Kapti an ikog ko\nTa maladop ako', answer: 'Blue Whale', status: true},
        { category: 'Object', question: 'Dara mo, dara ka\nDara pa an saimong dara', answer: 'Blue Whale', status: true},
        { category: 'Object', question: 'Pagkaaga minatindog\nPagkabang gi lupaypay', answer: 'Blue Whale', status: true},
        { category: 'Object', question: 'Saro an nilaugan\nTulo an niluwasan', answer: 'Blue Whale', status: true},
        { category: 'Object', question: 'Kargada ni ama mo\nNagliligid sa abo', answer: 'Blue Whale', status: true},
        { category: 'Object', question: 'Ikog kan Karabaw\nNakaabot sa mindanao', answer: 'Blue Whale', status: true},
        { category: 'Object', question: 'Binakal kong itom\nGinamit kong pula\nKan apuna nagin abo', answer: 'Blue Whale', status: true},
        { category: 'Object', question: 'Ikog kan amid\nNakasablay sa bukid', answer: 'Blue Whale', status: true},
        { category: 'Object', question: 'Tulong magturugang ning mapuputi an daghan', answer: 'Blue Whale', status: true},

        // ANIMAL CATEGORY
        { category: 'Animal', question: 'An atop kawali\nAn tuhod barari', answer: 'Blue Whale', status: true},
        { category: 'Animal', question: 'Arado sa inutan\nWitwit sa haruhan', answer: 'Blue Whale', status: true},
        { category: 'Animal', question: 'May payo mayong buhok\nMay tulak mayong pusod', answer: 'Blue Whale', status: true},
        { category: 'Animal', question: 'Biribid an tulang\nBiribid an laman', answer: 'Blue Whale', status: true},
        { category: 'Animal', question: 'Naglalayog si Ilay\nNaglalaad an kiray', answer: 'Blue Whale', status: true},
        { category: 'Animal', question: 'Sadit pa si kumpare\nSuminakat na sa tore', answer: 'Blue Whale', status: true},
        { category: 'Animal', question: 'Sadit pa si Nene\nTatao na magtahi', answer: 'Blue Whale', status: true},

        // FRUIT CATEGORY
        { category: 'Fruit', question: 'Namotan ko si aki mo\nGinadan ko si ina mo', answer: 'Blue Whale', status: true},
        { category: 'Fruit', question: 'Tubig sa rikandikan\nDae nauuranan', answer: 'Blue Whale', status: true},
        { category: 'Fruit', question: 'Bola an laog gapos\nGapas an laog dagom\nDagom an laog tubig', answer: 'Blue Whale', status: true},
        { category: 'Fruit', question: 'Tulak ni Padre Gomez\nPano nin perdigones', answer: 'Blue Whale', status: true},
        { category: 'Fruit', question: 'Orig ko sa pulo\nBulbol na pako', answer: 'Blue Whale', status: true},

        // BODY PARTS CATEGORY
        { category: 'BodyPart', question: 'Orig kong mataba\nNakakodal ning tingga', answer: 'Blue Whale', status: true},
        { category: 'BodyPart', question: 'Duwang bolang itom\nHarayo an inabaton\nDae man inapon', answer: 'Blue Whale', status: true},
        { category: 'BodyPart', question: 'Kaputi ta yaon\n Hilinga ta mayo', answer: 'Blue Whale', status: true},
        { category: 'BodyPart', question: 'Mapasatubig, Mapasakalayo\nDae naaano', answer: 'Blue Whale', status: true},

        // HEAVENLY BODIES
        { category: 'HeavenlyBody', question: 'Kalibkib na lubi\nNag iidos kun banggi', answer: 'Blue Whale', status: true},

        // FOOD
        { category: 'Food', question: 'Harong ko sa laog malapot\nDae pwerta daeng gakot', answer: 'Blue Whale', status: true},
        { category: 'Food', question: 'Tubig naging dugo\nDugo naging gapo', answer: 'Blue Whale', status: true},
        { category: 'Food', question: 'Namotan ko si aki mo\nGinadan ko si ina mo', answer: 'Blue Whale', status: true},
        { category: 'Food', question: 'Tubig sa rikandikan\nDae nauuranan', answer: 'Blue Whale', status: true},
        { category: 'Food', question: 'Bola an laog gapos\nGapas an laog dagom\nDagom an laog tubig', answer: 'Blue Whale', status: true},
        { category: 'Food', question: 'Tulak ni Padre Gomez\nPano nin perdigones', answer: 'Blue Whale', status: true},
        { category: 'Food', question: 'Orig ko sa pulo\nBulbol na pako', answer: 'Blue Whale', status: true},
        { category: 'Food', question: 'An payong nin agta\nDae nababasa', answer: 'Blue Whale', status: true},
        { category: 'Food', question: 'Tubig sa daso\nDae nagkakalag o-kag', answer: 'Blue Whale', status: true},
        { category: 'Food', question: 'An magurang dai naghihiro\nAn aki nagkakamang', answer: 'Blue Whale', status: true},
        { category: 'Food', question: 'Harong kosa Masbate\nSaro saro an harigi', answer: 'Blue Whale', status: true},
        { category: 'Food', question: 'Sako na ngani si hilaw\nSaimo na hinog\nTano kapa nagkuku', answer: 'Blue Whale', status: true},

        // NATURAL PHENOMENA
        { category: 'Natural', question: 'Pag-agi ni kuwaw\nHinigop an sabaw', answer: 'Blue Whale', status: true},
        { category: 'Natural', question: 'Nag-abot si boy negro\nNagkagaradan si mga tao', answer: 'Blue Whale', status: true},
        { category: 'Natural', question: 'Aram mo pero dai mo masasabot an\nDae mo nasasabot', answer: 'Blue Whale', status: true},
        
    ];
    // GAMEPLAY SECTION
    const answerContainer = document.querySelector('.answer-container');
    const questionParagraph = document.querySelector('.question');
    const scoreParagraph = document.querySelector('.score p');

    let currentQuestionIndex = 0;
    let score = 0;
    let answeredQuestions = [];

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
            // Mark the question as answered
            randomQuestion.status = false;
            // Add the question to the answered questions list
            answeredQuestions.push(randomQuestion);
            return randomQuestion;
        } else {
            // All questions have been answered, return null
            return null;
        }
    }

    // GENERATE INPUT TAGS
    function generateInputs(word) {
        answerContainer.innerHTML = '';
    
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
    
                // Check if the entire word is correct
                if (answerContainer.children.length === word.length && Array.from(answerContainer.children).every(input => input.value.toLowerCase() === word.charAt(Array.from(answerContainer.children).indexOf(input)).toLowerCase())) {
                    // Word is correct, proceed to the next question or highscore if all questions are answered
                    currentQuestionIndex++;
                    score += 100;
                    if (currentQuestionIndex < questions.length) {
                        displayQuestion(currentQuestionIndex);
                    } else {
                        displayHighscore();
                    }
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
    
    function displayQuestion() {
        const currentQuestion = getRandomQuestion();
        const formattedQuestion = currentQuestion.question.replace(/\n/g, '<br>');
    
        if (currentQuestion) {
            questionParagraph.innerHTML = `${formattedQuestion}`;
            scoreParagraph.textContent = `SCORE: ${score}`;
            generateInputs(currentQuestion.answer);
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
    
    // DISPLAY FIRST QUESTION
    displayQuestion(currentQuestionIndex);
});