// ANSWER FUNCTION DONE!
document.addEventListener('DOMContentLoaded', function () {
    function generateInputs(word) {
        const answerContainer = document.querySelector('.answer-container');

        // Clear any existing content in the container
        answerContainer.innerHTML = '';

        // Loop through each letter in the word and create an input element
        for (let i = 0; i < word.length; i++) {
            const input = document.createElement('input');
            input.type = 'text';
            input.maxLength = 1; // Limit input to one character
            answerContainer.appendChild(input);

            // Disable all inputs except the first one
            if (i > 0) {
                input.disabled = true;
            }

            // Add event listener for handling user input
            input.addEventListener('input', function () {
                if (i < word.length - 1 && input.value) {
                    // Move to the next input if available and enable it
                    answerContainer.children[i + 1].disabled = false;
                    answerContainer.children[i + 1].focus();
                }
            });

            // Add event listener for handling backspace
            input.addEventListener('keydown', function (e) {
                if (e.key === 'Backspace') {
                    // Clear the current input before moving to the previous one
                    input.value = '';
                    if (i > 0) {
                        answerContainer.children[i - 1].focus();
                        answerContainer.children[i].disabled = true;
                    }
                }
            });
        }
    }

    // Example usage: Call the function with the word 'test'
    generateInputs('testing');
});
