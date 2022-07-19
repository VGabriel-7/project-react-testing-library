import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithHouter from './utils/renderWithHouter';
import FavoritePokemons from '../pages/FavoritePokemons';
import App from '../App';

describe('Componente <FavoritePokemons />', () => {
  it(`Testa se é exibida a mensagem "No favorites pokemon found",
  caso a pessoa não tenho pokémons favoritos`, () => {
    renderWithHouter(<FavoritePokemons />);

    const message = screen.getByText(/No favorite pokemon found/i);
    expect(message).toBeInTheDocument();
  });

  it('Testa se são exibidos todos os cards de pokémons favoritados', () => {
    renderWithHouter(<App />);

    const moreDetails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(moreDetails);

    const favoritePokemon = screen.getByLabelText(/Pokémon favoritado?/i);
    userEvent.click(favoritePokemon);

    renderWithHouter(<FavoritePokemons />);

    const average = screen.getByText(/Average weight:/i);
    expect(average).toBeInTheDocument();
  });
});
