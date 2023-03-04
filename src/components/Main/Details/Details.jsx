import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';

function PokemonDetails() {
  const { id } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get('name');
  const image = searchParams.get('image');
  const typeOne = searchParams.get('typeOne');

  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setPokemon(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPokemon();
  }, [id]);

  return (
    <div>
      <img src={image} alt={name} />
      <h3>{name.toUpperCase()}</h3>
      <p>Id: {pokemon.id}</p>
      <div>
        {typeOne && (<p key={typeOne}>{typeOne.toUpperCase()} </p> )}
        {pokemon.types && (<div> {pokemon.types.map(type => (<p key={type.type.name}>{type.type.name.toUpperCase()} </p>))}
      </div>
        )}
      </div>
      <p>Experience: {pokemon.base_experience}</p> 
      <p>Height: {pokemon.height/10} m</p> 
      <p>Weight: {pokemon.weight/10} Kg</p>
    </div>
  );
}

export default PokemonDetails;
