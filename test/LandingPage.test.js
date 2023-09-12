import React from 'react';
import { render, screen } from '@testing-library/react';
import LandingPage from './LandingPage';

test('Renderiza el componente LandingPage correctamente', () => {
  render(<LandingPage />);
  const pageTitle = screen.getByText('Bienvenido a la página de inicio');
  expect(pageTitle).toBeInTheDocument();
});