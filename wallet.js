// CENTRAL WALLET SYSTEM
// Game kabhi paisa nahi jaanta, sirf coins

const Wallet = {
  getBalance() {
    return parseInt(localStorage.getItem("coins")) || 0;
  },

  credit(amount, source = "gameplay") {
    let coins = this.getBalance();
    coins += amount;
    localStorage.setItem("coins", coins);
    console.log("[WALLET CREDIT]", amount, source);
  },

  debit(amount, reason = "gameplay") {
    let coins = this.getBalance();
    coins -= amount;
    if (coins < 0) coins = 0;
    localStorage.setItem("coins", coins);
    console.log("[WALLET DEBIT]", amount, reason);
  }
};
