const questions = [
  {
    question: "What is the capital of India?",
    options: ["Mumbai", "Delhi", "Chennai", "Kolkata"],
    answer: 1
  },
  {
    question: "Which language is used for web development?",
    options: ["Python", "Java", "JavaScript", "C"],
    answer: 2
  },
  {
    question: "HTML stands for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyperlinks Text Mark Language",
      "Home Tool Markup Language"
    ],
    answer: 0
  },
  {
    question: "What is the capital of India?",
    options: ["Mumbai", "Delhi", "Chennai", "Kolkata"],
    answer: 1
  },
  {
    question: "Which language is used for web development?",
    options: ["Python", "Java", "JavaScript", "C"],
    answer: 2
  },
  {
    question: "HTML stands for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyperlinks Text Mark Language",
      "Home Tool Markup Language"
    ],
    answer: 0
  },
  {
    question: "CSS is used for?",
    options: [
      "Database management",
      "Web page styling",
      "Server programming",
      "Logic building"
    ],
    answer: 1
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: ["<!-- -->", "//", "#", "**"],
    answer: 1
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Google", "Microsoft", "Netscape", "Oracle"],
    answer: 2
  },
  {
    question: "Which HTML tag is used to insert an image?",
    options: ["<img>", "<image>", "<src>", "<pic>"],
    answer: 0
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Creative Style System",
      "Cascading Style Sheets",
      "Colorful Style Sheets",
      "Computer Style Sheets"
    ],
    answer: 1
  },
  {
    question: "Which data type is NOT in JavaScript?",
    options: ["String", "Boolean", "Float", "Undefined"],
    answer: 2
  },
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: ["int", "var", "string", "float"],
    answer: 1
  }
];


let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionButtons = document.querySelectorAll(".option");
const scoreEl = document.getElementById("score");

function loadQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;

  optionButtons.forEach((btn, index) => {
    btn.textContent = q.options[index];
    btn.disabled = false;
    btn.style.backgroundColor = "#3498db";
  });
}

function checkAnswer(selected) {
  optionButtons.forEach(btn => btn.disabled = true);

  if (selected === questions[currentQuestion].answer) {
    score++;
    optionButtons[selected].style.backgroundColor = "#2ecc71";
  } else {
    optionButtons[selected].style.backgroundColor = "#e74c3c";
    optionButtons[questions[currentQuestion].answer].style.backgroundColor = "#2ecc71";
  }
}

function nextQuestion() {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    questionEl.textContent = "Quiz Completed 🎉";
    document.querySelector(".options").style.display = "none";
    document.getElementById("nextBtn").style.display = "none";
    scoreEl.textContent = `Your Score: ${score} / ${questions.length}`;
  }
}

loadQuestion();
