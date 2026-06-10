import { useParams } from "react-router-dom";
import pokemons from "../Data/pokemons";

function Pokemon() {
  const { pokemonId } = useParams();

  const pokemon = pokemons.find((pokemon) => pokemon.id === Number(pokemonId));

  if (!pokemon) {
  return <h1>Pokémon não encontrado</h1>;
  }

  return (
    <>
      <h1>{pokemon.nome}</h1>
      <p>Estágio: {pokemon.estagio}</p>
      <p>Próxima evolução do pokemon: {pokemon.evolucao}</p>
      <div>
        <img
          src={pokemon.imagem}
          width={260}
          height={280}
          alt={pokemon.nome}
          title={pokemon.nome}
        />
      </div>
    </>
  );
}

export default Pokemon;