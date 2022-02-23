import React from 'react';
import PokemomList from '../../components/PokemonList';
import Searcher from '../../components/Searcher';
import './styles.css';

function Home() {
  return (
    <div className='Home'>
      <Searcher />
      <PokemomList />
    </div>
  );
}

export default Home;
