import "../style/ResultPage.css";
import { useLocation, useNavigate } from "react-router";
import type { Destination } from "../types/Destination";

function ResultPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const destinations: Destination[] =
    location.state?.destinations ||
    JSON.parse(localStorage.getItem("destinations") || "[]");

  return (
    <div className="result-page-container">
      <h1>Voici les résultats de votre recherche</h1>
      <h2>
        Parcourez les résultats et choisissez la destination de vos rêves !
      </h2>
      <div className="result-cards-container">
        {destinations.length === 0 && (
          <p>Aucune destination ne correspond à vos critères.</p>
        )}
        {destinations.map((dest) => (
          <div className="destination-card" key={dest.id}>
            <div className="card-image">
              <img
                src={dest.gallery?.[0] || "/assets/images/default.jpg"}
                alt={dest.name}
              />
            </div>
            <div className="card-content">
              <h3>{dest.name}</h3>
              <h4>{dest.Types?.[0]?.name || "Type inconnu"}</h4>
              <p>{dest.short_description}</p>
              <button
                type="button"
                className="button-pink"
                onClick={() => {
                  navigate(`/destination/${dest.id}`);
                }}
              >
                En savoir plus
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResultPage;
