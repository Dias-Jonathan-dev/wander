import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { Destination } from "../types/Destination";
import "../style/DestinationDetails.css";

const API_URL = import.meta.env.VITE_API_URL;

function DestinationDetails() {
  const { id } = useParams();
  const [destination, setDestination] = useState<Destination>();
  const [selectedIdx, setSelectedIdx] = useState(0);

  useEffect(() => {
    async function fetchDestination() {
      try {
        const res = await fetch(`${API_URL}/api/destinations/${id}`);
        const data = await res.json();
        setDestination(data);
      } catch (err) {
        console.error("Erreur lors du fetch de la destination :", err);
      }
    }
    fetchDestination();
  }, [id]);

  if (!destination) return <p>Chargement...</p>;

  const gallery = destination.gallery || [];

  return (
    <div
      className="destination-details-bg"
      style={{
        backgroundImage: `url(${destination.background_image})`,
        backgroundColor: "rgba(var(--primary-color-rgb), 0.9)",
        backgroundBlendMode: "multiply",
      }}
    >
      <div className="destination-details-content">
        <div className="gallery-section">
          <div className="main-image">
            <img
              src={gallery[selectedIdx]}
              alt={`Gallerie principale ${selectedIdx + 1}`}
            />
          </div>
          <div className="miniatures">
            {gallery.slice(0, 4).map((url, idx) => (
              <button
                type="button"
                key={url}
                className={`miniature${selectedIdx === idx ? " selected" : ""}`}
                onClick={() => setSelectedIdx(idx)}
                tabIndex={0}
              >
                <img src={url} alt={`Miniature ${idx + 1}`} />
              </button>
            ))}
          </div>
        </div>
        <div className="destination-description">
          <h1>{destination.name}</h1>
          {destination.long_description?.split("\n\n").map((para) => (
            <p key={para}>{para}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DestinationDetails;
