// import { useState } from 'react';
import FormPokemon from "./FormPokemon/FormPokemon";

import React  from "react";
import { Routes, Route } from "react-router-dom";
import New from './New/New';
import NotFound from './NotFound/NotFound';


function Main() {
/*   const [searches, setSearches] = useState([]);

  const handleAddPokemon = (newPokemon) => {
    setSearches([...searches, newPokemon]);
  } 
{  <FormPokemon onSubmit={handleAddPokemon} />
      <ListPokemon searches={searches} /> } */
  return (
    <div>
       <Routes>
       <Route path="/" element={<FormPokemon showForm={false} />} />
        <Route path="/new" element={<New />} />
        <Route path="/search" element={<FormPokemon  showForm={true} />} />
        {/* <Route path="/pokemon/:id" element={<details/>} /> */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
export default Main;
