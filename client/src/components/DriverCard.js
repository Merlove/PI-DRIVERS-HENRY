import React from 'react';

function DriverCard({ driver }) {
  return (
    <div>
      <h2>{`${driver.name} ${driver.lastname}`}</h2>
      <img src={driver.image} alt={`${driver.name} ${driver.lastname}`} />
      <p>Nacionalidad: {driver.nationality}</p>
      <p>Fecha de Nacimiento: {driver.birthdate}</p>
    </div>
  );
}

export default DriverCard;
