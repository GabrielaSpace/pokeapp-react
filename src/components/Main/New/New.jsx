import React, { useState } from 'react';


const New = (props) => {

  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [typeOne, setTypeOne] = useState('');
  const [typeTwo, setTypeTwo] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "id":
        setId(value);
        break;
      case "name":
        setName(value);
        break;
      case "imageUrl":
        setImageUrl(value);
        break;
      case "typeOne":
        setTypeOne(value);
        break;
      case "typeTwo":
        setTypeTwo(value);
        break;
      default:
        break;
    }
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    const newPokemon= {
        id: id,
        name: name,
        imageUrl: imageUrl,
        typeOne: typeOne,
        typeTwo: typeTwo
      
    }
    props.onSubmit(newPokemon);
    setId('');
    setName('');
    setImageUrl('');
    setTypeOne('');
    setTypeTwo('');
  }


  

  return (
    <div >
    <form  onSubmit={handleSubmit}>
      <h2>Create your Pokemon</h2>
      <input type="number" name="id" placeholder="id" required  onChange={handleChange}/>
      <input type="text"  name="name" placeholder="Name" required minlenght="3" onChange={handleChange}/>
      <input type="text" name="imageUrl" placeholder="url image" required onChange={handleChange} />
      <select name="typeOne" required onChange={handleChange}>
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
      <select name="typeTwo" required onChange={handleChange}>
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
      <button type="submit">Create Pokemon</button>
     
    </form>
    </div>
  );
}

export default New;