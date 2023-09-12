import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

test('Renderiza el componente HomePage correctamente', () => {
  render(<HomePage />);
  const pageTitle = screen.getByText('Listado de conductores');
  expect(pageTitle).toBeInTheDocument();
});
