import React, { useEffect } from 'react';
import { getPokemons } from '../../api/getPokemons';
import PokemomList from '../../components/PokemonList';
import Searcher from '../../components/Searcher';
import './styles.css';

function Home() {
  useEffect(() => {
    getPokemons().then(res => console.log(res));
  });

  return (
    <div className='Home'>
      <Searcher />
      <PokemomList />
    </div>
  );
}

export default Home;
