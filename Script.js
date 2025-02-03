const bigBox = document.querySelector(".big-box");
const options = document.querySelectorAll(".box-1, .box-2, .box-3, .box-4, .box-5, .box-6");
const message = document.querySelector(".message");
const resetButton = document.querySelector(".reset");
const scoreDisplay = document.querySelector(".score");

let correctColor;
let score=0;

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`; // ✅ Fixed spacing issue
}

function setUpGame() {
  message.textContent = "Pick the correct color";
  message.style.color = "black";

  const colors = [];
  for (let i = 0; i < options.length; i++) {
    colors.push(getRandomColor());
  }

  correctColor = colors[Math.floor(Math.random() * colors.length)];
  bigBox.style.backgroundColor = correctColor;

  options.forEach((option, index) => {
    option.style.backgroundColor = colors[index];
    option.textContent = "";
    option.addEventListener("click", () =>
      checkAnswer(option.style.backgroundColor)
    );
  });
}

function checkAnswer(selectedColor) {
  if (selectedColor.replace(/\s+/g, '') === correctColor.replace(/\s+/g, '')) { 
    message.textContent = "Correct!🥳🎉🎉";
    message.style.color = "green";
    score++;
    scoreDisplay.textContent= score;
  } else {
    message.textContent = "Wrong! Try Again😫😔";
    message.style.color = "red";
  }
}

resetButton.addEventListener("click", setUpGame);
setUpGame();