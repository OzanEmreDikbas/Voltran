let randomQuess = Math.floor(Math.random() * 100 + 1);
const inputField = document.querySelector("#input");
const checkButton = document.querySelector("#check");
const resultField = document.querySelector("#result");
const attemptsField = document.querySelector("#attempts");
let guess = 0;
console.log(randomQuess);
checkButton.addEventListener('click', checkNumber);

function checkNumber() {
    let inputValue = parseInt(inputField.value);
    let newguess = guess;
    if (inputValue === randomQuess) {
        guess = guess + 1;
        resultField.innerText = `Graduliation, correct ${inputValue} Answer!!!! Let\'s go again...`
        attemptsField.innerText = `Graduliation ${guess}. guessing.`
            // document.getElementById('input').value = '';


    } else if (inputValue > randomQuess) {
        guess = guess + 1;
        resultField.innerText = ` Your guess was ${inputValue} That's too high. Try Again!!`
        attemptsField.innerText = `${guess}. guessing.`
            // document.getElementById('input').value = '';
        return newguess;

    } else if (inputValue < randomQuess) {
        guess = guess + 1;
        resultField.innerText = ` Your guess was ${inputValue} That's too low. Try Again!!`
        attemptsField.innerText = `${guess}. guessing.`
            // document.getElementById('input').value = '';
        return newguess;
    }
};

function guessRandom(randomQuess) {
    return (randomQuess > 0 && randomQuess < 101);
}
/*
function inputValue(inputValue) {
    let inputValue = inputField.value;
   
    if (inputValue.length == 0 || !guessRandom(randomQuess)) {
        resultField.innerText = ` Please enter a whole number 1-100 and press the Guess button.`
        document.getElementById('input').value = ''
        return newguess;
    } else if (inputValue.indexOf('.') != -1) {
        resultField.innerText = ` Please enter a whole number 1-100 and press the Guess button.`
        document.getElementById('input').value = ''
        return newguess;
    } else {
        guess = guess + 1;
    }
}*/