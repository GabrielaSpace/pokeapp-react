import React from 'react';
import CardPokemon from './CardPokemon/CardPokemon';


function ListPokemon({ searches }) {
  return (
    <div>
      {searches.map((search, index) => (
        <CardPokemon key={index} pokemon={search} />
      ))}
    </div>
  );
}



export default ListPokemon;


