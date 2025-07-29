import type { Request, Response } from "express";
import { Type } from "../models";

const browse = async (req: Request, res: Response) => {
  try {
    const types = await Type.findAll();
    res.json(types);
  } catch (error) {
    console.error("Erreur dans /api/type:", error);
    res.status(500).json({ error: "Erreur lors de la récupération des types" });
  }
};

export default {
  browse,
};
