import type { Request, Response } from "express";
import { Op } from "sequelize";
import { Atmosphere, Budget, Destination, Type } from "../models";

const search = async (req: Request, res: Response) => {
  try {
    const {
      budget,
      type,
      atmosphere,
      season,
      duration,
      location,
      accessibilite,
    } = req.body;

    // Build the where clause dynamically
    const where: Record<string, unknown> = {};

    if (season?.length) where.season = { [Op.in]: season };
    if (duration?.length) where.duration = { [Op.in]: duration };
    if (location?.length) where.location = { [Op.in]: location };
    if (budget?.length) where.budget_id = { [Op.in]: budget };

    // Accessibilité (family_access, PMR_access)
    if (accessibilite) {
      if (accessibilite.enfant) where.family_access = true;
      if (accessibilite.pmr) where.PMR_access = true;
    }

    // Find destinations with associations
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

    res.json(destinations);
  } catch (error) {
    console.error("Erreur lors de la recherche des destinations :", error);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

export default { search };
