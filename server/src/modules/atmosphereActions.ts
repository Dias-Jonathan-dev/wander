import type { Request, Response } from "express";
import { Atmosphere } from "../models";

const browse = async (req: Request, res: Response) => {
  try {
    const types = await Atmosphere.findAll();
    res.json(types);
  } catch (error) {
    console.error("Erreur dans /api/atmosphere:", error);
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération des atmospheres" });
  }
};

export default {
  browse,
};
