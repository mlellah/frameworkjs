// 1. Créer l'objet etudiant
const etudiant = {
  nom: "Ahmed",
  prenom: "Mohamed",
  age: 22,
  filiere: "Informatique",
  moyenne: 14.5
};

// 2. Afficher toutes les propriétés
console.log("Toutes les propriétés :");
console.log(etudiant);

// 3. Afficher uniquement le nom et le prénom
console.log("Nom :", etudiant.nom);
console.log("Prénom :", etudiant.prenom);

// 4. Afficher la moyenne avec deux syntaxes
console.log("Moyenne (avec le point) :", etudiant.moyenne);
console.log("Moyenne (avec les crochets) :", etudiant["moyenne"]);

// 5. Modifier l'âge à 23 ans
etudiant.age = 23;
console.log("Nouvel âge :", etudiant.age);

// 6. Ajouter la propriété ville
etudiant.ville = "Nouakchott";
console.log("Objet final :");
console.log(etudiant);