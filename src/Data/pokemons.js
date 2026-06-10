import charmanderImagem from "../assets/charmander.webp" 
import squirtleImagem from "../assets/squirtle.webp" 
import bulbasauroImagem from "../assets/bulbasauro.webp"
import charmeleonImagem from "../assets/charmeleon.webp"
import wartortleImagem from "../assets/wartortle.png"
import ivysaurImagem from "../assets/ivysaur.png"
import lugiaImagem from "../assets/lugia.png"
import ashImagem from "../assets/ash.png"
import charizardImagem from "../assets/charizard.gif"
import blastoiseImagem from "../assets/blastoise.gif"
import venosaurImagem from "../assets/venosaur.gif"

const pokemons = [
    {
        id: 1,
        estagio:1,
        nome:"Charmander",
        evolucao: "Charmeleon",
        imagem: charmanderImagem
    },
    {
        id: 2,
        estagio:2,
        nome:"Charmeleon",
        evolucao:"Charizard",
        imagem: charmeleonImagem
    },
    {
        id: 3,
        estagio:3,
        nome:"Charizard",
        evolucao: null,
        imagem: charizardImagem
    },


    {
        id: 4,
        estagio:1,
        nome:"Squirtle",
        evolucao:"Wartortle",
        imagem: squirtleImagem
    },
    {
        nome:"Wartortle",
        estagio:2,
        id: 5,
        evolucao:"Blastoise",
        imagem: wartortleImagem
    },
    {
        nome:"Blastoise",
        estagio:3,
        id: 6,
        evolucao:null,
        imagem: blastoiseImagem
    },


    {
        nome:"Bulbasauro",
        estagio:1,
        id: 7,
        evolucao: "Ivysaur",
        imagem: bulbasauroImagem
    },
    {
        nome:"Ivysaur",
        estagio:2,
        id: 8,
        evolucao: "Venosaur",
        imagem: ivysaurImagem
    },
    {
        nome:"Venosaur",
        estagio:3,
        id: 9,
        evolucao:null,
        imagem: venosaurImagem
    },
]
export default pokemons