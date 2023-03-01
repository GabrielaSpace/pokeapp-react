import React from 'react';

function CardPokemon(props) {
  const { pokemon } = props;

  return (
    <article>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <img src={pokemon.sprites.back_default} alt={pokemon.name} />
      <h3>{pokemon.name.toUpperCase()}</h3>
      <p>Id: {pokemon.id}</p>
      <p>Experience: {pokemon.base_experience}</p>
      <p>Height: {pokemon.height / 10} m</p>
      <p>Weight: {pokemon.weight / 10} Kg</p>
    </article>
  );
}

export default CardPokemon;
