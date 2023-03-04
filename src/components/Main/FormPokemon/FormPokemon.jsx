import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { useDebounce } from 'use-debounce'
import CardPokemon from '../ListPokemon/CardPokemon/CardPokemon';


function FormPokemon(props) {
  const [input, setInput] = useState('');
  const [pokemonData, setPokemonData] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [setSearch] = useState('');
  const [debouncedInput] = useDebounce(input, 2000)
  const showForm = props.showForm;

  useEffect(() => {
    const getPokemonData = async () => {
      if (debouncedInput.trim() === '') {
        setErrorMessage('Please, enter a name or id pokemon');
        return;
      }
      if (pokemonData.some(pokemon => pokemon.name === debouncedInput.toLowerCase() || pokemon.id === parseInt(debouncedInput))) {
        setErrorMessage('Pokemon already in the list');
        return;
      }
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${debouncedInput}`);
        setPokemonData([response.data, ...pokemonData]);
        
      } catch (error) {
        setErrorMessage('Pokemon not found');
      }
    };
    getPokemonData();
  }, [debouncedInput, pokemonData]);
  
/*   const addPokemon = (pokemon) => {
    setPokemonData([pokemon, ...pokemonData]);
  } */


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
    
    <div>
       
    {showForm ? (
      <form className="form" onSubmit={handleSubmit}>
        <h1>Search your pokemon</h1>
        <input placeholder="Name or Id of the pokemon" name="name" type="text" value={input} onChange={handleChangeInput} />
        {errorMessage !== '' && <div className="alert">{errorMessage}</div>}
      </form>
    ) : (
      printList()
    )}
  </div>
  );
}

export default FormPokemon;
