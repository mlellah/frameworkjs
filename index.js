function factorielle(n) {
  let resultat = 1;
  for (let i = 2; i <= n; i++) {
    resultat *= i;
  }
  return resultat;
}

const input = document.getElementById("n");
const resultat = document.getElementById("resultat");

function afficher() {
  const n = Number(input.value);
  resultat.classList.remove("cache", "erreur");

  if (input.value === "" || !Number.isInteger(n) || n < 0) {
    resultat.textContent = "Entrez un entier positif ou nul.";
    resultat.classList.add("erreur");
  } else {
    resultat.textContent = `${n}! = ${factorielle(n)}`;
  }
}

document.getElementById("btn").addEventListener("click", afficher);
input.addEventListener("keydown", (e) => { if (e.key === "Enter") afficher(); });