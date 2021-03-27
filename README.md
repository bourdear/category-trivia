# <div align="center">Category Trivia</div>
## Description
Category Trivia is a browser based game that pulls JSON data from an API. Questions and answers are pulled from the JSON data and displayed on screen. A player chooses between 7 trivia categories. The player tries to correctly guess 20 multiple choice questions. 

&nbsp;

![game demonstration](/images/example.gif?raw=true)

&nbsp;

## How to Play
* Select a trivia category from the dropdown menu.
* Click the "PLAY" button.
* Get as many questions correct as you can!

&nbsp;

## <div align="center">  [Click Here to Play](https://bourdear.github.io/category-trivia/)</div>

&nbsp;

# About the Project

&nbsp;

## Pulling From an API
* An `async` function is used to fetch the data from the API.
* With `await fetch(api_url)`, the function's code is paused until the API data is returned. This data is saved in a variable called response.
* The response is mapped to a JavaScript object using the function `.json()` and is saved to the previously declared variable "data".

```
async function getJsonData() {
    const response = await fetch(api_url);
    data = await response.json();
}
```

&nbsp;

## Using JSON Data
* In the function `newQuestion()`, a question and 4 answers are pulled from the "data" object. 
* Each round the "questionNumber" variable increases by 1 and a new question and answer set is pulled.

```
const newQuestion = () => {
    const { results, question, correct_answer, incorrect_answers } = data;
    array = [results[questionNumber].correct_answer,
        results[questionNumber].incorrect_answers[0], 
        results[questionNumber].incorrect_answers[1],
        results[questionNumber].incorrect_answers[2]];
    shuffle(array);
    questionNumber++;
}
```

* The answers are saved to an array and shuffled with the function `shuffle()`.

```
const shuffle = (array) => {
    array.sort(() => Math.random() - 0.5);
}
```



