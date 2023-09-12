import React, { useState } from 'react';

function FormPage() {
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    nationality: '',
    birthdate: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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

        <button type="submit">Crear Conductor</button>
      </form>
    </div>
  );
}

export default FormPage;
