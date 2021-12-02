import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import PokeContextProvider from './contexts/PokeContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Dashboard from './components/layout/Dashboard';
import PokemonList from './components/pokemon/PokemonList';


function App() {
  return (
    <Router>
        <div className="App">
          <PokeContextProvider>                  
            <Routes>
              
              <Route exact path="/" element={< Dashboard />} />
              <Route exact path="/quiz" element={< PokemonList />} />
  
            </Routes>
          </PokeContextProvider> 
        </div>
      </Router>
  );
}

export default App;
