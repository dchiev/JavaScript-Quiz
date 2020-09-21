// Grabbing the DOM

var timer = document.getElementById ("timer");
var timeLeft= 60;

var questionAsked = document.getElementById("question");
var answersChoice = document.getElementById("button");
var wrongOrRight = document.getElementById("answer-alert");

// Timer

function setTime() {
    var timerInterval = setInterval(function() {
      timeLeft--;
      timer.textContent = timeLeft
  
      if(timeLeft === 0) {
        clearInterval(timerInterval); 
      }
  


  


// Questions and Answers
var questions = [{

        question: "1. What is a string?",
        answers: {
            a: "A sequence of characters, either as a literal constant or as some kind of variable", 
            b: "An interger",
            c: "An equation",
            d: "A semantic element"
        },
        correctChoice: "a" },
        {

        question: "2. What is an example of a Boolean variable?",
        answers: {
            a: "1, 2, 3",
            b: "x+y",
            c: "true or false",
            d: "Not sure"

        },
        correctChoice: "c"
    },{
        
        question: "3. Which element do we need to link a JavaScript file?",
        answers: {
            a: "<javascript>",
            b: "<js>",
            c: "<script>",
            d: "<css>"
        },
        correctChoice: "c" 

    },{
            question: "4. How do you iterate through an array?",
        answers: {
            a: "for loop",
            b: "if statment",
            c: "function",
            d: "html"
        },
        correctChoice: "a"
    }
    ];

// Display questions

function askQuestions() {

for (let i = 0; i < questions.length; i++) {
   questionAsked.innerHTML (questions[i]);
        }}
    })}