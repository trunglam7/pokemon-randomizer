import React, {useState, useEffect} from 'react'
import axios from 'axios'
import placeholderImage from '../images/poke-placeholder.png'
import './Pokemon.css'


const typeColor = {
    'NORMAL': '#A8A77A',
    'FIRE': '#EE8130',
    'WATER': '#6390F0',
    'ELECTRIC': '#F7D02C',
    'GRASS': '#7AC74C',
    'ICE': '#96D9D6',
    'FIGHTING': '#C22E28',
    'POISON': '#A33EA1',
    'GROUND': '#E2BF65',
    'FLYING': '#A98FF3',
    'PSYCHIC': '#F95587',
    'BUG': '#A6B91A',
    'ROCK': '#B6A136',
    'GHOST': '#735797',
    'DRAGON': '#6F35FC',
    'DARK': '#705746',
    'STEEL': '#B7B7CE',
    'FAIRY': '#D685AD'
}

const typeBackground = {
    'NORMAL': 'linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(168,167,122,1) 70%, rgba(255,255,255,1) 100%)',
    'FIRE': 'linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(238,129,48,1) 50%, rgba(255,255,255,1) 100%)',
    'WATER': 'linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(99,144,240,1) 50%, rgba(255,255,255,1) 100%)',
    'ELECTRIC': 'linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(247,208,44,1) 50%, rgba(255,255,255,1) 100%)',
    'GRASS': 'linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(122,199,76,1) 50%, rgba(255,255,255,1) 100%)',
    'ICE': 'linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(150,217,214,1) 50%, rgba(255,255,255,1) 100%)',
    'FIGHTING': 'linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(194,46,40,1) 50%, rgba(255,255,255,1) 100%)',
    'POISON': 'linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(163,62,161,1) 50%, rgba(255,255,255,1) 100%)',
    'GROUND': 'linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(226,191,101,1) 50%, rgba(255,255,255,1) 100%)',
    'FLYING': 'linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(169,143,243,1) 50%, rgba(255,255,255,1) 100%)',
    'PSYCHIC': 'linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(249,85,135,1) 50%, rgba(255,255,255,1) 100%)',
    'BUG': 'linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(166,185,26,1) 50%, rgba(255,255,255,1) 100%)',
    'ROCK': 'linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(182,161,54,1) 50%, rgba(255,255,255,1) 100%)',
    'GHOST': 'linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(115,87,151,1) 50%, rgba(255,255,255,1) 100%)',
    'DRAGON': 'linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(111,53,252,1) 50%, rgba(255,255,255,1) 100%)',
    'DARK': 'linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(112,87,70,1) 50%, rgba(255,255,255,1) 100%)',
    'STEEL': 'linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(183,183,206,1) 50%, rgba(255,255,255,1) 100%)',
    'FAIRY': 'linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(214,133,173,1) 50%, rgba(255,255,255,1) 100%)'
}

const Pokemon = ( { url } ) => {

    const [pokemon, setPokemon] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        axios.get(url).then((res) => {
            setIsLoading(false)
            setPokemon({
                name: res.data.name.toUpperCase(),
                sprite: res.data.sprites.front_default,
                types: res.data.types.map(x => x.type.name.toUpperCase()),
                abilities: res.data.abilities.map(x => x.ability.name.toUpperCase()),
                moves: res.data.moves.map(x => x.move.name.toUpperCase())
            })
        }).catch((err) => {
            console.log(err)
        })
    }, [url])
    
    if(isLoading) return (
        <div className='loading-container'>
            <div className='loading-text'>Loading...</div>
        </div>
        
    )

    if (!pokemon) return null
    if (!pokemon.types) return null

    const shuffleMoves = [...pokemon.moves].sort(() => 0.5 - Math.random())
    const shuffleMoveList = shuffleMoves.slice(0, 4)

    return (
        <div className='poke-card' style={{
            'border' : `3px solid ${typeColor[pokemon.types[1] ? pokemon.types[1] : pokemon.types[0]]}`,
            'background' : typeBackground[pokemon.types[0]]
            }}>
            <div className='poke-info'>
                <div className='left-section'>
                    <div className='poke-name'>{pokemon.name}</div>
                    { 
                        pokemon.sprite ? <img className='poke-sprite' src={pokemon.sprite} alt='sprite' /> : 
                            <img className='poke-placeholder' src={placeholderImage} alt='placeholder' />
                    }
                </div>
                <div className='right-section'>
                    <div className='poke-types'>
                        <div className='type-title'>Types:</div>
                        <div className='type-list'>
                            <div className='poke-type' style={{'backgroundColor' : typeColor[pokemon.types[0]]}}>{pokemon.types[0]}</div>
                            <div className='poke-type' style={{'backgroundColor' : typeColor[pokemon.types[1]]}}>{pokemon.types[1]}</div>
                        </div>
                    </div>
                    <div className='poke-abilities'>
                        <div className='ability-title'>Abilities:</div>
                        <div>{pokemon.abilities[0]}</div>
                        <div>{pokemon.abilities[1]}</div>
                        <div>{pokemon.abilities[2]}</div>
                    </div>
                    <div className='poke-abilities'>
                        <div className='ability-title'>Moves:</div>
                        <div>{shuffleMoveList[0]}</div>
                        <div>{shuffleMoveList[1]}</div>
                        <div>{shuffleMoveList[2]}</div>
                        <div>{shuffleMoveList[3]}</div>
                    </div>
                </div>
            </div>
        </div>
       

    )
}

export default Pokemon