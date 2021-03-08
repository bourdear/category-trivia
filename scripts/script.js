//Api url https://opentdb.com/api_config.php
let api_url = 'https://opentdb.com/api.php?amount=20&category=25&type=multiple';
let questionNumber = 0;
let score = 0;
let highScore = 0;
let dropdown;

const cache = {
    playButton: document.getElementById('start-button'), 
    categories: document.getElementById('categories'),
    triviaType: document.getElementById('trivia-type'),
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
            api_url = 'https://opentdb.com/api/php?amount=20&category=25&type=multiple';
            cache.triviaType.innerHTML = 'Art';
            break;
        case 'film':
            api_url = 'https://opentdb.com/api/php?amount=20&category=11&type=multiple';
            cache.triviaType.innerHTML = 'Film';
            break;
        case 'history':
            api_url = 'https://opentdb.com/api.pho?amount=20&category=23&type=multiple';
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
