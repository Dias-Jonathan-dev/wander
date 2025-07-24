import sequelize from "../../config/database";
import Atmosphere from "../models/Atmosphere";

const atmospheres = [
  { name: "Historique" },
  { name: "Mystique" },
  { name: "Branché" },
  { name: "Nature" },
  { name: "Romantique" },
  { name: "Insolite" },
  { name: "Culturel" },
];

async function seedAtmosphere() {
  try {
    await sequelize.authenticate();
    console.log("Connexion réussie à la base de données.");

    await Atmosphere.bulkCreate(atmospheres, { ignoreDuplicates: true });
    console.log("Atmosphères insérées avec succès.");

    await sequelize.close();
    console.log("Connexion fermée.");
  } catch (error) {
    console.error("Erreur lors de l'insertion des atmosphères :", error);
  }
}

seedAtmosphere();
