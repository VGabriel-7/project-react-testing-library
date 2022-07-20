import React from 'react';
import { screen } from '@testing-library/react';
import EventUser from '@testing-library/user-event';
import renderWithRouter from './utils/renderWithHouter';
import App from '../App';

describe('Componente <Pokemon />', () => {
  test('Testa se é renderizado um card com as informações de determinado pokémon', () => {
    renderWithRouter(<App />);

    const pikashivis = screen.getByText(/Pikachu/i);
    const pokemonType = screen.getByTestId('pokemon-type', { name: 'Electric' });
    const pokemonWeight = screen.getByText(/Average weight: 6.0 kg/i);
    const img = screen.getByAltText(/Pikachu sprite/i);

    expect(pikashivis).toBeInTheDocument();
    expect(pokemonType).toBeInTheDocument();
    expect(pokemonType).toContainHTML('Electric');
    expect(pokemonWeight).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  });

  it(`Teste se o card do pokémon indicado na Pokédex
  contém um link de navegação para exibir detalhes deste pokémon.`, () => {
    renderWithRouter(<App />);

    const moreDetails = screen.getByRole('link', { name: /More details/i });
    expect(moreDetails).toHaveAttribute('href', '/pokemons/25');
  });

  it(`Teste se ao clicar no link de navegação
  do pokémon, é feito o redirecionamento da aplicação
  para a página de detalhes de pokémon`, () => {
    const { history } = renderWithRouter(<App />);

    const moreDetails = screen.getByRole('link', { name: /More details/i });
    EventUser.click(moreDetails);
    const { pathname } = history.location;
    expect(pathname).toBe('/pokemons/25');

    const pikachuDetails = screen.getByText(/Pikachu Details/i);
    expect(pikachuDetails).toBeInTheDocument();
  });

  it('Teste se existe um ícone de estrela nos pokémons favoritados', () => {
    renderWithRouter(<App />);

    const moreDetails = screen.getByRole('link', { name: /More details/i });
    EventUser.click(moreDetails);
    const pokemonFavoritado = screen.getByLabelText(/Pokémon favoritado?/i);
    EventUser.click(pokemonFavoritado);
    const imgFavoriteIcon = screen.getByAltText(/Pikachu is marked as favorite/i);
    expect(imgFavoriteIcon).toHaveAttribute('src', '/star-icon.svg');
  });
});
