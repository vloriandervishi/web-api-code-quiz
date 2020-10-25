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
     a:"??",
     b:"??",
     c:"??1",
     d:"?? 1",
     correct:"A"
    },
 {
     question:"What do you type first in html?",
     a:"??",
     b:"??",
     c:"??",
     d:"??",
     correct:"C" 
 },
 {
     question:"What was the l",
     a:"??",
     b:"??",
     c:"??",
     d:"??",
     correct:"B"
 }
      
 ]

 

 const indexQuestion= questions.length-1;
 let dashQuestion=0;

 function sortQuestion(){
    //  loaded question array holder to sort through object array
     let lqah=questions[dashQuestion];
     quizContent.innerHTML=lqah.question;
     A.innerHTML=lqah.a;
     B.innerHTML=lqah.b;
     C.innerHTML=lqah.c;
     D.innerHTML=lqah.d;
 }


 sortQuestion();


