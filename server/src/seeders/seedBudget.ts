import sequelize from "../../config/database";
import Budget from "../models/Budget";

const budgetData = [
  { name: "Gratuit" },
  { name: "Petit budget" },
  { name: "Budget moyen" },
  { name: "Grand budget" },
];

async function seedBudget() {
  try {
    await sequelize.authenticate();
    console.log("Connexion réussie à la base de données.");

    await Budget.bulkCreate(budgetData, { ignoreDuplicates: true });
    console.log("Budgets insérés avec succès.");

    // Déconnexion propre
    await sequelize.close();
    console.log("Connexion fermée.");
  } catch (error) {
    console.error("Erreur lors de l'insertion des budgets :", error);
  }
}

seedBudget();
