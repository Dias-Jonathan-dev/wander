import type { Request, Response } from "express";
import { Op } from "sequelize";
import { Atmosphere, Budget, Destination, Type } from "../models";

const search = async (req: Request, res: Response) => {
  try {
    console.log("Body reçu dans search:", JSON.stringify(req.body, null, 2));

    const {
      budget,
      type,
      atmosphere,
      season,
      duration,
      location,
      accessibilite,
    } = req.body;

    const where: Record<string, unknown> = {};

    if (season?.length) where.season = { [Op.in]: season };
    if (duration?.length) where.duration = { [Op.in]: duration };
    if (location?.length) where.location = { [Op.in]: location };
    if (budget?.length) where.budget_id = { [Op.in]: budget };

    if (accessibilite) {
      if (accessibilite.enfant) where.family_access = true;
      if (accessibilite.pmr) where.PMR_access = true;
    }

    console.log(
      "Objet 'where' utilisé pour la requête Sequelize:",
      JSON.stringify(where, null, 2),
    );

    const destinations = await Destination.findAll({
      where,
      include: [
        type?.length
          ? {
              model: Type,
              as: "Types",
              where: { id: { [Op.in]: type } },
              through: { attributes: [] },
            }
          : { model: Type, as: "Types", through: { attributes: [] } },
        atmosphere?.length
          ? {
              model: Atmosphere,
              as: "Atmospheres",
              where: { id: { [Op.in]: atmosphere } },
              through: { attributes: [] },
            }
          : {
              model: Atmosphere,
              as: "Atmospheres",
              through: { attributes: [] },
            },
        { model: Budget, as: "budget" },
      ],
    });

    console.log(`Nombre de destinations trouvées: ${destinations.length}`);

    res.json(destinations);
  } catch (error) {
    console.error("Erreur lors de la recherche des destinations :", error);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

const read = async (req: Request, res: Response) => {
  try {
    const destinationId = Number.parseInt(req.params.id, 10);

    const destination = await Destination.findByPk(destinationId, {
      include: [
        { model: Type, as: "Types", through: { attributes: [] } },
        { model: Atmosphere, as: "Atmospheres", through: { attributes: [] } },
        { model: Budget, as: "budget" },
      ],
    });

    if (!destination) {
      res.status(404).json({ error: "Destination non trouvée" });
      return;
    }

    res.json(destination);
  } catch (error) {
    console.error("Erreur lors de la récupération de la destination :", error);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

export default {
  search,
  read,
};
