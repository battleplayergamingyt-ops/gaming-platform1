// Redirect if consent not given
if (!localStorage.getItem("consent")) {
  window.location.href = "consent.html";
}

// Open Pulse Pick game
function openPulsePick() {
  window.location.href = "games/pulsepick/index.html";
}

// Update wallet display
function refreshWallet() {
  if (typeof Wallet !== "undefined") {
    document.getElementById("wallet").innerText =
      "Coins: " + Wallet.getBalance();
  }
}

// Refresh wallet on load
refreshWallet();
