import React, { useState } from 'react';

function TeamFilter({ onFilter }) {
  const [selectedTeam, setSelectedTeam] = useState('');

  const handleFilter = () => {

    onFilter(selectedTeam); 
  };

  return (
    <div>
     
      <select
        value={selectedTeam}
        onChange={(e) => setSelectedTeam(e.target.value)}
      >
        <option value="">Todos los equipos</option>
        <option value="equipo1">Equipo 1</option>
        <option value="equipo2">Equipo 2</option>
      </select>
      <button onClick={handleFilter}>Filtrar</button>
    </div>
  );
}

export default TeamFilter;
