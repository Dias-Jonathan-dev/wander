import "./TopBar.css";

import logoIcon from "../../assets/images/logo/logo-blanc.svg";
import profilIcon from "../../assets/images/profil-icon.svg";

import { useNavigate } from "react-router";

function TopBar() {
  const navigate = useNavigate();

  return (
    <div className="topbar-container">
      <button
        type="button"
        className="topbar-logo-btn"
        onClick={() => navigate("/")}
        aria-label="Retour à l'accueil"
      >
        <img
          src={logoIcon}
          className="topbar-logo"
          alt="logo retour à l'accueil"
        />
      </button>
      <button
        type="button"
        className="topbar-profil-btn"
        onClick={() => navigate("/profil")}
        aria-label="Aller à la page profil"
      >
        <img
          src={profilIcon}
          className="topbar-profil"
          alt="icone page profil"
        />
      </button>
    </div>
  );
}

export default TopBar;
