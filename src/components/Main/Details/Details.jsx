import { useState, useEffect } from 'react';
import axios from 'axios';



//CardValue será el que aparezca cuando le di click a la card del pokemon 
function PokemonDetails({ cardValue }) {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${cardValue}`);
        setPokemon(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPokemon();
  }, [cardValue]);

  return (
    <div>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <img src={pokemon.sprites.back_default} alt={pokemon.name} />
      <h3>{pokemon.name.toUpperCase()}</h3>
      <p>Id: {pokemon.id}</p>
      <p>Experience: {pokemon.base_experience}</p> 
      <p>Height: {pokemon.height/10} m</p> 
      <p>Weight: {pokemon.weight/10} Kg</p>
    </div>
  );
}

export default PokemonDetails;
