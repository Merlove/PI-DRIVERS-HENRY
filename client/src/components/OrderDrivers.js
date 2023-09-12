import React, { useState } from 'react';

function OrderDrivers() {
  const [orderBy, setOrderBy] = useState(null);

  const handleOrderBy = (type) => {

    setOrderBy(type);

  };

  return (
    <div>

      <button onClick={() => handleOrderBy('name')}>Ordenar alfabéticamente</button>
      <button onClick={() => handleOrderBy('birthDate')}>Ordenar por fecha de nacimiento</button>
    </div>
  );
}

export default OrderDrivers;
