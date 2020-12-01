var getName=document.getElementById("getName").value;
var hScore=JSON.parse(localStorage.getItem('score'))||[];

// get saved score from script.js and 
// store it into hScore
// Have after quiz finished to display the score and then prompt to enter name 
//save score to that name.
const showScore=document.getElementsByClassName('printScore').innerHTML=hScore;
//document.body.append(showScore);

function getInput(){
    var getName=document.getElementById("getName").value;
    document.getElementById('demo').innerHTML='You Final Score: ' + getName +' '+ showScore;
    
    if(document.querySelector('#divBox').style.display==="none" && document.querySelector('#viewScore').style.display==="none"){
        document.querySelector('#divBox').style.display= "block";
        document.querySelector('#viewScore').style.display="block";
    }
    else {
        document.querySelector('#divBox').style.display="none";
        document.querySelector('#viewScore').style.display="none";
       
    }
    

}