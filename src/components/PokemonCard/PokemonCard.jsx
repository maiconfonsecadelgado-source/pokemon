function PokemonCard({nome,caminhoImagem,estagio, evoluirPokemon }){
    return (
         <div className='CardPokemon'>
            <img src={caminhoImagem} width={260} height={280} alt={nome} title={nome} />
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