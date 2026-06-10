import { Link } from "react-router-dom"

function PokemonCard({nome,caminhoImagem,estagio, evoluirPokemon,id }){
    return (
         <div className='CardPokemon'>
           <Link to={`/pokemon-react/${id}`}>
                <img src={caminhoImagem} width={260} height={280} alt={nome} title={nome} />
            </Link>
            <h2>{nome}</h2>
            <p>Estágio: {estagio}</p>
            <button onClick={()=> evoluirPokemon(nome)}>Clique aqui</button>
          </div>
    )
}
export default PokemonCard

// Componentes react sempre em pascal case
// PascalCase = PrimeiraMaiusculaProximasPalvarasTambem

// camelCase = primeiraMinusculaProximasMaiusculas