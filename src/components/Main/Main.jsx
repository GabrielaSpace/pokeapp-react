import { useState } from 'react';
import FormPokemon from "./FormPokemon/FormPokemon";
import ListPokemon from "./ListPokemon/ListPokemon";



function Main() {
  const [searches, setSearches] = useState([]);

  const handleAddPokemon = (newPokemon) => {
    setSearches([...searches, newPokemon]);
  }

  return (
    <div>
      <FormPokemon onSubmit={handleAddPokemon} />
      <ListPokemon searches={searches} />
    </div>
  );
}
export default Main;
