import React, { useEffect, useState } from "react";

import CatProfile from "../PetProfile";

import "./Gallery.css";

export default function Gallery() {
  const [pets, setPets] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch("https://60f2262e6d44f3001778853a.mockapi.io/api/Cats")
      .then((response) => response.json())
      .then((data) => {
        setPets(data);
        setLoaded(true);
      });
  }, []);

  return (
    <>
      <h1 className="App-title">Mi galería de mascotas</h1>
      <p>Número de mascotas: {pets?.length || 0}</p>
      <div className="galleryContainer">
        {!loaded ? (
          <p>Cargando...</p>
        ) : (
          pets?.map((cat) => (
            <CatProfile
              key={cat.id}
              name={cat.name}
              age={cat.age}
              image={cat.image}
            />
          ))
        )}
      </div>
    </>
  );
}
