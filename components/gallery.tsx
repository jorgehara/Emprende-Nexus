import { useState } from "react";
import { photos } from "../lib/constants";

export const Gallery = () => {
  const [hoveredPhoto, setHoveredPhoto] = useState<string | null>(null);

  function handleMouseEnter(id: string) {
    setHoveredPhoto(id);
  }

  function handleMouseLeave() {
    setHoveredPhoto(null);
  }

  return (
    <div className="photo-gallery">
      {photos.map((photo) => (
        <div
          key={photo.id}
          className="photo-container"
          onMouseEnter={() => handleMouseEnter(photo.id)}
          onMouseLeave={() => handleMouseLeave()}
        >
          <img
            src={photo.imageUrl}
            alt={photo.title}
            style={photo.style}
            className="photo"
          />
          <div
            className={`photo-info ${
              hoveredPhoto === photo.id ? "visible" : "hidden"
            }`}
          >
            <h2>{photo.title}</h2>
            <p className="dark-text" >{photo.description}</p>
          </div>
        </div>
      ))}
    </div>
  );

};
