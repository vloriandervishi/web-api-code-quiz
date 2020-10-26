const beginQuiz =document.getElementById("button");
const time=document.getElementById("countdown");
const totalScore=document.getElementById("header");
const question =document.getElementById("question");
const choices=Array.from(document.getElementsByClassName("choice-text"));
// const A=document.getElementById("A");
// const B=document.getElementById("B");
// const C=document.getElementById("C");
// const D=document.getElementById("D");
 let questions = [{
     question:"How can you make a list that lists the items with numbers?",
     a:"ol",
     b:"DI",
     c:"UI",
     d:"List",
     answer:"a"
    },
 {
     question:"Who is making the Web Standards?",
     a:"Mozilla",
     b:"Microsoft",
     c:"Apple",
     d:"The world wide web consortium",
     answer:"d" 
 },
 {
     question:"Choose the correct HTML tag for the largest heading.",
     a:"H1",
     b:"Heading",
     c:"head",
     d:"h6",
     answer:"a"
 }
      
 ]
 const endOfQuestion= 3;
 let currentQuestion ={};
 let acceptingAnwers=false;
 let score=0;
 let questionCounter=0;
 let availableQuestions=[];
 startGame=()=>{
  questionCounter=0;
  score=0;
  availableQuestions=[...questions];
 // console.log(availableQuestions);
  getNextQstn();
 }
 getNextQstn=()=> {
     if(availableQuestions.length===0 || questionCounter>endOfQuestion)
     {
         return window.location.assign('/end.html')
     }
     questionCounter++;
     currentQuestion=availableQuestions[Math.floor(Math.random()*availableQuestions.length)];
     question.innerHTML=currentQuestion.question;
     
     choices.forEach(choice=>{
       const letter=choice.dataset["letter"];
       choice.innerHTML=currentQuestion[letter];
     });
     availableQuestions.splice(currentQuestion,1);
     acceptingAnwers=true;
 };
 choices.forEach(choice=>{
     choice.addEventListener("click",e=>{
         if(!acceptingAnwers) return;
         acceptingAnwers=false;
         const displayedQuestion= e.target;
         const chosenAnswer=displayedQuestion.dataset["letter"];
         
         const classToApply = chosenAnswer==currentQuestion.answer? "correct": "incorrect";
        
        
         getNextQstn();
     });
 })
 startGame();
 


