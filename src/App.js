import React, {useState, useEffect} from 'react'
import Header from './components/Header';
import axios from 'axios'
import PokemonRoster from './components/PokemonRoster';

function App() {

  const [pokemonList, setPokemonList] = useState([])
  const [pokedex, setPokedex] = useState('https://pokeapi.co/api/v2/pokedex/1')
  const [pokedexName, setPokedexName] = useState('NATIONAL')

  useEffect(() => {
    axios.get(pokedex).then((res) => {
      setPokemonList(res.data.pokemon_entries.map(x => `https://pokeapi.co/api/v2/pokemon/${x.pokemon_species.name}`))
    }).catch((err) => {
      console.log(err)
    })
  }, [pokedex])

  const changePokedex = (region) => {
    if (region === 'kanto') {
      setPokedex('https://pokeapi.co/api/v2/pokedex/2')
      setPokedexName('KANTO')
    } 
    else if (region === 'johto'){
      setPokedex('https://pokeapi.co/api/v2/pokedex/3')
      setPokedexName('JOHTO')
    }
    else if (region === 'hoenn'){
      setPokedex('https://pokeapi.co/api/v2/pokedex/4')
      setPokedexName('HOENN')
    }
    else if (region === 'sinnoh'){
      setPokedex('https://pokeapi.co/api/v2/pokedex/5')
      setPokedexName('SINNOH')
    }
    else if (region === 'unova'){
      setPokedex('https://pokeapi.co/api/v2/pokedex/8')
      setPokedexName('UNOVA')
    }
    else{
      setPokedex('https://pokeapi.co/api/v2/pokedex/1')
      setPokedexName('NATIONAL')
    }
  }

  return (
    <div className="App">
      <Header changePokedex={changePokedex}/>
      <PokemonRoster roster={pokemonList} pokedex={pokedexName}/>
    </div>
  );
}

export default App;
