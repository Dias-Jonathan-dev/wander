import type { Request, Response } from "express";
import { Budget } from "../models";

const browse = async (req: Request, res: Response) => {
  try {
    const types = await Budget.findAll();
    res.json(types);
  } catch (error) {
    console.error("Erreur dans /api/budget:", error);
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération des budgets" });
  }
};

export default {
  browse,
};
