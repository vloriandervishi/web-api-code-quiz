var getName = document.getElementById("getName").value;
var hScore = JSON.parse(localStorage.getItem("score")) || [];


 
// get saved score from script.js and
// store it into hScore
// Have after quiz finished to display the score and then prompt to enter name
//save score to that name.
const showScore = document.getElementById(
  "printScore"
).innerHTML = 'Final Score:' + hScore;


function getInput() {
 
    var getName = document.getElementById("getName").value;
    
    
  
  document.getElementById("demo").innerHTML =
    "HighScore: ";
    
      var br=document.createElement('br');
      var flex= document.getElementById('flex');
       var div= document.createElement('div');
       flex.appendChild(div);
       var ol =document.createElement('ol');
       localStorage.setItem(getName.toString(),JSON.stringify(hScore));
       
       for(let i=0; i< localStorage.length;i++){
        var li= document.createElement('li');
       div.setAttribute('id','order');
       div.appendChild(ol);
       ol.appendChild(li);
        li.appendChild(document.createTextNode(localStorage.key(i)));
        li.appendChild(document.createTextNode(': '));
        li.appendChild(document.createTextNode(localStorage.getItem(localStorage.key(i))));
       }
       
        
  if (
    document.querySelector("#divBox").style.display === "none" &&
    document.querySelector("#viewScore").style.display === "none" && document.querySelector("#printScore").style.display === "none" 
  ) {
    document.querySelector("#divBox").style.display = "block";
    document.querySelector("#viewScore").style.display = "block";
    document.querySelector("#printScore").style.display = "block" 
   
  } else {
    document.querySelector("#divBox").style.display = "none";
    document.querySelector("#viewScore").style.display = "none";
    document.querySelector("#printScore").style.display = "none" 
    
  }
   
 


}

