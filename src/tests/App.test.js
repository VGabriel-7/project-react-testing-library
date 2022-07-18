import React from 'react';
import { screen } from '@testing-library/react';
import EventUser from '@testing-library/user-event';
import renderWithRouter from './utils/renderWithHouter';
import App from '../App';

describe('', () => {
  it('Testa se o topo da aplicação contém um conjunto fixo de links de navegação', () => {
    renderWithRouter(<App />);
    const home = screen.getByRole('link', {
      name: 'Home',
    });
    const about = screen.getByRole('link', {
      name: 'About',
    });
    const favoritePokemons = screen.getByRole('link', {
      name: 'Favorite Pokémons',
    });
    expect(home).toBeInTheDocument();
    expect(about).toBeInTheDocument();
    expect(favoritePokemons).toBeInTheDocument();
  });

  it(`Testa se a aplicação é redirecionada para a página inicial,
  ao clicar no link Home`, () => {
    renderWithRouter(<App />);
    const home = screen.getByRole('link', {
      name: 'Home',
    });
    EventUser.click(home);
    const pokedex = screen.getByText('Pokédex');
    expect(pokedex).toBeInTheDocument();
  });

  it(`Testa se a página é redirecionada para a página About,
  ao clicar no link About `, () => {
    renderWithRouter(<App />);
    const about = screen.getByRole('link', {
      name: 'About',
    });
    EventUser.click(about);
    const aboutPokedex = screen.getByText('About Pokédex');
    expect(aboutPokedex).toBeInTheDocument();
  });

  it(`Testa se a página é redirecionada para a página de Pokémons Favoritados,
  ao clicar no link Pokémons Favoritados`, () => {
    renderWithRouter(<App />);
    const favorites = screen.getByRole('link', {
      name: 'Favorite Pokémons',
    });
    EventUser.click(favorites);
    const pokemons = screen.getByText('Favorite Pokémons');
    expect(pokemons).toBeInTheDocument();
  });

  it(`Testa se a aplicação é redirecionada para a página Not Found
  ao entrar em uma URL desconhecida.`, () => {
    const { history } = renderWithRouter(<App />);

    history.push('page/notFound');

    const pageNotFound = screen.getByText('Page requested not found');

    expect(pageNotFound).toBeInTheDocument();
  });
});
