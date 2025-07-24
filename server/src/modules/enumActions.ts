import type { Request, Response } from "express";
import sequelize from "../../config/database";

const allowedFields = ["season", "duration", "location"];

const browse = async (req: Request, res: Response): Promise<void> => {
  const { field } = req.params;

  if (!allowedFields.includes(field)) {
    res.status(400).json({ error: "Champ non autorisé" });
    return;
  }

  try {
    const [results] = await sequelize.query(
      "SHOW COLUMNS FROM destination LIKE :field",
      {
        replacements: { field },
      },
    );

    if (!Array.isArray(results) || results.length === 0) {
      res.status(404).json({ error: "Champ non trouvé" });
      return;
    }

    const column = results[0] as { Type: string };

    const enumStr = column.Type;
    const values = enumStr
      .match(/enum\((.*)\)/)?.[1]
      .split(",")
      .map((val) => val.replace(/'/g, ""));

    if (!values) {
      res.status(404).json({ error: "Enum non trouvé" });
      return;
    }

    res.json(values);
  } catch (error) {
    console.error("Erreur lors de la récupération des ENUM :", error);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

const enumActions = {
  browse,
};

export default enumActions;
