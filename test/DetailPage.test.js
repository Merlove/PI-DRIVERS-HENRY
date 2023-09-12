import React from 'react';
import { render, screen } from '@testing-library/react';
import DetailPage from './DetailPage';

test('Renderiza el componente DetailPage correctamente', () => {
  render(<DetailPage />);
  const pageTitle = screen.getByText('Detalle del Conductor');
  expect(pageTitle).toBeInTheDocument();
});
