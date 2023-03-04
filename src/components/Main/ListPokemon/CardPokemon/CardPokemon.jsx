import React from 'react';
import { Link } from 'react-router-dom';

function CardPokemon(props) {
  const { pokemon } = props;

  return (
    <>
      <Link to={`/pokemon/${pokemon.id}?name=${pokemon.name}&image=${pokemon.sprites.front_default}&typeOne=${pokemon.types[0].type.name}`} >
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <h3>{pokemon.name.toUpperCase()}</h3>
        <p>N°: {pokemon.id}</p>
        <div>{pokemon.types.map(type => (<p key={type.type.name}>{type.type.name.toUpperCase()}</p>))}</div>
      </Link>
    </>
  );
}

export default CardPokemon;
