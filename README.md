# JavaScript-Quiz

<p align="center">
<img src ="./readme_assets/quiz1.png" width="600px">
</p>

Link to deployed application: https://dchiev.github.io/JavaScript-Quiz/

## Process

1. I first began by creating the HTML page with Bootstrap components and layout (i.e. rows and columns.) I also made sure each ID or element that would feature a question or answer had a unique ID name to grab later. I then did the same for the high scores page. 


2. I then started off by grabbing the necessary elements from the DOM that I would later use to change elements, text, etc. 

3. I then used `setInterval` to create a running clock that would start at 60 seconds. 

4. I then created an an array featuring an object for each question and answer choices. 

5. I then created functions for each question that would display the current question, answer choices. Then using the dom, the current question would displayed in a `h5` element, while the answer choices would be shown in different `button`s. The right answer would have it's own event listener. The wrong answers would have a function of wrong answers with an `eventListener` for each choice as well. Choosing a wrong choice would take 5 seconds off the running timer. This is then repeated for the remaining 3 questions.

6. To trigger the next function, a `setTimeout` was used to display the next question and answer choices after a button was clicked and a time of 2 seconds. 

7. To capture score and name, local storage was used to save the remaining time with an `input` used to save the user name. The submit button then also brings you to the high score page. 

8. I then used local storage to display the score and name on the high score page. 


