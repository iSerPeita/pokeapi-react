import { useEffect, useState } from 'react'
import Umbreon from "./components/umbreon.jsx"
import './App.css'

function App() {
  // Aquí guardaremos el Pokémon
  const [pokemon, setPokemon] = useState(null)

  // Esto se ejecuta una vez al cargar la página
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/dragapult')
      .then((respuesta) => {
        return respuesta.json()
      })
      .then((datos) => {
        setPokemon(datos)
      })
  }, [])

  return (
    <div className='encabezado'>
      <h1>Mi PokeAPI</h1>
      <Umbreon/>
      <p>Primera prueba con PokéAPI</p> <br />

      {pokemon && (
        <div>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
      )}
    </div>
  )
}

export default App