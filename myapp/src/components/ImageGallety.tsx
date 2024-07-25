// src/components/ImageGallery.tsx

import React, { useEffect, useState } from "react";
import axios from "axios";

const ImageGallery: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    // Buscar a lista de imagens do servidor
    axios
      .get("http://localhost:4000/images")
      .then((response) => {
        setImages(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar imagens:", error);
      });
  }, []);

  return (
    <div>
      <h1>Galeria de Imagens</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {images.map((image, index) => (
          <div key={index} style={{ margin: "10px" }}>
            <img
              src={`http://localhost:4000/images/${image}`}
              alt={`Imagem ${index + 1}`}
              style={{ width: "200px", height: "200px", objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
