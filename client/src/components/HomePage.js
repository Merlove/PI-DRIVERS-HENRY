import React, { useEffect, useState } from 'react';
import DriverCard from './DriverCard';

function HomePage() {

  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/drivers')
      .then((response) => response.json())
      .then((data) => setDrivers(data))
      .catch((error) => console.error('Error al obtener conductores', error));
  }, []);

  return (
    <div>
      <h1>Listado de conductores</h1>
      <div className="driver-list">
        {drivers.map((driver) => (
          <DriverCard
            key={driver.id}
            name={`${driver.name} ${driver.lastname}`}
            image={driver.image}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
