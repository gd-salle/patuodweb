document.addEventListener('DOMContentLoaded', function () {
    // ARRAY OF OBJECTS
    const questions = [
        // BODY PART CATEGORY
        { category: 'BodyPart', question: 'Orig kong mataba\nNakakodal ning tingga', answer: 'Dila', status: true},
        { category: 'BodyPart', question: 'Duwang bolang itom\nHarayo an inabaton\nDae man inapon', answer: 'Mata', status: true},
        { category: 'BodyPart', question: 'Kaputi ta yaon\n Hilinga ta mayo', answer: 'Talinga', status: true},
        { category: 'BodyPart', question: 'Mapasatubig, Mapasakalayo\nDae naaano', answer: 'Anino', status: true},, 
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


    const gameplaySection = document.querySelector('.gameplay-section');
    const resumeBtnBtn = document.getElementById('resumeBtn');

    //GAMEPLAY SETTING
    const gpSettingBtn = document.getElementById('gpSettingBtn');
    const gameplaySettingSection = document.querySelector('.gameplay-setting');

    gpSettingBtn.addEventListener('click', function () {
        gameplaySettingSection.style.display = 'block';
        gameplaySection.style.display = 'none';
        clickedSound.play();
    });
    
    //RESUME
    resumeBtnBtn.addEventListener('click', function () {
        gameplaySettingSection.style.display = 'none';
        gameplaySection.style.display = 'block';
        clickedSound.play();
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

    displayQuestion(currentQuestionIndex);
})