# Boas-vindas ao repositório do projeto de testes com a React Testing Library!

<details>
  <summary><strong>!! Para rodar o projeto em seu computador</strong></summary><br />

  1. Clone o repositório

  - Use o comando: `git clone git@github.com:VGabriel-7/project-react-testing-library.git`.
  - Entre na pasta do repositório que você acabou de clonar:
    - `cd project-react-testing-library`

  2. Instale as dependências

  - `npm install`.
  
  3. Crie uma branch a partir da branch `main`

  - Verifique que você está na branch `main`
    - Exemplo: `git branch`
  - Se não estiver, mude para a branch `main`
    - Exemplo: `git checkout main`
  - Agora crie uma branch à qual você vai submeter os `commits` do seu projeto
    - Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
    - Exemplo: `git checkout -b xaolin-project-react-testing-library`

  4. Adicione as mudanças ao _stage_ do Git e faça um `commit`

  - Verifique que as mudanças ainda não estão no _stage_
    - Exemplo: `git status` (deve aparecer listada a pasta _joaozinho_ em vermelho)
  - Adicione o novo arquivo ao _stage_ do Git
    - Exemplo:
      - `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
      - `git status` (deve aparecer listado o arquivo _xaolin/README.md_ em verde)
  - Faça o `commit` inicial
    - Exemplo:
      - `git commit -m 'iniciando o projeto x'` (fazendo o primeiro commit)
      - `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

  5. Adicione a sua branch com o novo `commit` ao repositório remoto

  - Usando o exemplo anterior: `git push -u origin xaolin-project-react-testing-library`
</details>

# Requisitos

## 1. Testa o componente `<App.js />`

  > Caminho do componente: `src/App.js`

- <details><summary>Testa se o topo da aplicação contém um conjunto fixo de links de navegação:</summary>

  - O primeiro link deve possuir o texto `Home`;

  - O segundo link deve possuir o texto `About`;

  - O terceiro link deve possuir o texto `Favorite Pokémons`.
</details>

- Testa se a aplicação é redirecionada para a página inicial, na URL `/` ao clicar no link `Home` da barra de navegação;

- Testa se a aplicação é redirecionada para a página de `About`, na URL `/about`, ao clicar no link `About` da barra de navegação;

- Testa se a aplicação é redirecionada para a página de `Pokémons Favoritados`, na URL `/favorites`, ao clicar no link `Favorite Pokémons` da barra de navegação;

- Tesa se a aplicação é redirecionada para a página `Not Found` ao entrar em uma URL desconhecida.
---

## 2. Testa o componente `<About.js />.`

  > Caminho do componente: `src/pages/About.js`

  - Testa se a página contém as informações sobre a Pokédex;

  - Testa se a página contém um heading `h2` com o texto `About Pokédex`;

  - Testa se a página contém dois parágrafos com texto sobre a Pokédex;

  - Testa se a página contém a seguinte imagem de uma Pokédex: `https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png`.
---

## 3. Testa o componente `<FavoritePokemons.js />`

  > Caminho do componente: `src/pages/FavoritePokemons.js`
  
  - Testa se é exibida na tela a mensagem `No favorite pokemon found`, caso a pessoa não tenha pokémons favoritos;

  - Testa se são exibidos todos os cards de pokémons favoritados.
---

## 4. Testa o componente `<NotFound.js />`

  > Caminho do componente: `src/pages/NotFound.js`

  - Testa se a página contém um heading `h2` com o texto `Page requested not found 😭`;

  - Testa se a página mostra a imagem `https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif`.
---

