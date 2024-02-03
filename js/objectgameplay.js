document.addEventListener('DOMContentLoaded', function () {
    // ARRAY OF OBJECTS
    const questions = [
        // OBJECT CATEGORY
        { category: 'Object', question: 'Yugyog sa kabalagun an huning kapunayan', answer: 'gitara', status: true},
        { category: 'Object', question: 'Harong ko sa bulod\nSaro-saro an tukod', answer: 'tubo', status: true},
        { category: 'Object', question: 'Bakong tao, bakong hayop\nMaitom ang payo', answer: 'palito', status: true},
        { category: 'Object', question: 'Bakong tao, bakong hayop\nNagsusulot plantsado', answer: 'ulunan', status: true},
        { category: 'Object', question: 'Binotong ko si balagon\nNaribok si maghapon', answer: 'kampana', status: true},
        { category: 'Object', question: 'Kun basog tindog\nKun gutom lup-og', answer: 'sako', status: true},
        { category: 'Object', question: 'May ngipon daeng ngimot\nMay bitis daeng kamot', answer: 'kudkudan', status: true},
        { category: 'Object', question: 'Labi an rutab rutab\nMantang naglulutab', answer: 'kandila', status: true},
        { category: 'Object', question: 'May lalawgon mayong mata, may kamot mayong takyag\nKun nagagadan dae nalalapa', answer: 'relo', status: true},
        { category: 'Object', question: 'Talodtod nin buaya\nMaghapon balada', answer: 'atop', status: true},
        { category: 'Object', question: 'Kun ati hararom\n Kun taob hababaw', answer: 'dulay', status: true},
        { category: 'Object', question: 'Kapti an ikog ko\nTa maladop ako', answer: 'tabo', status: true},
        { category: 'Object', question: 'Dara mo, dara ka\nDara pa an saimong dara', answer: 'sapatos', status: true},
        { category: 'Object', question: 'Pagkaaga minatindog\nPagkabang gi lupaypay', answer: 'banig', status: true},
        { category: 'Object', question: 'Saro an nilaugan\nTulo an niluwasan', answer: 'bado', status: true},
        { category: 'Object', question: 'Kargada ni ama mo\nNagliligid sa abo', answer: 'tabayop', status: true},
        { category: 'Object', question: 'Ikog kan Karabaw\nNakaabot sa mindanao', answer: 'Kable kan kuryente', status: true},
        { category: 'Object', question: 'Binakal kong itom\nGinamit kong pula\nKan apuna nagin abo', answer: 'oring', status: true},
        { category: 'Object', question: 'Ikog kan amid\nNakasablay sa bukid', answer: 'dalan', status: true},
        { category: 'Object', question: 'Tulong magturugang ning mapuputi an daghan', answer: 'Taluhong', status: true},
    ]

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

    displayQuestion(currentQuestionIndex);

    const gameplaySection = document.querySelector('.gameplay-section');
    const resumeBtnBtn = document.getElementById('resumeBtn');

    //GAMEPLAY SETTING
    const gpSettingBtn = document.getElementById('gpSettingBtn');
    const gameplaySettingSection = document.querySelector('.gameplay-setting');

    gpSettingBtn.addEventListener('click', function () {
        gameplaySettingSection.style.display = 'block';
        gameplaySection.style.display = 'none';
    });
    
    //RESUME
    resumeBtnBtn.addEventListener('click', function () {
        gameplaySettingSection.style.display = 'none';
        gameplaySection.style.display = 'block';
    });

    //RESTART
    restartBtn.addEventListener('click', function () {
        currentQuestionIndex = 0;
        score = 0;
        gameplaySection.style.display = 'block';
        gameplaySettingSection.style.display = 'none';
        displayQuestion(currentQuestionIndex);
        clickedSound.play();
    });

    function goToIndexPage() {
        window.location.href = 'index.html';
    }

    document.getElementById('quitBtn').addEventListener('click', goToIndexPage);
    document.getElementById('startBtn').addEventListener('click', goToIndexPage);

})