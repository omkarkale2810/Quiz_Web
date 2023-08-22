const questionElement = document.getElementById("question-text");
const options = document.querySelectorAll(".option");

const questions = [
  {
    question: "What is the capital of France?",
    choices: ["Paris", "Madrid", "Rome", "Berlin"],
    correctAnswer: 0
  },
  {
    question: "Which planet is known as the Red Planet?",
    choices: ["Earth", "Mars", "Venus", "Jupiter"],
    correctAnswer: 1
  }
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
    alert("Correct answer!");
  } else {
    alert("Wrong answer. Try again.");
  }
  
  // Move to the next question or end the quiz
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    alert("Quiz finished!");
    // You can perform additional actions here after the quiz ends.
  }
}

// Start the quiz
showQuestion();
