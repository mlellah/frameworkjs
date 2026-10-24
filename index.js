const screen = document.getElementById("screen");
const history = document.getElementById("history");

let current = "0";     // nombre en cours de saisie
let previous = null;   // premier opérande
let operator = null;   // opérateur choisi
let resetNext = false; // true après un "=" ou un opérateur

const symbols = { "+": "+", "-": "−", "*": "×", "/": "÷" };

function updateScreen() {
  screen.textContent = current;
}

function inputNumber(n) {
  if (resetNext) {
    current = "0";
    resetNext = false;
  }
  current = current === "0" ? n : current + n;
  updateScreen();
}

function inputDot() {
  if (resetNext) {
    current = "0";
    resetNext = false;
  }
  if (!current.includes(".")) {
    current += ".";
  }
  updateScreen();
}

function calculate(a, b, op) {
  switch (op) {
    case "+": return a + b;
    case "-": return a - b;
    case "*": return a * b;
    case "/": return b === 0 ? null : a / b;
  }
}

function formatResult(value) {
  // Évite les erreurs de virgule flottante (0.1 + 0.2)
  return String(parseFloat(value.toPrecision(12)));
}

function chooseOperator(op) {
  if (operator && !resetNext) {
    compute(false);
    if (current === "Erreur") return;
  }
  previous = parseFloat(current);
  operator = op;
  resetNext = true;
  history.textContent = `${current} ${symbols[op]}`;
}

function compute(showHistory = true) {
  if (operator === null || previous === null) return;

  const b = parseFloat(current);
  const result = calculate(previous, b, operator);

  if (showHistory) {
    history.textContent = `${previous} ${symbols[operator]} ${b} =`;
  }

  if (result === null) {
    current = "Erreur";
    previous = null;
    operator = null;
    resetNext = true;
    updateScreen();
    return;
  }

  current = formatResult(result);
  previous = null;
  operator = null;
  resetNext = true;
  updateScreen();
}

function clearAll() {
  current = "0";
  previous = null;
  operator = null;
  resetNext = false;
  history.textContent = "";
  updateScreen();
}

function deleteLast() {
  if (resetNext || current === "Erreur") return;
  current = current.length > 1 ? current.slice(0, -1) : "0";
  updateScreen();
}

function percent() {
  if (current === "Erreur") return;
  current = formatResult(parseFloat(current) / 100);
  updateScreen();
}

// Clics sur les boutons
document.querySelector(".keys").addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;

  if (current === "Erreur" && !btn.dataset.action) clearAll();

  if (btn.dataset.num !== undefined) return inputNumber(btn.dataset.num);
  if (btn.dataset.op) return chooseOperator(btn.dataset.op);

  switch (btn.dataset.action) {
    case "dot": return inputDot();
    case "equal": return compute();
    case "clear": return clearAll();
    case "delete": return deleteLast();
    case "percent": return percent();
  }
});

// Support du clavier
document.addEventListener("keydown", (e) => {
  if (current === "Erreur" && e.key !== "Escape") clearAll();

  if (e.key >= "0" && e.key <= "9") inputNumber(e.key);
  else if (e.key === "." || e.key === ",") inputDot();
  else if (["+", "-", "*", "/"].includes(e.key)) chooseOperator(e.key);
  else if (e.key === "Enter" || e.key === "=") { e.preventDefault(); compute(); }
  else if (e.key === "Backspace") deleteLast();
  else if (e.key === "Escape") clearAll();
  else if (e.key === "%") percent();
});
