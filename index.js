function calculerMoyenne(a, b, c) {
  return (a + b + c) / 3;
}

const resultat = document.getElementById("resultat");

function afficher() {
  const champs = ["a", "b", "c"].map((id) => document.getElementById(id).value);
  const notes = champs.map(Number);
  resultat.classList.remove("cache", "erreur");

  if (champs.some((v) => v === "") || notes.some(isNaN)) {
    resultat.textContent = "Remplissez les trois notes.";
    resultat.classList.add("erreur");
  } else {
    resultat.textContent = `Moyenne : ${calculerMoyenne(...notes).toFixed(2)}`;
  }
}

document.getElementById("btn").addEventListener("click", afficher);