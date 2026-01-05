let timer = 30;
let locked = false;

// Timer countdown
setInterval(() => {
  timer--;
  if (timer <= 0) {
    timer = 30;
  }
  document.getElementById("timer").innerText = timer;
}, 1000);

// Play function
function play(choice) {
  if (locked) return;
  locked = true;

  storeChoice(choice);

  const number = generateNumber(choice);
  let result;

  if (number <= 40) result = "LOW";
  else if (number <= 70) result = "MID";
  else result = "HIGH";

  if (result === choice) {
    Wallet.credit(50, "pulsepick_win");
    document.getElementById("result").innerText =
      "WIN 🎉  (+50 Coins)";
  } else {
    Wallet.debit(30, "pulsepick_loss");
    document.getElementById("result").innerText =
      "LOSE ❌  (-30 Coins)";
  }

  document.getElementById("wallet").innerText =
    "Coins: " + Wallet.getBalance();

  setTimeout(() => {
    locked = false;
    document.getElementById("result").innerText = "";
  }, 3000);
}
