import React, {useContext} from "react";
import { useForm } from 'react-hook-form';
import { pokemonContext } from "../../../context/pokemonContext";

const FormPokemon = () => {
  const {pokemons, setPokemons} = useContext(pokemonContext) 
  const {
    register,
    handleSubmit,
    formState: { errors},
  } = useForm({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: {
      type: ""
    }
  });



  const sendContext = (data) =>{
    console.log(data)
    setPokemons([...pokemons,data])
  }

  

  return (
    <div >
    <form onSubmit={handleSubmit( data=> sendContext(data) )}  >
      <h2>Create your Pokemon</h2>
      <input   {...register("id", { required: true, min: 1, max: 999 })} type="number" name="id" placeholder="id"  />
      <input  {...register("name")} type="text"  name="name" placeholder="Name" required minlenght="3"  />
      <input  {...register("imageUrl")} type="text" name="imageUrl" placeholder="url image"required />
      <input   {...register("height")} type="number" name="height" placeholder="Height" required/>
      <input   {...register("weight")}  type="number" name="weight" placeholder="Weight" required/>

      <select name="type" {...register("type")}>
        <option value="bug">Bug</option>
        <option value="dark">Dark</option>
        <option value="dragon">Dragon</option>
        <option value="electric">Electric</option>
        <option value="fairy">Fairy</option>
        <option value="fighting">Fighting</option>
        <option value="fire">Fire</option>
        <option value="flying">Flying</option>
        <option value="ghost">Ghost</option>
        <option value="grass">Grass</option>
        <option value="ground">Ground</option>
        <option value="ice">Ice</option>
        <option value="normal">Normal</option>
        <option value="poison">Poison</option>
        <option value="psychic">Psychic</option>
        <option value="rock">Rock</option>
        <option value="steel">Steel</option>
        <option value="water">Water</option>
      </select>
      <button type="submit">Create</button>
     
    </form>
    </div>
  );
}

export default FormPokemon