## 5. Testa o componente `<Pokedex.js />`

  > Caminho do componente: `src/pages/Pokedex.js`

  - Testa se a página contém um heading `h2` com o texto `Encountered pokémons`;

  - <details><summary>Testa se é exibido o próximo pokémon da lista quando o botão <code>Próximo pokémon</code> é clicado:</summary>

    - O botão deve conter o texto `Próximo pokémon`;

    - Os próximos pokémons da lista devem ser mostrados, um a um, ao clicar sucessivamente no botão;

    - O primeiro pokémon da lista deve ser mostrado ao clicar no botão, se estiver no último pokémon da lista.
  </details>

  - Testa se é mostrado apenas um pokémon por vez;

  - <details><summary>Testa se a Pokédex tem os botões de filtro:</summary>

    - Deve existir um botão de filtragem para cada tipo de pokémon, sem repetição;

    - A partir da seleção de um botão de tipo, a Pokédex deve circular somente pelos pokémons daquele tipo;

    - O texto do botão deve corresponder ao `nome do tipo`, ex. `Psychic`;

    - O botão `All` precisa estar **sempre** visível.
  </details>

  - <details><summary>Testa se a Pokédex contém um botão para resetar o filtro:</summary>

    - O texto do botão deve ser `All`;

    - A Pokedéx deverá mostrar os pokémons normalmente (sem filtros) quando o botão `All` for clicado;

    - Ao carregar a página, o filtro selecionado deverá ser `All`.
  </detail>
---

## 6. Testa o componente `<Pokemon.js />`

  > Caminho do componente: `src/components/Pokemon.js`

  - <details><summary>Testa se é renderizado um card com as informações de determinado pokémon:</summary>

    - O nome correto do pokémon deve ser mostrado na tela;

    - O tipo correto do pokémon deve ser mostrado na tela;

    - O peso médio do pokémon deve ser exibido com um texto no formato `Average weight: <value> <measurementUnit>`; onde `<value>` e `<measurementUnit>` são, respectivamente, o peso médio do pokémon e sua unidade de medida;

    - A imagem do pokémon deve ser exibida. Ela deve conter um atributo `src` com a URL da imagem e um atributo `alt` com o texto `<name> sprite`, onde `<name>` é o nome do pokémon.
  </details>

  - Testa se o card do pokémon indicado na Pokédex contém um link de navegação para exibir detalhes deste pokémon. O link deve possuir a URL `/pokemons/<id>`, onde `<id>` é o id do pokémon exibido;

  - Testa se ao clicar no link de navegação do pokémon, é feito o redirecionamento da aplicação para a página de detalhes de pokémon;
  
  - Testa também se a URL exibida no navegador muda para `/pokemon/<id>`, onde `<id>` é o id do pokémon cujos detalhes se deseja ver;

  - <details><summary>Testa se existe um ícone de estrela nos pokémons favoritados:</summary>

    - O ícone deve ser uma imagem com o atributo `src` contendo o caminho `/star-icon.svg`;

    - A imagem deve ter o atributo `alt` igual a `<pokemon> is marked as favorite`, onde `<pokemon>` é o nome do pokémon exibido.
  </details>
---

## 7. Testa o componente `<PokemonDetails.js />`

  > Caminho do componente: `src/pages/PokemonDetails.js`

  - <details><summary>Testa se as informações detalhadas do pokémon selecionado são mostradas na tela:</summary>

    - A página deve conter um texto `<name> Details`, onde `<name>` é o nome do pokémon;

    - **Não** deve existir o link de navegação para os detalhes do pokémon selecionado;

    - A seção de detalhes deve conter um heading `h2` com o texto `Summary`;

    - A seção de detalhes deve conter um parágrafo com o resumo do pokémon específico sendo visualizado.
  </details>

  - <details><summary>Testa se existe na página uma seção com os mapas contendo as localizações do pokémon:</summary>

    - Na seção de detalhes deverá existir um heading `h2` com o texto `Game Locations of <name>`; onde `<name>` é o nome do pokémon exibido;

    - Todas as localizações do pokémon devem ser mostradas na seção de detalhes;

    - Devem ser exibidos o nome da localização e uma imagem do mapa em cada localização;

    - A imagem da localização deve ter um atributo `src` com a URL da localização;

    - A imagem da localização deve ter um atributo `alt` com o texto `<name> location`, onde `<name>` é o nome do pokémon.
  </details>

  - <details><summary>Tests se o usuário pode favoritar um pokémon através da página de detalhes:</summary>

    - A página deve exibir um `checkbox` que permite favoritar o pokémon;

    - Cliques alternados no `checkbox` devem adicionar e remover respectivamente o pokémon da lista de favoritos;

    - O `label` do `checkbox` deve conter o texto `Pokémon favoritado?`.
  </details>
---
