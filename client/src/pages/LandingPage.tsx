import "../style/LandingPage.css";

import logoIcon from "../assets/images/logo/logo-blanc.svg";

function LandingPage() {
  return (
    <div className="landing-page-container">
      <img src={logoIcon} alt="" className="landing-page-logo" />
      <h1>Partez à la recherche de lieux merveilleux à découvrir !</h1>
      <div className="landing-page-button-container">
        <button type="button" className="button-blue">
          Nous contacter
        </button>
        <button type="button" className="button-pink">
          Trouvez votre destination
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
