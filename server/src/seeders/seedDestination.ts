import fs from "node:fs";
import path from "node:path";
import sequelize from "../../config/database";
import Destination from "../models/Destination";

// Lis le fichier JSON externe
const filePath = path.join(
  __dirname,
  "../../database/fixtures/destinations.json",
);
const destinationData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

const seedDestination = async () => {
  try {
    await sequelize.sync();

    for (const data of destinationData) {
      const existingDestination = await Destination.findOne({
        where: { name: data.name },
      });

      if (existingDestination) {
        await existingDestination.update({
          short_description: data.short_description,
          long_description: data.long_description,
        });
        console.log(`✅ Description mise à jour pour : ${data.name}`);
      } else {
        await Destination.create(data);
        console.log(`✅ Nouvelle destination créée : ${data.name}`);
      }
    }

    console.log("🎉 Seed terminé avec succès !");
  } catch (error) {
    console.error("❌ Erreur lors du seed :", error);
  }
};

seedDestination();
