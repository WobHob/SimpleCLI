var readlineSync = require('readline-sync');
var highScores = [];

class CLI{
    constructor(date){
        this.date = new Date();
    }

    welcome(){
        var username = readlineSync.question("What's your name?");
        console.log("Hi! "+username);
    }

    questionHelper(){
        var questions = [
            {
                question:"What date is it today?",
                answer: this.getDateHelper()
            },
            {
                question:"What month is it?",
                answer: this.getMonthHelper()
            },
            {
                question:"What year is it?",
                answer: this.getYearHelper()
            }
        ]
        return questions;
    }

    play(questions,answers){
        var users_answers = readlineSync.question(questions);
        if(users_answers == answers){
          return true;
        } 
        else{
          return false;
        }
    }

    gameRunner(){
        var score = 0;
        console.log("------------------------------------------")
        console.log("Please answer the below questions using numbers only");
        console.log("------------------------------------------")

        let questions = this.questionHelper();
        for(var i=0;i<questions.length;i++){
            var q = questions[i];
            score += this.play(q.question,q.answer);
        }
      this.showScores(score,questions.length);
    }

    showScores(score,numQuestions){
        console.log("You scored: ",(score/numQuestions)*100,"%");
        if(score == 3){
          console.log("Congrats your memory is back");
        }
        else{
          console.log("Try again, keep practicing!!");
        }
        highScores.map(score => console.log(score.name,":",score.score))
    } 
    
    getDateHelper(){
      return this.date.getDate();
    }

    getMonthHelper(){
      return this.date.getMonth()+1;
    }

    getYearHelper(){
      return this.date.getFullYear();
    }

}
let game = new CLI();
game.welcome();
game.gameRunner();

