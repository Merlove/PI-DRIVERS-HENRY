import React, { useState } from 'react';

function FormPage() {
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    nationality: '',
    birthdate: '',
    description: '',
    image: '', // Campo para la imagen
    teams: [], // Campo para las escuderías (puede ser un arreglo)
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    
  };

  const handleTeamsChange = (e) => {

  };

  const handleSubmit = (e) => {
    e.preventDefault();
 
    console.log(formData);
  };

  return (
    <div>
      <h1>Crear Nuevo Conductor</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="lastname">Apellido:</label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
          required
        />

        <label htmlFor="nationality">Nacionalidad:</label>
        <input
          type="text"
          id="nationality"
          name="nationality"
          value={formData.nationality}
          onChange={handleChange}
          required
        />

        <label htmlFor="birthdate">Fecha de Nacimiento:</label>
        <input
          type="date"
          id="birthdate"
          name="birthdate"
          value={formData.birthdate}
          onChange={handleChange}
          required
        />

        <label htmlFor="description">Descripción:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <label htmlFor="image">Imagen URL:</label>
        <input
          type="text"
          id="image"
          name="image"
          value={formData.image}
          onChange={handleImageChange}
        />

        {/* Aquí puedes agregar la lógica para seleccionar/agregar escuderías */}
        <label htmlFor="teams">Escuderías:</label>
        <select
          multiple
          id="teams"
          name="teams"
          value={formData.teams}
          onChange={handleTeamsChange}
        >
          <option value="equipo1">Equipo 1</option>
          <option value="equipo2">Equipo 2</option>
          {/* Agrega más opciones de escuderías según tus necesidades */}
        </select>

        <button type="submit">Crear Conductor</button>
      </form>
    </div>
  );
}

export default FormPage;
