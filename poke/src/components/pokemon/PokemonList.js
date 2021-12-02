import React , {useEffect, useContext } from 'react';
import { PokeContext } from '../../contexts/PokeContext';
import PokemonCard from './PokemonCard';
import axios from 'axios';

const Quiz = () => {
  const {
    idx, 
    pokemon, setPokemon,
    setStore,
    score, setScore,
    currQ, setCurrQ,
  } = useContext(PokeContext);



  useEffect(()=>{
    fetchPoke();
  }
  ,[idx]);

  const fetchPoke = async() => {
    try{
      const res = await axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=35');
    setPokemon( res.data['results'].slice(0,21) );
    setStore( res.data['results'].slice(21,35) );}
    catch(e){
      console.log("Got it"+ e);} 
  };
    
  
  return (
      <div>
        
          <div className="board">
          {
          currQ !== 5 ?
          pokemon?.length > 0? 
          <PokemonCard 
          key = {idx}
          name = {pokemon[idx].name}
          url = {pokemon[idx].url}
           />
          : null
          :<h2 className="div m-auto d-flex flex-column align-items-center">
            You scored {score}/5
            <button className = "btn btn-primary my-4" onClick = {()=> {setScore(0); setCurrQ(0);} }>Play Again</button>
          </h2>
          }
          </div> 
      </div>
    );
  
}

export default Quiz;