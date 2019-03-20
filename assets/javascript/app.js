
var currentQuestion;
var questionTimer = 31;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unansweredQuestions = 0;
var timerRunning = false;

//create an object holding the questions with the answers?
var question = [
  {
    ask: "question1",
    answers : ["a", "b", "c"],
    correct : "a",
    imgUrl: "https://media.giphy.com/media/TE3ZlXmfr5psI/giphy.gif"
  },
  {
    ask: "question2",
    answers : ["d", "e", "f"],
    correct : "f"
  },
  {
    ask: "question3",
    answers : ["g", "h", "i"],
    correct : "g"
  }
]
//hide answer buttons
$(".answerBtn").prop("hidden", true);

$("#startButton").on("click", function(){
  console.log("click");
  startGame();
});

function startGame(){
  //reset timer and vars
  questionTimer = 31;
  correctAnswers = 0;
  incorrectAnswers = 0;
  unansweredQuestions = 0;
  //hide the start button, show "Time Remaining" and start the timer 
  $("#startButton").prop("hidden", true);
  $("#timer-text").text("Time Remaining: ");
  intervalId = setInterval(count, 1000);
  
  //pick random question from questions array and display
  // for(var i =0; i < question.length; i++){
  //   console.log(i);
  // };
  question.forEach(function(){
    var currentQuestion = question[0];
    console.log("picked question", currentQuestion);
    $("#questions").text(currentQuestion.ask);
    $("#answer1").html(currentQuestion.answers[0]);
    $("#answer2").html(currentQuestion.answers[1]);
    $("#answer3").html(currentQuestion.answers[2]);
  });
  $(".answerBtn").prop("hidden", false);

};

function count() {
  // Decrease time by 1 sec at a time and display timer
  questionTimer--;
  $("#timeRemaining").text(questionTimer);
}


$(".answerBtn").click(function(event){
  console.log("answered selected", event);
  //var userAnswer = event;
  if($(event.target).data("name") === currentQuestion.answers){
    console.log("correct")
  }else{
    console.log("incorrect")
  };
  //event is button with #answer1  BUT question.correct is a string "a"
  // if(userAnswer === question.correct){
  //   console.log("correct")
  // }
});

// $(".answerBtn").click(function answerCheck(answer){
//   console.log("answered selected", answer);
//   console.log(question[0].answer2);
//   //assign click to var?
  
//   if(answer === question[0].answer2){
//     console.log("winner");
//     //console.log(question[0].correct);
//   } else {
//     console.log("incorrect");
//   };
//       //console.log("You Win") //flash picture
//       //console.log("Incorrect") // show correct answer and picture
  
// });



