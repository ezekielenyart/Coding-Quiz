// On page load
startTime();

var timeLeft = 60;
var button0 = document.querySelector(".button0")
var button1 = document.querySelector(".button1")
var button2 = document.querySelector(".button2")
var button3 = document.querySelector(".button3")
var displayAnswer = document.createElement("div")
var questionEl = document.querySelector(".question-display")
var i = 0
var timerEl = document.getElementById("timer");
// create array with qeustions
var questionList = [
{
    Question : "You're killing me _____" ,
    possibleAnswers : [
        {text: "Phil"},
        {text: "Walz"},
        {text: "Smalls"},
        {text: "Englebert"},
    ],
    correctAnswer : "Smalls"
},
{
    Question : "You Play Ball _____",
    possibleAnswers : [
        {text: "All Day Long"},
        {text: "Like A Girl"},
        {text: "In the Big Leagues"},
        {text: "With My Cousin"},
    ],
    correctAnswer : "Like a Girl"
},
{   
    Question : "Count on it ______",
    possibleAnswers : [
        {text: "Dirt-Licking Turtle-Muncher"},
        {text: "Poop-Munching Astronaut"},
        {text: "Nerd"},
        {text: "Pee-Drinking Crapface"}
    ],
    correctAnswer: "Pee-Drinking Crapface"
},
{   
    Question : "What movie are these quotes from?",
    possibleAnswers : [
        {text: "Sandlot"},
        {text: "League of their Own"},
        {text: "Field of Dreams"},
        {text: "Angels in the Outfield"},
    ],
    correctAnswer: "Sandlot"
}
]
// Create timer function
function startTime() {
    
//    console.log (timeLeft)
    var timeInterval = setInterval(function() {
      timerEl.textContent = timeLeft + " seconds remaining";
      timeLeft--;
  
      if (timeLeft === 0) {
        timerEl.textContent = "";
        // speedRead();
        clearInterval(timeInterval);
      }
  
    }, 1000);
  }


  



function askQuestion (){
    questionEl.innerHTML = questionList[i].Question

    button0.innerHTML = questionList[i].possibleAnswers[0].text

    button1.innerHTML = questionList[i].possibleAnswers[1].text

    button2.innerHTML = questionList[i].possibleAnswers[2].text

    button3.innerHTML = questionList[i].possibleAnswers[3].text

    console.log("Question:" + questionEl)
    console.log("test" + questionList[i].Question)
    console.log("testAnswer" + questionList[i].possibleAnswers[0].text)
}


button0.addEventListener("click", function(){assignAnswer(button0.textContent)})
button1.addEventListener("click", function(){assignAnswer(button1.textContent)})
button2.addEventListener("click", function(){assignAnswer(button2.textContent)})
button3.addEventListener("click", function(){assignAnswer(button3.textContent)})

function assignAnswer(answer) {
    console.log(answer)
    checkAnswer(answer)
}

function gameOver (){
    
    window.open("./highscores.html")
}

console.log(i)
function checkAnswer (answer) {
    if (i == 3) {
        gameOver();
    }
        if (answer == questionList[i].correctAnswer) {
        displayAnswer.innerHTML = "You have chosen...wisely";
        i++;
        // console.log (answer + "answer")
        askQuestion();
    }   
        else {
        displayAnswer.innerHTML = "You have chosen...poorly";
        i++;
        timeLeft -= 10;
        askQuestion();
    }
    
    }


askQuestion();