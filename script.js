document.addEventListener('DOMContentLoaded', (event) => {
    const options = document.querySelectorAll('.option');
    const submitButton = document.getElementById('submit');
    const redoButton = document.getElementById('redo');

    options.forEach(option => {
        option.addEventListener('click', () => {
            const siblings = option.parentNode.querySelectorAll('.option');
            siblings.forEach(sibling => sibling.classList.remove('selected'));
            option.classList.add('selected');
        });
    });

    submitButton.addEventListener('click', validateAnswers);
    redoButton.addEventListener('click', resetActivity);

    function validateAnswers() {
        const correctAnswers = ['true', 'false', 'true', 'true', 'false', 'true'];
        const selectedOptions = document.querySelectorAll('.option.selected');

        selectedOptions.forEach((selectedOption, index) => {
            const selectedAnswer = selectedOption.getAttribute('data-answer');
            if (selectedAnswer === correctAnswers[index]) {
                selectedOption.classList.add('correct');
                selectedOption.classList.remove('incorrect');
            } else {
                selectedOption.classList.add('incorrect');
                selectedOption.classList.remove('correct');
            }
        });
    }

    function resetActivity() {
        options.forEach(option => {
            option.classList.remove('selected', 'correct', 'incorrect');
        });
    }
});
