import React, {useState} from 'react'
import Pokemon from './Pokemon'

import './PokemonRoster.css'

const PokemonRoster = ({ roster, pokedex }) => {

  const [randomize, setRandomize] = useState(Math.random())

  const randomizeRoster = () => {
    setRandomize(Math.random)
  }

  const shuffle = [...roster].sort(() => 0.5 - Math.random())
  const shuffleList = shuffle.slice(0, 6)

  return (
    <div className='roster-container'>
      <div className='pokedex-name'>{pokedex}</div>
      <div className='pokemon-roster-container'>
        {shuffleList.map(x => <div key={x} id={x}><Pokemon url={x} randomize={randomize}/></div>)}
      </div>
      <div className='random-button'>
        <button onClick={randomizeRoster}>Randomize</button>
      </div>
    </div>
  )
}

export default PokemonRoster