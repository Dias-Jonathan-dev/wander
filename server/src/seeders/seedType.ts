import sequelize from "../../config/database";
import Type from "../models/Type";

const typeData = [
  { name: "Monument" },
  { name: "Plage" },
  { name: "Forêt" },
  { name: "Montagne" },
  { name: "Parc d'attraction" },
  { name: "Lieu de film" },
  { name: "Village" },
];

async function seedType() {
  try {
    await sequelize.authenticate();
    console.log("Connexion réussie à la base de données.");

    await Type.bulkCreate(typeData, { ignoreDuplicates: true });
    console.log("Types insérés avec succès.");

    await sequelize.close();
    console.log("Connexion fermée.");
  } catch (error) {
    console.error("Erreur lors de l'insertion des types :", error);
  }
}

seedType();
