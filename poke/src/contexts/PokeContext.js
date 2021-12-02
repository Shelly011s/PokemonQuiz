import React, { createContext, useState } from 'react';

export const PokeContext = createContext();

const PokeContextProvider = (props) => {
  
    const [pokemon,setPokemon] = useState([]);
    const [idx,setIdx] = useState(0);
    const [score, setScore] = useState(0);
    const [options,setOptions] = useState(["pikachu","wartortle","beedrill"]);
    const [currQ,setCurrQ] = useState(0);
    const [store,setStore] = useState([]);
    
    const nxtQues = () =>{
        setIdx(Math.floor(Math.random() * 20 + 1));
        setCurrQ(currQ + 1);
        setOptions(store.map(store => {return store.name}).sort(()=>(Math.random()-0.5)).slice(0,3));
      }

    const providerValue = {
        pokemon,setPokemon,
        idx,setIdx,
        score, setScore,
        options,setOptions,
        currQ,setCurrQ,
        store,setStore,
        nxtQues
      };

  return (
    <PokeContext.Provider value={providerValue}>
      {props.children}
    </PokeContext.Provider>
  )
}

export default PokeContextProvider;