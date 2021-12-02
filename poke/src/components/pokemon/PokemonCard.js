import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { PokeContext } from '../../contexts/PokeContext';
import spinner from '../layout/spinner.gif';

const Sprite = styled.img`
  width: 5em;
  height: 5em;
  display: none;
`;

const Hover = styled.button`

  opacity: 0.95;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  color: #22221A;
`;


const PokemonCard = ({name, url}) => {
  
  //const { name, url , idx } = props;
  //const [pokename,setPokeName] = useState(name);
  const {
    pokemon, setPokemon,
    options, setOptions,
    score, setScore,
    nxtQues
  } = useContext(PokeContext); 

  const [imageLoad, setImageLoad] = useState(true);
  const [tooManyReq, setTooManyReq] = useState(false);

  const pokeidx = url.split('/')[url.split('/').length - 2];
  const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokeidx}.png?raw=true`;
  
  
  useEffect(()=>{
    setOptions([...options,name]); 
  },[]);

  const handleInput = (value) => {
    name = name.charAt(0).toUpperCase() + name.slice(1);
    if(value === name){
      setScore(score + 1);
    }
    nxtQues(); 
  }
    
  return (
      <div className="board">
        
          <div className="div">
            {imageLoad ? (
              <img
                src={spinner}
                alt = "Img"
                style={{ width: '12em', height: '12em' }}
                className="card-img-top rounded mx-auto d-block"
              />
            ) : null}
            <Sprite
              className="card-img-top rounded mx-auto "
              src={imageUrl}
              onLoad={() => {setImageLoad(false);}}
              onError={() => {setTooManyReq(true);}} 
              style={
                tooManyReq
                  ? { display: 'none' }
                  : imageLoad
                  ? null
                  : { display: 'block',width: '14em', height: '14em' }
              }
            />
            
            <div className=" mx-auto">
              <h6>
                {options
                .map(option => option.charAt(0).toUpperCase() + option.slice(1))
                .sort(()=>(Math.random()-0.5))
                .map((answerOption) => (
                    <Hover key = {answerOption} 
                    className = " btn btn-warning w-100 d-flex flex-column align-items-center mt-1"
                    onClick={() => {handleInput(answerOption);}}>
                      {answerOption} 
                    </Hover>))
                }
              </h6>
            </div>
          </div>
        
      </div>
    );
  
}

export default PokemonCard;