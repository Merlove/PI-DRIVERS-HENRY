import React from 'react';
import { render, screen } from '@testing-library/react';
import DriverCard from './DriverCard';

test('Renderiza el componente DriverCard correctamente', () => {
  const driverData = {
    name: 'Nombre del Conductor',
    image: 'imagen_del_conductor.jpg',
  };

  render(<DriverCard driver={driverData} />);
  const driverName = screen.getByText(driverData.name);
  expect(driverName).toBeInTheDocument();
  const driverImage = screen.getByAltText('Conductor');
  expect(driverImage).toBeInTheDocument();
});
