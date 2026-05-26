import { useState, useEffect } from "react";
import "./App.css";
import PokemonCard from "./Components/PokemonCard/PokemonCard";
import PokemonButton from "./Components/PokemonButton/PokemonButton";
// "Banco" de dados dos pokemons
import pokemons from "./Data/pokemons";

function App() {
  
  const [listaPokemons, setListaPokemons] = useState([
    { nome: "Charmander", estagio: 1, caminhoImagem: pokemons['Charmander'].imagem },
    { nome: "Squirtle", estagio: 1, caminhoImagem: pokemons['Squirtle'].imagem },
    { nome: "Bulbasauro", estagio: 1, caminhoImagem: pokemons['Bulbasauro'].imagem },
    { nome: "Lugia", estagio: 1, caminhoImagem: pokemons['Lugia'].imagem },
    { nome: "Ash", estagio: 1, caminhoImagem: pokemons['Ash'].imagem },
    
  ]);

  const [qtdEvoluidos, setQtdEvoluidos ] = useState(0)

    useEffect(() => {
      console.log('Executa toda vez que o valor da dependencia é alterado')
      console.log(listaPokemons)

      let pokemonsEvoluidos = listaPokemons.filter(pokemon => pokemon.estagio > 1)

      // eslint-disable-next-line react-hooks/set-state-in-effect
      setQtdEvoluidos(pokemonsEvoluidos.length)

    },[listaPokemons])

  // useEffect(() => {
  //   console.log('Rodarei UMA UNICA VEZ')
  // },[])



  function evoluirPokemon(nomePokemon){

    const novaLista = listaPokemons.map((pokemon) => {

      // console.log(pokemon)

      // Verificar qual pokemon foi clicado.
      if (pokemon.nome === nomePokemon){

        // Pega a próxima evolução no nosso "Banco de dados"
        const proximaEvolucao = pokemons[pokemon.nome].evolucao;

        // console.log(proximaEvolucao)

        // Caso nao exista proxima evolução, retorna o mesmo pokemon (ele nao evoluira).
        if(!proximaEvolucao){
          return pokemon;
        }

        // Retorna o Pokemon evoluido caso atenda as condições
        return {
          nome: proximaEvolucao,
          estagio: pokemon.estagio + 1,
          caminhoImagem: pokemons[proximaEvolucao].imagem
        }

      }
      // Só retorna o pokemon que nao foi clicado
      return pokemon

    })

    setListaPokemons(novaLista)
  }

  return (
    <>
      <h1>Pokemons!</h1>

      <h2>Quantidade de Pokemons Evoluidos: {qtdEvoluidos}</h2>

      <section id="center">
        {
        listaPokemons.map((pokemon,index) => (
          <PokemonCard
            key={index}
            nome={pokemon.nome}
            estagio={pokemon.estagio}
            caminhoImagem={pokemon.caminhoImagem}
            evoluirPokemon={() => evoluirPokemon(pokemon.nome)}
          />
        ))
        }


        {/* <PokemonCard
          nome={"Pikachu?"}
          estagio={1}
          caminhoImagem={pokemons['Mimikyu'].imagem}
        /> */}

        <PokemonButton  
          titulo={'Sou um botão componentizado!'}
          cor='red'
        />

        <PokemonButton  
          titulo={'Sou um super botao'}
          cor='white'
          corDaLetra={'black'}
        />

        <PokemonButton  
          titulo={'Sou um botão amarelo!'}
          cor='yellow'
          corDaLetra={'black'}
        />

        <PokemonButton/>


      </section>
    </>
  );
}

export default App;n