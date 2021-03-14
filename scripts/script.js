//Api url https://opentdb.com/api_config.php
let api_url = 'https://opentdb.com/api.php?amount=20&category=25&type=multiple';
let questionNumber = 0;
let score = 0;
let highScore = 0;
let dropdown;
let array;
let correctAnswer;
let correctAnswerDiv = document.createElement('div');


const cache = {
    playButton: document.getElementById('start-button'), 
    categories: document.getElementById('categories'),
    triviaType: document.getElementById('trivia-type'),
    firstGroup: document.querySelectorAll('.first-group'),
    gameGroup: document.querySelectorAll('.game-group'),
    flexItems: document.querySelectorAll('.flex-items'),
    answers: document.querySelectorAll('.answers'),
    nextButton: document.getElementById('next-button'),
    questionSpan: document.getElementById('question-number'),
    question: document.getElementById('question'), 
    answer1: document.getElementById('answer-1'),
    answer2: document.getElementById('answer-2'),
    answer3: document.getElementById('answer-3'),
    answer4: document.getElementById('answer-4')
}

//Gets the dropdown value.
cache.categories.addEventListener('change', function() {
    dropdown = cache.categories.value;

    //Loads the corresponding API link to the dropdown value.
    switch(dropdown) {
        case 'animals':
            api_url = 'https://opentdb.com/api.php?amount=20&category=27&type=multiple';
            cache.triviaType.innerHTML = 'Animal';
            break;
        case 'art':
            api_url = 'https://opentdb.com/api.php?amount=20&category=25&type=multiple';
            cache.triviaType.innerHTML = 'Art';
            break;
        case 'film':
            api_url = 'https://opentdb.com/api.php?amount=20&category=11&type=multiple';
            cache.triviaType.innerHTML = 'Film';
            break;
        case 'history':
            api_url = 'https://opentdb.com/api.php?amount=20&category=23&type=multiple';
            cache.triviaType.innerHTML = 'History';
            break;
        case 'music':
            api_url = 'https://opentdb.com/api.php?amount=20&category=12&type=multiple';
            cache.triviaType.innerHTML = 'Music';
            break;
        case 'mythology':
            api_url = 'https://opentdb.com/api.php?amount=20&category=20&type=multiple';
            cache.triviaType.innerHTML = 'Mythology';
            break;
        case 'science':
            api_url = 'https://opentdb.com/api.php?amount=20&category=17&type=multiple';
            cache.triviaType.innerHTML = 'Science';
            break;
    }
});

if (dropdown == null) {
    api_url = 'https://opentdb.com/api.php?amount=20&category=25&type=multiple';
    cache.triviaType.innerHTML = 'Art';
}

const shuffle = (array) => {
    array.sort(() => Math.random() - 0.5)
}

const showGame = () => {
    cache.firstGroup.forEach(element => element.classList.add('hide'));
    cache.gameGroup.forEach(element => element.classList.add('show'));
    cache.gameGroup.forEach(element => element.classList.remove('hide'));
    cache.flexItems.forEach(element => element.classList.add('show-flex'));
    cache.flexItems.forEach(element => element.classList.remove('hide'));
}

//Changes the text of the questions and answers.
const changeQuestionText = (results, question, correct_answer, incorrect_answers) => {
    cache.question.innerHTML = results[questionNumber].question;
    cache.answer1.innerHTML = array[0];
    cache.answer2.innerHTML = array[1];
    cache.answer3.innerHTML = array[2];
    cache.answer4.innerHTML = array[3];
}

//Displays question number.
const displayQuestNumber = () => {
    cache.questionSpan.innerHTML = questionNumber + 1;
}

const hideNextButton = () => {
    cache.nextButton.classList.add('hide');
    cache.nextButton.classList.remove('show');
    getQuestion();
}

//Changes the background color of the answer divs corresponding with the correct status.
const showAnswer = (param) => {
    param.forEach(function(element) {
        if (element.innerHTML == correctAnswerDiv.innerHTML) {
            element.style.backgroundColor = '#6CE0A3';
        } else {
            element.style.backgroundColor = '#F0A29C';
        }
    });
}

//Pulls data from the API and pulls questions and answers.
async function getQuestion() {
    const response = await fetch(api_url);
    const data = await response.json();
    const { results, question, correct_answer, incorrect_answers } = data;
    array = [results[questionNumber].correct_answer,
        results[questionNumber].incorrect_answers[0], 
        results[questionNumber].incorrect_answers[1],
        results[questionNumber].incorrect_answers[2]];
    shuffle(array);
    displayQuestNumber();
    changeQuestionText(results, question, correct_answer, incorrect_answers);
    showGame();
    correctAnswer = results[questionNumber].correct_answer;
    correctAnswerDiv.innerHTML = correctAnswer;
    questionNumber++;
    
}

cache.playButton.addEventListener('click', () => {
    getQuestion();
});

//Moves onto next question.
cache.nextButton.addEventListener('click', () => {
    hideNextButton();
    cache.answers.forEach(element => element.style.backgroundColor = '#F0BA9C')
});

cache.answers.forEach(element => element.addEventListener('click', () => {
    showAnswer(cache.answers);
    cache.nextButton.classList.add('show');
    cache.nextButton.classList.remove('hide');
}));