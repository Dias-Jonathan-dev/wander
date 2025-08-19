import fs from "node:fs";
import path from "node:path";
import Atmosphere from "../models/Atmosphere";
import Destination from "../models/Destination";
import DestinationHasAtmosphere from "../models/DestinationHasAtmosphere";
import DestinationHasType from "../models/DestinationHasType";
import Type from "../models/Type";

const filePath = path.join(
  __dirname,
  "../../database/fixtures/destinations.json",
);
const destinationData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

const seedAssociations = async () => {
  for (const entry of destinationData) {
    const destination = await Destination.findOne({
      where: { name: entry.name },
    });

    // Association avec les types
    if (entry.types && entry.types.length > 0 && destination) {
      const types = await Type.findAll({ where: { name: entry.types } });
      for (const type of types) {
        await DestinationHasType.create({
          destination_id: destination.get("id"),
          type_id: type.get("id"),
        });
      }
    }

    // Association avec les atmospheres
    if (entry.atmospheres && entry.atmospheres.length > 0 && destination) {
      const atmospheres = await Atmosphere.findAll({
        where: { name: entry.atmospheres },
      });
      for (const atmosphere of atmospheres) {
        await DestinationHasAtmosphere.create({
          destination_id: destination.get("id"),
          atmosphere_id: atmosphere.get("id"),
        });
      }
    }
  }
  console.log("Associations créées !");
};

seedAssociations();
