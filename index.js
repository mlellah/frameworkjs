// 1. Créer l'objet produit
const produit = {
  reference: "P001",
  nom: "Ordinateur portable",
  prix: 500,
  quantite: 10
};

// 2. Afficher le nom et le prix
console.log("Nom :", produit.nom);
console.log("Prix :", produit.prix);

// 3. Calculer et afficher la valeur totale du stock
const valeurStock = produit.prix * produit.quantite;
console.log("Valeur totale du stock :", valeurStock);

// 4. Modifier le prix
produit.prix = 450;
console.log("Nouveau prix :", produit.prix);

// 5. Ajouter la propriété categorie
produit.categorie = "Informatique";
console.log("Après ajout de categorie :", produit);

// 6. Supprimer la propriété reference
delete produit.reference;
console.log("Après suppression de reference :", produit);