import "../style/NotFoundPage.css";
import { useNavigate } from "react-router";
import logoIcon from "../assets/images/logo/logo-blanc.svg";

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="not-found-page-container">
      <button
        type="button"
        className="logo-not-found-page"
        onClick={() => navigate("/")}
        aria-label="Retour à l'accueil"
      >
        <img
          src={logoIcon}
          className="topbar-logo"
          alt="logo retour à l'accueil"
        />
      </button>
      <div className="not-found-info">
        <div className="not-found-text">
          <h1>Votre envie de voyager vous a mené hors de nos frontières !</h1>
          <p>
            La page que vous tentez de visiter n'existe pas ou est en cours de
            création. Nous vous invitons à revenir à l'accueil pour poursuivre
            votre visite !
          </p>
        </div>
        <button
          type="button"
          className="button-pink"
          onClick={() => {
            navigate("/");
          }}
        >
          Revenir à l'accueil
        </button>
      </div>
    </div>
  );
}

export default NotFoundPage;
