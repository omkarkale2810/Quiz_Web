const questionElement = document.getElementById("question-text");
const options = document.querySelectorAll(".option");
const timer = document.getElementById("timer");

let c = 0;
let w = 0;
let tl = 0;
const questions = [
  {
    question: "What is the capital of France?",
    choices: ["Paris", "Madrid", "Rome", "Berlin"],
    correctAnswer: 0,
  },
  {
    question: "Which planet is known as the Red Planet?",
    choices: ["Earth", "Mars", "Venus", "Jupiter"],
    correctAnswer: 1,
  },
  {
    question: "Which of the given is a disease caused by protozoa?",
    choices: ["Cancer", "Typhoid", "Kala-azar", "Chicken Pox"],
    correctAnswer: 2,
  },
  {
    question: "The tropic of cancer does pass through which state of India?",
    choices: ["Uttar Pradesh", "Madhya Pradesh", "Bihar", "Andhra Pradesh"],
    correctAnswer: 1,
  },
  {
    question: "Which of the following is a scalar quantity??",
    choices: ["Force", "Pressure", "Momentum", "Acceleration"],
    correctAnswer: 1,
  },
];

let currentQuestionIndex = 0;

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  options.forEach((option, index) => {
    option.textContent = currentQuestion.choices[index];
  });
}

function checkAnswer(selectedIndex) {
  const currentQuestion = questions[currentQuestionIndex];

  if (selectedIndex === currentQuestion.correctAnswer) {
    // alert("Correct answer!");
    c++;
  } else {
    // alert("Wrong answer. Try again.");
    w++;
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    alert("Quiz finished!");
    na = questions.length - c - w;
    window.location = `/result.html?c=${c}&w=${w}&na=${na}&tl=${tl}`;
  }
}

function showTimer() {
  counter = 50;
  let id = setInterval(() => {
    if (counter > 0) {
      timer.innerText = "Time Left: " + counter;
      counter--;
      tl = counter;
    } else {
      clearInterval(id);
      timer.innerText = "Time Over!";
      window.alert("Submit Quiz");
      tl = counter;
      na = questions.length - c - w;
      window.location = `/result.html?c=${c}&w=${w}&na=${na}&tl=${tl}`;
    }
  }, 1000);
}

showTimer();
showQuestion();
console.log(window.location);
