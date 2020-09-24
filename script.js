// Grabbing the DOM

var timer = document.getElementById ("timer");
var timeLeft= 60;

var questionAsked = document.getElementById("question");
var answersChoice1 = document.getElementById("button-1");
var answersChoice2 = document.getElementById("button-2");
var answersChoice3 = document.getElementById("button-3");
var answersChoice4 = document.getElementById("button-4");
var wrongOrRight = document.getElementById("answer-alert");
var yourScore = document.getElementById("final-score")
 

// Timer

var timerInterval
function setTime() {
    timerInterval = setInterval(function() {
      timeLeft--;
      timer.innerHTML = timeLeft
  
    }, 1000);
}
setTime();








  


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
            a: "javascript",
            b: "js",
            c: "script",
            d: "css"
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

// Function for question 1 


function question1 (){

    function changeQuestions1() { 
        
    var questionString = JSON.stringify (questions[0].question);
    questionAsked.innerHTML = questionString;
    
    }

    changeQuestions1(); 

    function changeAnswers1 () {
    var answerString = JSON.stringify (questions[0].answers.a);
        answersChoice1.innerHTML = answerString;
        var answerString = JSON.stringify (questions[0].answers.b);
        answersChoice2.innerHTML = answerString;
        var answerString = JSON.stringify (questions[0].answers.c);
        answersChoice3.innerHTML = answerString;
        var answerString = JSON.stringify (questions[0].answers.d);
        answersChoice4.innerHTML = answerString;
    }

    changeAnswers1(); 

    answersChoice1.addEventListener("click", function (){
        wrongOrRight.innerHTML = "You've got that right!"
        setTimeout (question2, 2000);
    })



    function wrongAnswer1() {
        var wrongAnswers = [answersChoice2, answersChoice3, answersChoice4]
        for (let i = 0; i < wrongAnswers.length; i++) {    
        wrongAnswers[i].addEventListener("click", function () {
            wrongOrRight.innerHTML = "That is wrong!"
            timeLeft -= 5;
            
            setTimeout (question2, 2000);

          
        })
    }}

    wrongAnswer1();
}



// Question 2

function question2 (){

    function changeQuestions2() { 
       
      var questionString = JSON.stringify (questions[1].question);
      questionAsked.innerHTML = questionString;
      
   }
   
   changeQuestions2(); 
   
   function changeAnswers2 () {
      var answerString = JSON.stringify (questions[1].answers.a);
       answersChoice1.innerHTML = answerString;
       var answerString = JSON.stringify (questions[1].answers.b);
       answersChoice2.innerHTML = answerString;
       var answerString = JSON.stringify (questions[1].answers.c);
       answersChoice3.innerHTML = answerString;
       var answerString = JSON.stringify (questions[1].answers.d);
        answersChoice4.innerHTML = answerString;
    }
   
   changeAnswers2(); 
   
   answersChoice3.addEventListener("click", function (){
       wrongOrRight.innerHTML = "You've got that right!"
       setTimeout (question3, 2000);
   })
   
   function wrongAnswer2 () {
       var wrongAnswers = [answersChoice1, answersChoice2, answersChoice4]
       for (let i = 0; i < wrongAnswers.length; i++) {    
       wrongAnswers[i].addEventListener("click", function () {
           wrongOrRight.innerHTML = "That is wrong!"
           timeLeft -= 5;
           setTimeout (question3, 2000);
       })
   }}
   
   wrongAnswer2 ();
   
 
   }



// Question 3 
   function question3 (){

    function changeQuestions3() { 
       
      var questionString = JSON.stringify (questions[2].question);
      questionAsked.innerHTML = questionString;
      
   }
   
   changeQuestions3(); 
   
   function changeAnswers3 () {
      var answerString = JSON.stringify (questions[2].answers.a);
       answersChoice1.innerHTML = answerString;
       var answerString = JSON.stringify (questions[2].answers.b);
       answersChoice2.innerHTML = answerString;
       var answerString = JSON.stringify (questions[2].answers.c);
       answersChoice3.innerHTML = answerString;
       var answerString = JSON.stringify (questions[2].answers.d);
        answersChoice4.innerHTML = answerString;
    }
   
   changeAnswers3(); 
   
   answersChoice3.addEventListener("click", function (){
       wrongOrRight.innerHTML = "You've got that right!"
       setTimeout (question4, 2000);
   })
   
   function wrongAnswer3 () {
       var wrongAnswers = [answersChoice1, answersChoice2, answersChoice4]
       for (let i = 0; i < wrongAnswers.length; i++) {    
       wrongAnswers[i].addEventListener("click", function () {
           wrongOrRight.innerHTML = "That is wrong!"
           timeLeft -= 5;
           setTimeout (question4, 2000);
       })
   }}
   
   wrongAnswer3 ();
   
   }

// Question 4

function question4 (){

    function changeQuestions4() { 
       
      var questionString = JSON.stringify (questions[3].question);
      questionAsked.innerHTML = questionString;
      
   }
   
   changeQuestions4(); 
   
   function changeAnswers4 () {
      var answerString = JSON.stringify (questions[3].answers.a);
       answersChoice1.innerHTML = answerString;
       var answerString = JSON.stringify (questions[3].answers.b);
       answersChoice2.innerHTML = answerString;
       var answerString = JSON.stringify (questions[3].answers.c);
       answersChoice3.innerHTML = answerString;
       var answerString = JSON.stringify (questions[3].answers.d);
        answersChoice4.innerHTML = answerString;
    }
   
   changeAnswers4(); 
   
   answersChoice1.addEventListener("click", function (){
       wrongOrRight.innerHTML = "You've got that right!"
       timeResult();
       finalScore();
   })
   
   function wrongAnswer4 () {
       var wrongAnswers = [answersChoice3, answersChoice2, answersChoice4]
       for (let i = 0; i < wrongAnswers.length; i++) {    
       wrongAnswers[i].addEventListener("click", function () {
           wrongOrRight.innerHTML = "That is wrong!"
           timeLeft -= 5;
           timeResult();
           finalScore();
       })
   }}
   
   wrongAnswer4 ();
   
   }

   // Calling question1 function to start chained functions. 
   question1();

   function timeResult() {
       clearInterval(timerInterval);
    setTimeout (questionAsked.textContent = "Your Score Is " + timer.textContent, 100000);
   }

   // Function for the end of the game that displays final score and inputs for name and score
   var submitName
   var userName = ""
   var userScore = timer
   function finalScore () {
        var nameInput = document.createElement ("input");
        var submitName = document.createElement ("button");
        submitName.id="submit-name";
        nameInput.setAttribute("type","text");
        nameInput.setAttribute ("value", "Your Name");
        yourScore.appendChild(nameInput);
        wrongOrRight.remove();
        submitName.innerHTML = "Submit";
        yourScore.append(submitName);

// After clicking submit, it brings you to the high score page. 
    submitName.addEventListener("click", function (){
        document.location.href="./highscores.html";
    })
// Save Score and Name
    // Save Score and Name
    localStorage.setItem(userScore);
    localStorage.setItem(userName);
    }

// Print scores on the High Scores Page 
var nameFromQuiz = localStorage.setItem(userName);
var scoreFromQuiz = localStorage.setItem(userScore);
document.createElement("li", nameFromQuiz);
document.createElement ("li", scoreFromQuiz)




 



   

 
