import FormPokemon from "./FormPokemon/FormPokemon";
import React, { useState } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import New from "./New/New";
import NotFound from './NotFound/NotFound';
import PokemonDetails from "./Details/Details";


function Main() {
  const { id } = useParams();
  const [searches, setSearches] = useState([]);

  const handleAddPokemon = (newPokemon) => {
    setSearches([...searches, newPokemon]);
  }

  return (
    <div>
       <Routes>
        <Route path="/" element={<FormPokemon showForm={false} />} />
        <Route path="/new" element={<New onSubmit={handleAddPokemon} />} />
        <Route path="/search" element={<FormPokemon showForm={true} />} />
        <Route path="/pokemon/:id" element={<PokemonDetails id={id} />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
export default Main;
