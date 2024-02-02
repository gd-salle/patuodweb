document.addEventListener('DOMContentLoaded', function () {
    // SOUND
    const clickedSound = document.getElementById('clickedSound');

    // BUTTON
    const restartBtn = document.getElementById('restartBtn');
    const quitBtn = document.getElementById('quitBtn');
    // const plantBtn = document.getElementById('plantBtn');
    
    // SECTIONS
    const startSection = document.querySelector('.start-section');
    // const plantGamemode = document.querySelector('.plant-gamemode');
    const gameplaySettingSection = document.querySelector('.gameplay-setting');
    const highscoreSection = document.querySelector('.highscore-section');
    
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
    ]

    // GAMEPLAY SECTION
    const answerContainer = document.getElementById('.plant-answer');
    const questionParagraph = document.querySelector('.plant-question');
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
})