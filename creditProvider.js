// CREDIT PROVIDER
// YAHI FILE FUTURE ME REAL-MONEY PARTNER SE CONNECT HOGI
// Aaj ke liye sirf virtual mode active hai

const CreditProvider = {
  creditCoins(amount) {
    if (CONFIG.MODE === "VIRTUAL") {
      Wallet.credit(amount, "bonus");
    }

    if (CONFIG.MODE === "PARTNER") {
      // ⚠️ IMPORTANT:
      // Real-money partner yahan se Wallet.credit() call karega
      // Is file me koi payment logic nahi hoga
    }
  }
};
