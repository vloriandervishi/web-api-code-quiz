const beginQuiz =document.getElementById("button");
const time=document.getElementById("countdown");
const totalScore=document.getElementById("header");
let quizContent =document.getElementById("question");
const A=document.getElementById("A");
const B=document.getElementById("B");
const C=document.getElementById("C");
const D= document.getElementById("D");

 let questions = [{
     question:"What does HTML stand for?",
     a:"A.first question",
     b:"B.??",
     c:"C.??1",
     d:"D.?? 1",
     correct:"??"
    },
 {
     question:"What do you type first in html?",
     a:"??",
     b:"??",
     c:"??",
     d:"??",
     correct:"??" 
 },
 {
     question:"What was the l",
     a:"??",
     b:"??",
     c:"??",
     d:"??",
     correct:"??"
 }
      
 ]

 

 const indexQuestion= questions.length-1;
 let dashQuestion=0;

 function sortQuestion(){
    //  loaded question array holder to sort through object array
     
    let lqah=questions[dashQuestion];
     
     quizContent.innerHTML=lqah.question;
     A.innerText=lqah.a;
     B.innerHTML=lqah.b;
     C.innerHTML=lqah.c;
     D.innerHTML=lqah.d;
    
 }
 sortQuestion();

 


