const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Mars",
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: [
      "Harper Lee",
      "Mark Twain",
      "J.K. Rowling",
      "Ernest Hemingway",
    ],
    answer: "Harper Lee",
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Fe", "Hg"],
    answer: "Au",
  },
  {
    question: "Which ocean is the largest?",
    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
    answer: "Pacific",
  },
  {
    question: "What is the hardest natural substance on Earth?",
    options: ["Gold", "Iron", "Diamond", "Platinum"],
    answer: "Diamond",
  },
  {
    question: "What is the square root of 64?",
    options: ["6", "7", "8", "9"],
    answer: "8",
  },
  {
    question: "What year did World War II end?",
    options: ["1940", "1945", "1950", "1960"],
    answer: "1945",
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
    answer: "Blue Whale",
  },
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");
const resultContainer = document.getElementById("result-container");
const quizContainer = document.getElementById("quiz");
const scoreElement = document.getElementById("score");
const restartButton = document.getElementById("restart-btn");
const progressBarFill = document.getElementById("progress-bar-fill");
const currentQuestionText = document.getElementById("current-question");

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  answersElement.innerHTML = "";

  currentQuestion.options.forEach((option) => {
    const li = document.createElement("li");
    li.textContent = option;
    li.classList.add("option");
    li.addEventListener("click", () => selectAnswer(li, currentQuestion.answer));
    answersElement.appendChild(li);
  });

  currentQuestionText.textContent = currentQuestionIndex + 1;
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  progressBarFill.style.width = `${progress}%`;

  nextButton.disabled = true; 
}

function selectAnswer(selected, correctAnswer) {
  const options = document.querySelectorAll(".option");
  options.forEach((option) => option.classList.remove("selected"));

  selected.classList.add("selected");

  if (selected.textContent === correctAnswer) {
    score++;
    selected.classList.add("correct");
  } else {
    selected.classList.add("incorrect");
  }

  nextButton.disabled = false; 
}

function showResults() {
  quizContainer.classList.add("hidden");
  resultContainer.classList.remove("hidden");
  scoreElement.textContent = score;
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  resultContainer.classList.add("hidden");
  quizContainer.classList.remove("hidden");
  loadQuestion();
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    loadQuestion();
  } else {
    showResults();
  }
});

restartButton.addEventListener("click", restartQuiz);


document.addEventListener("DOMContentLoaded", loadQuestion);
