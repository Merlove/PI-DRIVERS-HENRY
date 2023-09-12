import React from 'react';
import { render, screen } from '@testing-library/react';
import FormPage from './FormPage';

test('Renderiza el componente FormPage correctamente', () => {
  render(<FormPage />);
  const pageTitle = screen.getByText('Crear Nuevo Conductor');
  expect(pageTitle).toBeInTheDocument();
});
