function compterVoyelles(texte) {
  const voyelles = texte.match(/[aeiouàâäéèêëîïôöùûü]/gi);
  return voyelles ? voyelles.length : 0;
}

const input = document.getElementById("texte");
const resultat = document.getElementById("resultat");

function afficher() {
  resultat.classList.remove("cache", "erreur");
  if (input.value.trim() === "") {
    resultat.textContent = "Entrez un texte.";
    resultat.classList.add("erreur");
  } else {
    resultat.textContent = `Nombre de voyelles : ${compterVoyelles(input.value)}`;
  }
}

document.getElementById("btn").addEventListener("click", afficher);
input.addEventListener("keydown", (e) => { if (e.key === "Enter") afficher(); });