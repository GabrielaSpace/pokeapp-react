
import React, { useContext } from 'react';

import { pokemonContext} from '../../../context/pokemonContext';



import CardPokemon from '../ListPokemon/CardPokemon/CardPokemon'

const ListPokemon = () => {
  const {pokemons, setPokemons} = useContext(pokemonContext) //extraccion de estado y funcion globales del contex
  
  return (
      <div>
        { 
          pokemons.length !== 0 ? pokemons.map((pokemon, index)=> <CardPokemon pokemon={pokemon} key={index} />) : <div>
            <h1 >Pokemons</h1>
          </div>
        }
      </div>    
  )
}

export default ListPokemon


