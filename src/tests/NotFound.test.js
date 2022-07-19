import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './utils/renderWithHouter';
import NotFound from '../pages/NotFound';

describe('Componente <NotFound.js />', () => {
  it(`Teste se a página contém um heading h2 com
  o texto Page requested not found 😭`, () => {
    renderWithRouter(<NotFound />);

    const title = screen.getByText(/Page requested not found/i);
    const emogi = screen.getByText('😭');
    const img = screen.getByAltText(/Pikachu crying because the page/i);

    expect(title).toBeInTheDocument();
    expect(emogi).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
