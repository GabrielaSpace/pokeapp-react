import React, { useState } from 'react';
import PokemonContext from './PokemonContext';

function PokemonProvider(props) {
  const [searchedPokemons, setSearchedPokemons] = useState([]);

  return (
    <PokemonContext.Provider value={[searchedPokemons, setSearchedPokemons]}>
      {props.children}
    </PokemonContext.Provider>
  );
}

export default PokemonProvider;

