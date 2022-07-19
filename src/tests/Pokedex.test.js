import React from 'react';
import { screen } from '@testing-library/react';
import EventUser from '@testing-library/user-event';
import renderWithRouter from './utils/renderWithHouter';
import App from '../App';
// import data from '../data';

describe('Componente <Pokedex />', () => {
  it('Testa se é renderizado um titulo "Encountered pokémons"', () => {
    renderWithRouter(<App />);

    const title = screen.getByRole('heading', {
      name: /Encountered pokémons/i, level: 2,
    });

    expect(title).toBeInTheDocument();
  });

  it(`Teste se é exibido o próximo pokémon
  da lista quando o botão Próximo pokémon é clicado`, () => {
    renderWithRouter(<App />);

    const nextPokemonButton = screen.getByRole('button', { name: /Próximo pokémon/i });
    expect(nextPokemonButton).toBeInTheDocument();

    const pokemons = ['Pikachu', 'Charmander',
      'Caterpie', 'Ekans', 'Alakazam', 'Mew', 'Rapidash', 'Snorlax', 'Dragonair'];

    for (let index = 0; index === pokemons.length; index += 1) {
      const pokemon = pokemons[index];
      const nove = 9;
      const currentPokemon = (index === nove
        ? screen.getByText(/Pikachu/i) : screen.getByText(pokemon));
      expect(currentPokemon).toBeInTheDocument();
      EventUser.click(nextPokemonButton);
    }
  // kkkkkkk poderia ter feito dessa outra forma, mas eu estava com saudade do for antigo.
  // Saudades de Fundamentos.
  //   data.forEach(({ name }) => {
  //     const currentPokemon = screen.getByText(name);
  //     expect(currentPokemon).toBeInTheDocument();
  //     EventUser.click(nextPokemonButton);
  //   });
  });

  it('Testa se a Pokédex tem os botões de filtro', () => {
    renderWithRouter(<App />);

    const dataTestIds = screen.getAllByTestId(/pokemon-type-button/i).length;

    const numberOfButtons = 7;
    expect(dataTestIds).toBe(numberOfButtons);
  });

  it('Teste se a Pokédex contém um botão para resetar o filtro', () => {
    renderWithRouter(<App />);

    const fire = screen.getByRole('button', { name: /Fire/i });
    EventUser.click(fire);
    const charmander = screen.getByText(/Charmander/i);
    expect(charmander).toBeInTheDocument();

    const buttonAll = screen.getByRole('button', { name: /All/i });
    expect(buttonAll).toBeInTheDocument();

    EventUser.click(buttonAll);
    const pikachivis = screen.getByText(/Pikachu/i);
    expect(pikachivis).toBeInTheDocument();
  });
});
