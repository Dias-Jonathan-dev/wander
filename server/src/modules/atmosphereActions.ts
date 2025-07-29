import type { Request, Response } from "express";
import { Atmosphere } from "../models";

const browse = async (req: Request, res: Response) => {
  try {
    const atmospheres = await Atmosphere.findAll();
    res.json(atmospheres);
  } catch (error) {
    console.error("Erreur /api/atmosphere :", error);
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération des atmosphères" });
  }
};

export default {
  browse,
};
