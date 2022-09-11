import React from 'react'
import './Header.css'
import PokeLogo from '../images/poke-logo.png'

const Header = ({ changePokedex }) => {
  return (
    <div className='header-container'>
        <img className='poke-logo' src={PokeLogo} alt=''></img>
        <div className='button-container'>
          <button onClick={() => changePokedex('national')}>NATIONAL</button>
          <button onClick={() => changePokedex('kanto')}>KANTO</button>
          <button onClick={() => changePokedex('johto')}>JOHTO</button>
          <button onClick={() => changePokedex('hoenn')}>HOENN</button>
          <button onClick={() => changePokedex('sinnoh')}>SINNOH</button>
          <button onClick={() => changePokedex('unova')}>UNOVA</button>
        </div>
    </div>
  )
}

export default Header