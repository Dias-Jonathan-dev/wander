import "../style/SelectionPage.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import CriterionSelector from "../components/criterion/CriterionSelector";

type BooleanGroup = { [key: string]: boolean };

interface Option {
  id: number | string;
  name: string;
}

interface SelectedOptions {
  budget: number[];
  type: number[];
  atmosphere: number[];
  season: string[];
  duration: string[];
  location: string[];
  accessibilite: BooleanGroup;
}

interface OptionsByCriterion {
  budget: Option[];
  type: Option[];
  atmosphere: Option[];
  season: Option[];
  duration: Option[];
  location: Option[];
  accessibilite: Option[];
}

const API_URL = import.meta.env.VITE_API_URL;

function SelectionPage() {
  // Stocker les options récupérées dynamiquement
  const [optionsByCriterion, setOptionsByCriterion] = useState<
    Partial<OptionsByCriterion>
  >({});

  // Stocker les sélections typées
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({
    budget: [],
    type: [],
    atmosphere: [],
    season: [],
    duration: [],
    location: [],
    accessibilite: { enfant: false, pmr: false },
  });

  const navigate = useNavigate();

  // Fetch dynamique des options pour les critères
  useEffect(() => {
    async function fetchCriterionOptions() {
      try {
        const budgetRes = await fetch(`${API_URL}/api/budget`);
        const budgetOptions = await budgetRes.json();

        const typeRes = await fetch(`${API_URL}/api/types`);
        const typeOptions = await typeRes.json();

        const atmosphereRes = await fetch(`${API_URL}/api/atmosphere`);
        const atmosphereOptions = await atmosphereRes.json();

        const seasonRes = await fetch(`${API_URL}/api/enums/season`);
        const seasonOptionsRaw = await seasonRes.json();
        const seasonOptions: Option[] = seasonOptionsRaw.map((val: string) => ({
          id: val,
          name: val,
        }));

        const durationRes = await fetch(`${API_URL}/api/enums/duration`);
        const durationOptionsRaw = await durationRes.json();
        const durationOptions: Option[] = durationOptionsRaw.map(
          (val: string) => ({
            id: val,
            name: val,
          }),
        );

        const locationRes = await fetch(`${API_URL}/api/enums/location`);
        const locationOptionsRaw = await locationRes.json();
        const locationOptions: Option[] = locationOptionsRaw.map(
          (val: string) => ({
            id: val,
            name: val,
          }),
        );

        const accessibiliteOptions: Option[] = [
          { id: "enfant", name: "Enfant" },
          { id: "pmr", name: "PMR" },
        ];

        setOptionsByCriterion({
          budget: budgetOptions,
          type: typeOptions,
          atmosphere: atmosphereOptions,
          season: seasonOptions,
          duration: durationOptions,
          location: locationOptions,
          accessibilite: accessibiliteOptions,
        });
      } catch (error) {
        console.error("Erreur lors du fetch des critères :", error);
      }
    }

    fetchCriterionOptions();
  }, []);

  // Handler générique de sélection
  function handleSelectionChange<K extends keyof SelectedOptions>(
    key: K,
    value: SelectedOptions[K],
  ) {
    setSelectedOptions((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  async function handleSubmit() {
    try {
      const response = await fetch(`${API_URL}/api/destinations/search`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(selectedOptions),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de la recherche des destinations");
      }

      const destinations = await response.json();

      localStorage.setItem("destinations", JSON.stringify(destinations));
      navigate("/result", { state: { destinations } });
    } catch (error) {
      console.error(error);
      alert("Erreur lors de la recherche des destinations");
    }
  }

  return (
    <div className="selection-page-container">
      <h1>Trouve ta prochaine destination</h1>
      <h2>
        Choisissez les critères qui vous correspondent et laissez vous séduire !
      </h2>

      {optionsByCriterion.budget && (
        <CriterionSelector
          title="Budget"
          options={optionsByCriterion.budget}
          selectedOptions={selectedOptions.budget}
          onChange={(value) => handleSelectionChange("budget", value)}
        />
      )}

      {optionsByCriterion.type && (
        <CriterionSelector
          title="Type de lieu"
          options={optionsByCriterion.type}
          selectedOptions={selectedOptions.type}
          onChange={(value) => handleSelectionChange("type", value)}
        />
      )}

      {optionsByCriterion.atmosphere && (
        <CriterionSelector
          title="Atmosphère"
          options={optionsByCriterion.atmosphere}
          selectedOptions={selectedOptions.atmosphere}
          onChange={(value) => handleSelectionChange("atmosphere", value)}
        />
      )}

      {optionsByCriterion.season && (
        <CriterionSelector
          title="Saison optimale"
          options={optionsByCriterion.season}
          selectedOptions={selectedOptions.season}
          onChange={(value) => handleSelectionChange("season", value)}
        />
      )}

      {optionsByCriterion.duration && (
        <CriterionSelector
          title="Durée sur place"
          options={optionsByCriterion.duration}
          selectedOptions={selectedOptions.duration}
          onChange={(value) => handleSelectionChange("duration", value)}
        />
      )}

      {optionsByCriterion.location && (
        <CriterionSelector
          title="Localisation"
          options={optionsByCriterion.location}
          selectedOptions={selectedOptions.location}
          onChange={(value) => handleSelectionChange("location", value)}
        />
      )}

      {optionsByCriterion.accessibilite && (
        <CriterionSelector
          title="Accessibilité"
          options={optionsByCriterion.accessibilite}
          selectedOptions={selectedOptions.accessibilite}
          onChange={(value) => handleSelectionChange("accessibilite", value)}
          isBooleanGroup={true}
        />
      )}

      <button type="submit" className="button-pink" onClick={handleSubmit}>
        Valider mes choix
      </button>
    </div>
  );
}

export default SelectionPage;
