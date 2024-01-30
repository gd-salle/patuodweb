document.addEventListener('DOMContentLoaded', function () {
    const restartBtn = document.getElementById('restartBtn');
    const quitBtn = document.getElementById('quitBtn');
    const startSection = document.querySelector('.start-section');
    const gameplaySection = document.querySelector('.gameplay-section');
    const gameplaySettingSection = document.querySelector('.gameplay-setting');

    const questions = [
        { category: 'Geography', question: 'What is the capital of France?', answer: 'Paris' },
        { category: 'Politics', question: 'Who is the president of the United States?', answer: 'Joe Biden' },
        { category: 'Science', question: 'What is the largest mammal on Earth?', answer: 'Blue Whale' }
        // Add more questions as needed
    ];

    const answerContainer = document.querySelector('.answer-container');
    const questionParagraph = document.querySelector('.question');
    const scoreParagraph = document.querySelector('.score p');

    let currentQuestionIndex = 0;
    let score = 0;

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
                    // Word is correct, proceed to the next question
                    currentQuestionIndex++;
                    score += 100;
                    displayQuestion(currentQuestionIndex);
                }
            });

            input.addEventListener('keydown', function (e) {
                if (e.key === 'Backspace') {
                    input.value = '';
                    if (i > 0) {
                        answerContainer.children[i - 1].focus();
                        answerContainer.children[i].disabled = true;
                    }
                }
            });
        }
    }

    function displayQuestion(index) {
        if (index < questions.length) {
            const currentQuestion = questions[index];
            questionParagraph.textContent = `${currentQuestion.category}: ${currentQuestion.question}`;
            scoreParagraph.textContent = `SCORE: ${score}`;
            generateInputs(currentQuestion.answer);
        } else {
            // All questions answered, you can handle the end game scenario here
            alert('Game Over! Your final score is ' + score);
        }
    }


    //RESTART
    restartBtn.addEventListener('click', function () {
        currentQuestionIndex = 0;
        score = 0;
        gameplaySection.style.display = 'block';
        gameplaySettingSection.style.display = 'none';
        displayQuestion(currentQuestionIndex);
    });

    //QUIT
    quitBtn.addEventListener('click', function () {
        currentQuestionIndex = 0;
        score = 0;
        gameplaySettingSection.style.display = 'none';
        startSection.style.display = 'block';
    });


    // Example usage: Display the first question
    displayQuestion(currentQuestionIndex);
});
