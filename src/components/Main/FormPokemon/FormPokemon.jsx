import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import CardPokemon from '../ListPokemon/CardPokemon/CardPokemon';

function FormPokemon(props) {
  const [input, setInput] = useState('');
  const [pokemonData, setPokemonData] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    const getPokemonData = async () => {
      if (input.trim() === '') {
        setErrorMessage('Please, enter a name or id pokemon');
        return;
      }
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${input}`);
        setPokemonData([...pokemonData, response.data]);
      } catch (error) {
        setErrorMessage('Pokemon not found');
      }
    };
    getPokemonData();
  }, [input]);

  const handleChangeInput = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearch(input);
    setInput('');
  };

  const printList = () => {
    return pokemonData.map((pokemon) => <CardPokemon pokemon={pokemon} key={uuidv4()} />);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Search your pokemon</h1>
      <input placeholder="Name or Id of the pokemon" name="name" type="text" value={input} onChange={handleChangeInput} />
      <button type="submit">search</button>
      {errorMessage !== '' && <div className="alert">{errorMessage}</div>}
      {printList()}
    </form>
  );
}

export default FormPokemon;
