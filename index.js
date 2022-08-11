const num1=Math.ceil(Math.random()*10);
const num2=Math.ceil(Math.random()*10);


const question  = document.getElementById("question");
const formEl = document.getElementById("form");
const answer = document.getElementById("input");
const scoreEl = document.getElementById("score");
const highscoreEl = document.getElementById("highscore");
question.innerText =  `${num1} x ${num2}`;

const correcrAns = num1*num2;


let score = JSON.parse(localStorage.getItem("score"));
let highScore = JSON.parse(localStorage.getItem("highscore"));
if(!score){
    score=0;
}
if(!highScore){
    highScore=0;
}

scoreEl.innerText=`Score:${score}`;
highscoreEl.innerText=`Highscore:${highScore}`;

formEl.addEventListener('submit',()=>{
    const userAns = +answer.value;
    if(userAns===correcrAns){
        score++;
        updateLocalStorage();
    }else{
        score--;
        updateLocalStorage();
    }
});

function updateLocalStorage(){
    if(score>=0){
        localStorage.setItem("score",JSON.stringify(score));
    }
    if(score>highScore){
        localStorage.setItem("highscore",JSON.stringify(score));
    }
}

