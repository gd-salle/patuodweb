document.addEventListener('DOMContentLoaded', function () {
    // ARRAY OF OBJECTS
    const questions = [
        // PLANT CATEGORY
        { category: 'Plant', question: 'An payong nin agta\nDae nababasa', answer: 'natong', status: true},
        { category: 'Plant', question: 'Tubig sa daso\nDae nagkakalago-kago', answer: 'tubo' , status: true},
        { category: 'Plant', question: 'An magurang dai naghihiro\nAn aki nagkakamang', answer: 'kalabasa' , status: true},
        { category: 'Plant', question: 'Harong ko sa Masbate\nSaro saro an harigi', answer: 'kabute' , status: true},
        { category: 'Plant', question: 'Sako na ngani si hilaw\nSaimo na hinog\nTano kapa nagkukuharaw', answer: 'sili' , status: true},
        { category: 'Plant', question: 'Namotan ko si aki mo\nGinadan ko si ina mo', answer: 'batag', status: true},
        { category: 'Plant', question: 'Tubig sa rikandikan\nDae nauuranan', answer: 'tipong', status: true},
        { category: 'Plant', question: 'Bola an laog\nGapas an laog dagom\nDagom an laog tubig', answer: 'lukban', status: true},
        { category: 'Plant', question: 'Tulak ni Padre Gomez\nPano nin perdigones', answer: 'tapayas', status: true},
        { category: 'Plant', question: 'Orig ko sa pulo\nBulbul na pako', answer: 'langka', status: true}, 
    ]

    // GAMEPLAY SECTION
    const answerContainer = document.querySelector('.answer-container');
    const questionParagraph = document.querySelector('.question');
    const scoreParagraph = document.querySelector('.score p');
    const highscoreSection = document.querySelector('.highscore-section');


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

    document.getElementById('passBtn').addEventListener('click', function () {
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
        displayQuestion(currentQuestionIndex);
    })

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
    function playCorrectSound() {
        const correctSound = document.getElementById('correct');
        correctSound.play();
    }

    // Play incorrect sound
    function playIncorrectSound() {
        const incorrectSound = document.getElementById('incorrect');
        incorrectSound.play();
    }
    document.getElementById('quitBtn').addEventListener('click', goToIndexPage);
    document.getElementById('continueBtn').addEventListener('click', goToIndexPage);
})