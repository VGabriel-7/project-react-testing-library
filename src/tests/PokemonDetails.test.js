import React from 'react';
import { screen } from '@testing-library/react';
import EventUser from '@testing-library/user-event';
import renderWithRouter from './utils/renderWithHouter';
import App from '../App';

describe('A maitê me cobrou', () => {
  test('Testa se as informações aparecem na tela', () => {
    renderWithRouter(<App />);

    const moreDetails = screen.getByRole('link', { name: /more details/i });
    EventUser.click(moreDetails);

    const title = screen.getByRole('heading', { name: /Pikachu Details/i });
    expect(title).toBeInTheDocument();
    const summary = screen.getByRole('heading', { name: /summary/i, level: 2 });
    expect(summary).toBeInTheDocument();
    const summaryText = screen.getByText(/This intelligent Pokémon/i);
    expect(summaryText).toBeInTheDocument();
  });
  test('Testa se existe um mapa com a localização dos pokemons', () => {
    renderWithRouter(<App />);

    const moreDetails = screen.getByRole('link', { name: /more details/i });
    EventUser.click(moreDetails);

    const titleGame = screen.getByRole('heading', { name: /Game Locations of Pikachu/i });
    expect(titleGame).toBeInTheDocument();
    const imgMap = screen.getAllByAltText(/Pikachu Location/i);
    expect(imgMap).toHaveLength(2);
    expect(imgMap[0]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
    expect(imgMap[1]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');
  });
  test('Testa se o usuário pode favoritar um pokemon', () => {
    renderWithRouter(<App />);

    const moreDetails = screen.getByRole('link', { name: /more details/i });
    EventUser.click(moreDetails);
    const favoritePokemon = screen.getByRole('checkbox',
      { name: /Pokémon favoritado?/i });
    // expect(favoritePokemon).toEqual('Pokémon favoritado?')
    EventUser.click(favoritePokemon);
    const favoritePokemons = screen.getByRole('link', { name: /Favorite Pokémons/i });
    EventUser.click(favoritePokemons);
    const pikachu = screen.getByText(/Pikachu/i);
    expect(pikachu).toBeInTheDocument();
    const star = screen.getByAltText(/Pikachu is marked as favorite/i);
    expect(star).toHaveAttribute('src', '/star-icon.svg');
  });
});
