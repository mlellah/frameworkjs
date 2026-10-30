const input = document.getElementById("note");
const bouton = document.getElementById("btn");
const resultat = document.getElementById("resultat");

function calculerMention() {
  const valeur = input.value.trim();
  const note = Number(valeur);
  let message, classe;

  if (valeur === "" || isNaN(note) || note < 0 || note > 20) {
    message = "⚠️ La note doit être comprise entre 0 et 20.";
    classe = "erreur";
  } else if (note >= 16) {
    message = "Très bien"; classe = "tres-bien";
  } else if (note >= 14) {
    message = "Bien"; classe = "bien";
  } else if (note >= 12) {
    message = "Assez bien"; classe = "assez-bien";
  } else if (note >= 10) {
    message = "Passable"; classe = "passable";
  } else {
    message = "Échec"; classe = "echec";
  }

  resultat.textContent = message;
  resultat.className = "resultat " + classe;
}

bouton.addEventListener("click", calculerMention);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") calculerMention();
});
