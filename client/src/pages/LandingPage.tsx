import "../style/LandingPage.css";
import { useNavigate } from "react-router";

import logoIcon from "../assets/images/logo/logo-blanc.svg";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-page-container">
      <img src={logoIcon} alt="" className="landing-page-logo" />
      <h1>Partez à la recherche de lieux merveilleux à découvrir !</h1>
      <div className="landing-page-button-container">
        <button
          type="button"
          className="button-pink"
          onClick={() => {
            navigate("/selection");
          }}
        >
          Trouvez votre destination
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
