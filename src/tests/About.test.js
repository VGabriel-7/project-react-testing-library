import React from 'react';
import { screen } from '@testing-library/react';
import renderWithHouter from './utils/renderWithHouter';
import About from '../pages/About';

describe('Testa as informações da página About', () => {
  it('Testa se a página contém as informações sobre a pokedex', () => {
    renderWithHouter(<About />);
    const title = screen.getByRole('heading', {
      name: /about pokédex/i,
      level: 2,
    });
    const paragraph = screen.getByText(/This application simulates a Pokédex/i);
    const paragraphTwo = screen.getByText(/One can filter Pokémons by type/);
    const img = screen.getByAltText('Pokédex');

    expect(title).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
    expect(paragraphTwo).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
