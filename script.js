let balance = 1000; let stocks = 0; let loan = 0; let lastEarnTime = 0;

function updateStockPrice() { document.getElementById("stockPrice").textContent = Math.floor(Math.random() * 1000) + 1; }

setInterval(updateStockPrice, 5000); updateStockPrice();

function earnMoney() { const now = Date.now(); if (now - lastEarnTime >= 10 * 60 * 1000) { const amount = Math.floor(Math.random() * 901) + 100; balance += amount; lastEarnTime = now; updateDisplay(); } else { alert("10分に1回だけお金を稼げます！"); } }

function buyStock() { let stockPrice = parseInt(document.getElementById("stockPrice").textContent); let cost = stockPrice * 1.1; if (balance >= cost) { balance -= cost; stocks++; updateDisplay(); } else { alert("お金が足りません！"); } }

function sellStock() { if (stocks > 0) { let stockPrice = parseInt(document.getElementById("stockPrice").textContent); balance += stockPrice; stocks--; updateDisplay(); } else { alert("株が足りません！"); } }

function takeLoan() { loan += 500; balance += 500; updateDisplay(); }

function repayLoan() { if (balance >= 500) { loan -= 500; balance -= 500; updateDisplay(); } else { alert("お金が足りません！"); } }

function updateDisplay() { document.getElementById("balance").textContent = balance; document.getElementById("stocks").textContent = stocks; document.getElementById("loan").textContent = loan; }

// クッキーにデータを保存する関数
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // 有効期限を設定
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + JSON.stringify(value) + ";" + expires + ";path=/";
}

// クッキーからデータを読み込む関数
function getCookie(name) {
  const nameEq = name + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(nameEq) === 0) {
      return JSON.parse(c.substring(nameEq.length, c.length));
    }
  }
  return null; // クッキーがない場合
}

// ゲームの状態を保存する
function saveGameState(money, stocks, loan) {
  const gameState = {
    money: money,
    stocks: stocks,
    loan: loan,
    lastEarnedTime: new Date().toISOString(),
  };
  setCookie('gameState', gameState, 7); // 7日間保存
}

// ゲームの状態を読み込む
function loadGameState() {
  return getCookie('gameState');
}
