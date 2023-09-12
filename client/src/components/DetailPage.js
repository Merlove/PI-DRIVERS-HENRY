import React, { useEffect, useState } from 'react';

function DetailPage({ match }) {
  const [driver, setDriver] = useState(null);
  
  useEffect(() => {
    const fetchDriverDetails = async () => {
      try {
        const response = await fetch(`/api/drivers/${match.params.id}`);
        if (response.ok) {
          const data = await response.json();
          setDriver(data);
        } else {
          console.error('Error al cargar los detalles del conductor');
        }
      } catch (error) {
        console.error('Error al cargar los detalles del conductor', error);
      }
    };

    fetchDriverDetails();
  }, [match.params.id]);

  return (
    <div>
      {driver ? (
        <div>
          <h1>Detalle del Conductor</h1>
          <img src={driver.image} alt={`${driver.name} ${driver.lastname}`} />
          <h2>{`${driver.name} ${driver.lastname}`}</h2>
          <p>Nacionalidad: {driver.nationality}</p>
          <p>Fecha de Nacimiento: {driver.birthdate}</p>
          <p>Descripción: {driver.description}</p>
        </div>
      ) : (
        <p>Cargando detalles del conductor...</p>
      )}
    </div>
  );
}

export default DetailPage;
