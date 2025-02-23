let balance = 1000; let stocks = 0; let loan = 0; let lastEarnTime = 0;

function updateStockPrice() { document.getElementById("stockPrice").textContent = Math.floor(Math.random() * 1000) + 1; }

setInterval(updateStockPrice, 5000); updateStockPrice();

function earnMoney() { const now = Date.now(); if (now - lastEarnTime >= 10 * 60 * 1000) { const amount = Math.floor(Math.random() * 901) + 100; balance += amount; lastEarnTime = now; updateDisplay(); } else { alert("10分に1回だけお金を稼げます！"); } }

function buyStock() { let stockPrice = parseInt(document.getElementById("stockPrice").textContent); let cost = stockPrice * 1.1; if (balance >= cost) { balance -= cost; stocks++; updateDisplay(); } else { alert("お金が足りません！"); } }

function sellStock() { if (stocks > 0) { let stockPrice = parseInt(document.getElementById("stockPrice").textContent); balance += stockPrice; stocks--; updateDisplay(); } else { alert("株が足りません！"); } }

function takeLoan() { loan += 500; balance += 500; updateDisplay(); }

function repayLoan() { if (balance >= 500) { loan -= 500; balance -= 500; updateDisplay(); } else { alert("お金が足りません！"); } }

function updateDisplay() { document.getElementById("balance").textContent = balance; document.getElementById("stocks").textContent = stocks; document.getElementById("loan").textContent = loan; }

