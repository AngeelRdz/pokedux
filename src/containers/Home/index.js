import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setPokemon } from '../../actions';
import { getPokemons } from '../../api/getPokemons';

import PokemomList from '../../components/PokemonList';
import Searcher from '../../components/Searcher';

import './styles.css';

const mapStateToProps = state => ({
  pokemons: state.list,
});

const mapDispatchToProps = dispatch => ({
  setPokemons: value => dispatch(setPokemon(value)),
});

function Home({ pokemons, setPokemons }) {
  useEffect(() => {
    getPokemons().then((res) => {
      console.log('info pokemones:', res);
      setPokemons(res.results);
    });
  }, []);

  return (
    <div className='Home'>
      <Searcher />
      <PokemomList pokemons={pokemons} />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
