const scoreEl = document.querySelector(".score");
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const scoreTextEl = document.getElementById("score");
let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
  score = 0;
}

scoreTextEl.innerText = `score: ${score}`;
const randomNum1 = Math.floor(Math.random() * 10 + 1);
const randomNum2 = Math.floor(Math.random() * 10 + 1);

const questionEl = document.getElementById("question");

questionEl.innerText = `What is ${randomNum1}  mulitplied by ${randomNum2}`;

const correctAns = randomNum1 * randomNum2;

formEl.addEventListener("submit", (e) => {
  const userAns = +inputEl.value;
  if (userAns === correctAns) {
    score++;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }
});

function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}
