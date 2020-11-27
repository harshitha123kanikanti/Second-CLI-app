const chalk = require('chalk')
console.log(chalk.yellow(" Welcome let's play a quiz"))
var readLineSync = require("readline-sync")

var username = readLineSync.question("What is your name? ");
var score=0;

console.log(chalk.cyanBright("Welcome to the Mahabharat quiz:  " + username));

var questionList = [
{
  question: "1.How many days did war last for? ",
  answer: "18",
}, 
{
  question: "how many sons did Kunti give birth to?",
  answer: "5",
},
{
  question: "Who was the spiritual father of Arjuna?",
  answer: "Indra",
},
{
  question: " Who is the well known charioteer of Dhritarashtra? ",
  answer: "Sanjaya",
},
{
  question: "How many sons does Dhrtarastra have? ",
  answer: "100",
},
];

function play(question, answer) {
  var userAnswer = readLineSync.question(question);
  if(userAnswer.toLowerCase() === answer.toLowerCase()) {
    score = score + 1
    console.log(chalk.green("Correct answer!"));
    
  }
  else {
    console.log(chalk.redBright("Wrong answer!"))
  }
}

for(var i=0; i<questionList.length; i++) {
  currentQuestion = questionList[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log(chalk.cyanBright("Your final score is:" + score))

var highscore=4
if(score>4) {
  console.log(chalk.yellow("You crossed the high score"))
  console.log(chalk.red("Congratulations you scored full!!"))
}else{
  console.log(chalk.bgBlue("Try again to score well"))
}




