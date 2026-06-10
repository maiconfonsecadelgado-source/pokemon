import { useState, useEffect } from "react";
import PokemonCard from "../Components/PokemonCard/PokemonCard";

// "Banco" de dados dos pokemons
import pokemons from "../Data/pokemons";

function Home() {
  const pokemonsEstagio1 = pokemons.filter((pokemon) => pokemon.estagio === 1);

  const [listaPokemons, setListaPokemons] = useState(pokemonsEstagio1);

  const [qtdEvoluidos, setQtdEvoluidos] = useState(0);

  useEffect(() => {
    console.log("Executa toda vez que o valor da dependencia é alterado");
    console.log(listaPokemons);

    let pokemonsEvoluidos = listaPokemons.filter(
      (pokemon) => pokemon.estagio > 1,
    );

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setQtdEvoluidos(pokemonsEvoluidos.length);
  }, [listaPokemons]);

  // useEffect(() => {
  //   console.log('Rodarei UMA UNICA VEZ')
  // },[])

  function evoluirPokemon(nomePokemon) {
    const novaLista = listaPokemons.map((pokemon) => {
      if (pokemon.nome === nomePokemon) {
        const pokemonBanco = pokemons.find((p) => p.nome === pokemon.nome);

        const proximaEvolucao = pokemonBanco.evolucao;

        if (!proximaEvolucao) {
          return pokemon;
        }

        const pokemonEvoluido = pokemons.find(
          (p) => p.nome === proximaEvolucao,
        );


        // Lembrar de retornar o novo ID aqui na aula

        return {
          id: pokemonEvoluido.id,
          nome: pokemonEvoluido.nome,
          estagio: pokemon.estagio + 1,
          imagem: pokemonEvoluido.imagem,
        };
      }

      return pokemon;
    });

    setListaPokemons(novaLista);
  }

  return (
    <>
      <h1>Pokemons!</h1>

      <h2>Quantidade de Pokemons Evoluidos: {qtdEvoluidos}</h2>

      <section id="center">
        {listaPokemons.map((pokemon, index) => (
          <PokemonCard
            key={index}
            id={pokemon.id}
            nome={pokemon.nome}
            estagio={pokemon.estagio}
            caminhoImagem={pokemon.imagem}
            evoluirPokemon={() => evoluirPokemon(pokemon.nome)}
          />
        ))}
      </section>
    </>
  );
}

export default Home;