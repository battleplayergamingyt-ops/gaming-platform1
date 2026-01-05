// ANTI-TREND ENGINE
// User ke last 10 choices store karta hai
// Ek hi option overuse hone par uska chance thoda reduce karta hai

function storeChoice(choice) {
  let history = JSON.parse(localStorage.getItem("choiceHistory")) || [];
  history.push(choice);

  if (history.length > 10) {
    history.shift();
  }

  localStorage.setItem("choiceHistory", JSON.stringify(history));
}

function generateNumber(userChoice) {
  let history = JSON.parse(localStorage.getItem("choiceHistory")) || [];
  let counts = { LOW: 0, MID: 0, HIGH: 0 };

  history.forEach(c => {
    if (counts[c] !== undefined) counts[c]++;
  });

  let bias = 0;

  if (counts[userChoice] > 5) {
    bias = -15; // overused option ka chance kam
  }

  let number = Math.floor(Math.random() * 100) + 1 + bias;

  if (number < 1) number = 1;
  if (number > 100) number = 100;

  return number;
}
