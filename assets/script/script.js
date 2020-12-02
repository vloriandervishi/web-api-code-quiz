const beginQuiz = document.getElementById("begin");
const time = document.getElementById("countdown");
const totalScore = document.getElementById("header");
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let questions = [
  {
    question: "How can you make a list that lists the items with numbers?",
    a: "ol",
    b: "DI",
    c: "UI",
    d: "List",
    answer: "a"
  },
  {
    question: "Who is making the Web Standards?",
    a: "Mozilla",
    b: "Microsoft",
    c: "Apple",
    d: "The world wide web consortium",
    answer: "d"
  },
  {
    question: "Choose the correct HTML tag for the largest heading.",
    a: "H1",
    b: "Heading",
    c: "head",
    d: "h6",
    answer: "a"
  },
  {
      question: "What is the reason for avoiding the attributes property in the HTML DOM?",
      a: "Found Unecessary",
      b: "Attributes don’t have attributes",
      c: "Attributes have attributes",
      d: "Considered irrelevant",
      answer: "b"
      
  },
  {
      question: "What is the purpose of the method nodeMap.setNamedItem()?",
      a: "Sets ID",
      b: "Sets attribute node",
      c: "Sets element name",
      d: "Sets element type",
      answer: "b"
  },
  {
      question: "How is everything treated in HTML DOM?",
      a: "Node",
      b: "Attributes",
      c: "Elements",
      d: "Arrays",
      answer: "a"
  }
];
const endOfQuestion = questions.length;
let currentQuestion = {};
let acceptingAnwers = false;
let score = 0;
let questionCounter = 0;
let remainingQuestions = [];

function countdown() {
  time.textContent = "";
  var timeLeft = 60;
  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      time.textContent = timeLeft + "seconds remianing";
      timeLeft--;
    } else if (timeLeft === 1) {
      time.textContent = timeLeft + "seconds remaining";

      timeLeft--;
    } else {
      time.textContent = " ";
      clearInterval(timeInterval);
    }
  }, 1000);
}

startQuiz = () => {
  questionCounter = 0;
  score = 0;
  remainingQuestions = [...questions];
  // console.log(availableQuestions);
  getNextQstn();
};
getNextQstn = () => {
  questionCounter++;
  if (questionCounter > endOfQuestion) {
    localStorage.setItem("score", score);

    return window.location.assign("yourHighScore.html");
  }

  currentQuestion = remainingQuestions[questionCounter - 1];
  question.innerHTML = currentQuestion.question;

  choices.forEach((choice) => {
    const letter = choice.dataset["letter"];
    choice.innerHTML = currentQuestion[letter];
  });
  // remainingQuestions.splice(currentQuestion, 1);
  acceptingAnwers = true;
};
choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnwers) return;
    acceptingAnwers = false;
    const displayedQuestion = e.target;
    const chosenAnswer = displayedQuestion.dataset["letter"];
    //const classToApply = chosenAnswer == currentQuestion ? "correct" : "wrong";
    //classToApply.
    if (chosenAnswer == currentQuestion.answer) {
      // alert("correct");
      var correct = document.querySelector(".correct");
      correct.textContent = " Correct!";
      score+=10;
     // console.log(score);
      //console.log("correct");
    } else {
      //alert("wrong");
      // console.log("wrong");
      var wrong = document.querySelector(".incorrect");
      wrong.textContent = "Wrong!";
      score-=10;
    }
    setTimeout(() => {
      var correct = document.querySelector(".correct");
      var wrong = document.querySelector(".incorrect");
      correct.textContent = "";
      wrong.textContent = "";
    }, 1500);

    getNextQstn();
  });
});
onclick = countdown();
startQuiz();
