import React from 'react';


function CardPokemon(props) {
  const { pokemon } = props;

  return (
    <div>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h3>{pokemon.name.toUpperCase()}</h3>
      <p>Id: {pokemon.id}</p>

    </div>
  );
}

export default CardPokemon;

