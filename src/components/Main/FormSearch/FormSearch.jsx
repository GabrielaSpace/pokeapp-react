import React, { useEffect, useState, useContext } from 'react'
import { useDebounce } from 'use-debounce'
import { pokeContext } from '../../../context/pokeContext'
import axios from 'axios'

const Search = () => {
  const { pokemons, setPokemons } = useContext(pokeContext) //extraccion array de pokemons  globales del contex
  const [pokemon, setPokemon] = useState('') //estado individual de pokemons para pintar  pokemon este componente search
  const [bg, setBg] = useState('')
  const [input, setInput] = useState('') // Para guardar los input
  const [debouncedText] = useDebounce(input, 1000)
  const [error, setError] = useState(false) // para poner mensaje de error cuando se repite el pokemon
  const [msg, setMsg] = useState('')

  //el useEffect consta de 3 partes 1= (args)=>  2={ bloque de instrucciones } 3= [ escucha algo ] array de dependencias
  useEffect(() => {
    if (debouncedText.length > 0) {
      // condicional para que no haga peticiones si el input esta vacio
      getPokemon() //buscar y setear dos cosas 1)setear array de pokemonS context - 2) seatear 1 pokemon en state poke

      switch (pokemon.type) {
        case 'psychic': {
          setBg('bg-violet-500/90')
          break
        } //mewtwo
        case 'grass': {
          setBg('bg-emerald-600/90')
          break
        } // chikorita
        case 'electric': {
          setBg('bg-amber-500/90')
          break
        } // pikachu
        case 'fire': {
          setBg('bg-red-500/90')
          break
        } //charizard
        case 'water': {
          setBg('bg-sky-600/90')
          break
        } // lapras
        case 'fighting': {
          setBg('bg-red-800/90')
          break
        } //machamp
        case 'rock': {
          setBg('bg-orange-800/90')
          break
        } //sudowoodo
        case 'normal': {
          setBg('bg-neutral-400/90')
          break
        } // pidgeotto
        case 'bug': {
          setBg('bg-green-500')
          break
        } // caterpie
        case 'fairy': {
          setBg('bg-pink-300/90')
          break
        } // xerneas
        case 'dark': {
          setBg('bg-slate-600/90')
          break
        } // umbreon
        case 'dragon': {
          setBg('bg-indigo-600/90')
          break
        } //dragonite
        case 'flying': {
          setBg('bg-blue-500/90')
          break
        } //
        case 'ghost': {
          setBg('bg-purple-800/90')
          break
        } // gastly
        case 'ground': {
          setBg('bg-yellow-800/90')
          break
        } // dugtrio
        case 'ice': {
          setBg('bg-cyan-200/90')
          break
        } // articuno
        case 'poison': {
          setBg('bg-fuchsia-600/90')
          break
        } // muk
        case 'steel': {
          setBg('bg-slate-300/90')
          break
        } // steelix

        default: {
          break
        }
      }
    }
    //eslint-disable-next-line
  }, [debouncedText, pokemon, pokemon.type, bg]) //equivale a un componentDidUpdate.


  const getPokemon = async () => {
    try {
      // Petición HTTP
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${input.toLocaleLowerCase()}`
      )

      const newPokemon = {
        id: data.id,
        name: data.name,
        type: data.types[0].type.name,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,

        weight: data.weight,
        height: data.height,
        experience: data.base_experience,
      }

      if (
        !pokemons.map((pokemon) => pokemon.name).includes(debouncedText) &&
        !pokemons
          .map((pokemon) => pokemon.id.toString())
          .includes(debouncedText.trim())
      ) {
        // condicional para que no se repitan los pokemon ya buscados. Comprobamos por nombre y por id. El id se pasa a string para que no de error la comprobacion y el trim lo pasamos para que no busque al hacer espacio.
        setPokemons([newPokemon, ...pokemons]) //nuevo dato del imput al principio, viejo detras mejor exp User (ux/ui)
        setPoke(newPokemon) //setear state indivual de pokemon para ser pintado en este componente search
      } 
    } catch (error) {
      console.log(error)
    }
    setInput('') // para limpiar el input una vez que se ejecuta la peticion
  }

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
    <h1>Search your pokemon</h1>
    <input placeholder="Name or Id of the pokemon" name="text" type="text" value={input} onChange={handleChange} />
    <button type="submit">search</button>
    {Object.keys(pokemon).length > 0 && <CardPokemon pokemon={pokemon} />}
  </form>
  )
    
}

export default Search