import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import CardPokemon from '../ListPokemon/CardPokemon/CardPokemon'

function FormPokemon(props) {
  const [input, setInput] = useState('');
  const [pokemonData, setPokemonData] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');


  useEffect(() => {
    const getPokemonData = async () => {
      if (input.trim() === '') {
        setErrorMessage('Please, enter a name or id pokemon');
        setPokemonData([]);
        return;
      }
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${input}`);
        setPokemonData(response.data);
      } catch (error) {
        setErrorMessage('Pokemon not found');
        setPokemonData([]);
      }
    };
    getPokemonData();
  }, [input]);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Object.keys(pokemonData).length === 0) {
      setErrorMessage('Please, enter a name or id pokemon');
      return;
    }
    const newPokemon = {
      id: uuidv4(),
      name: pokemonData.name,
      height: pokemonData.height,
      weight: pokemonData.weight,
      sprites: {
        front_default: pokemonData.sprites.front_default,
        back_default: pokemonData.sprites.back_default
      },
      base_experience: pokemonData.base_experience
    }
    setInput('');
    setPokemonData([...pokemonData, newPokemon]); 
  };
  

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Search your pokemon</h1>
      <input placeholder="Name or Id of the pokemon" name="text" type="text" value={input} onChange={handleChange} />
      <button type="submit">search</button>
      {errorMessage !== '' && <div className="alert">{errorMessage}</div>}
      {Object.keys(pokemonData).length > 0 && <CardPokemon pokemon={pokemonData} />}
    </form>
  );
}

export default FormPokemon;

