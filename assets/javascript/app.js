$(document).ready(function() {


function initialScreen() {
  var basketBallImage = "<img class='center-block img-right' src='assets/images/basketball.jpeg'>"
  var initialContext = "<p class='text-center initialContext'><b>Take the NBA Trivia Quiz to test your knowledge of the NBA!<b></p>"
  var startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' role='button'>Start Quiz</a></p>";
  $(".mainArea").html( basketBallImage  + initialContext + startScreen);

}

initialScreen();


$("body").on("click", ".start-button", function(event){

  generateHTML();

  timerWrapper();

});

$("body").on("click", ".answer", function(event){
  var selectedAnswer = $(this).text();
  if(selectedAnswer === correctAnswers[questionCounter]) {
    clearInterval(theClock);
    generateWin();
  }
  else {
    clearInterval(theClock);
    generateLoss();
  }
});

$("body").on("click", ".reset-button", function(event){
  resetGame();
});

});

function generateLossDueToTimeOut() {
  unansweredTally++;
  gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='assets/images/x.png'>";
  $(".mainArea").html(gameHTML);
  setTimeout(wait,4000);
}

function generateWin() {
  correctTally++;
  gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
  $(".mainArea").html(gameHTML);
  setTimeout(wait,4000);
}

function generateLoss() {
  incorrectTally++;
  gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='assets/images/x.png'>";
  $(".mainArea").html(gameHTML);
  setTimeout(wait,4000);
}

function generateHTML() {
  gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p><p class='answer'>D. "+answerArray[questionCounter][3]+"</p>";
  $(".mainArea").html(gameHTML);
}

function wait() {
  if (questionCounter < 7) {
  questionCounter++;
  generateHTML();
  counter = 30;
  timerWrapper();
  }
  else {
    finalScreen();
  }
}

function timerWrapper() {
  theClock = setInterval(thirtySeconds, 1000);
  function thirtySeconds() {
    if (counter === 0) {
      clearInterval(theClock);
      generateLossDueToTimeOut();
    }
    if (counter > 0) {
      counter--;
    }
    $(".timer").html(counter);
  }
}

function finalScreen() {
  gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Quiz completed; here are your results!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctTally + "</p>" + "<p>Wrong Answers: " + incorrectTally + "</p>" + "<p>Unanswered: " + unansweredTally + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
  $(".mainArea").html(gameHTML);
  if ( correctTally === 8) {
    $(".mainArea").append( "<p>Wow, you must be a huge fan of the NBA!</p>")
  }
  if ( correctTally === 0) {
    $(".mainArea").append("<p>It appears you must not be a fan of the NBA!</p>")
  }
}

function resetGame() {
  questionCounter = 0;
  correctTally = 0;
  incorrectTally = 0;
  unansweredTally = 0;
  counter = 30;
  generateHTML();
  timerWrapper();
}

var startScreen;
var gameHTML;
var counter = 30;
var questionArray = ["What year was the National Basketball Association first established?", "Michael Jordan was drafted third overall in 1984. Which two players were selected ahead of him?", "What year did the NBA-ABA merger occur?", "Who is the only coach to win both a NCAA and NBA championship?", "Who was the NBA's first commissioner?", "What number did Michael Jordan wear when he came out of retirement for the end of the 1994-1995 season?", "Before they were the 'Showtime' Los Angeles Lakers, what US city was home to the franchise?", "Since the NBA began handing out Most Valuable Player awards in 1956, who has won the most MVP trophies through the 2013-14 season?"];
var answerArray = [["1935", "1945", "1946", "1958"], ["Hakeem Olajuwon & Sam Bowie","Patrick Ewing & Hakeem Olajuwon","Charles Barkley & Hakeem Olajuwon","Karl Malone & Sam Bowie"], ["1970", "1973", "1976", "1974"], ["Rick Pitino","Larry Brown","Chuck Daly","John Calipari"], ["James A. Naismith", "Maurice Podoloff", "Jackie Moon", "Walter Brown"], ["32","45","23","22"], ["Kansas City", "Indianapolis", "Minneapolis", "St. Louis"], ["Wilt Chamberlain","Michael Jordan","Bill Russell","Kareem Abdul-Jabbar"]];
var imageArray = ["<img class='center-block img-right' src='assets/images/NBA-logo.png'>", "<img class='center-block img-right' src='assets/images/HKandSB.jpg'>", "<img class='center-block img-right' src='assets/images/NBA_ABA.png'>", "<img class='center-block img-right' src='assets/images/Larry_Brown.jpg'>", "<img class='center-block img-right' src='assets/images/Maurice_Podoloff.jpg'>", "<img class='center-block img-right' src='assets/images/jordan_45.jpeg'>", "<img class='center-block img-right' src='assets/images/Minneapolis.jpg'>", "<img class='center-block img-right' src='assets/images/kareem.jpg'>"];
var correctAnswers = ["C. 1946", "A. Hakeem Olajuwon & Sam Bowie", "C. 1976", "B. Larry Brown", "B. Maurice Podoloff", "B. 45", "C. Minneapolis", "D. Kareem Abdul-Jabbar"];
var questionCounter = 0;
var selecterAnswer;
var theClock;
var correctTally = 0;
var incorrectTally = 0;
var unansweredTally = 0;
