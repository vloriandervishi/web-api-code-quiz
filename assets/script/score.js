var getName = document.getElementById("getName").value;
var hScore = JSON.parse(localStorage.getItem("score")) || [];
const ArrayObject = [];
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
    localStorage.setItem(JSON.stringify(getName),JSON.stringify(hScore));
    
      var flex= document.getElementById('flex');
       var div= document.createElement('div');
       flex.appendChild(div);
       var ol =document.createElement('ol');
       var li= document.createElement('li');
       div.setAttribute('id','order');
       div.appendChild(ol);
       ol.appendChild(li);
       li.appendChild(document.createTextNode(getName));
       li.appendChild(document.createTextNode(' '));
       li.appendChild(document.createTextNode(hScore));
    
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
