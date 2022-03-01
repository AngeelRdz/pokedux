import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { setPokemon } from '../../actions';
import { getPokemons } from '../../api/getPokemons';

import PokemomList from '../../components/PokemonList';
import Searcher from '../../components/Searcher';

import './styles.css';

//** Se comenta connect para utilizar useDispatch 
//* const mapStateToProps = state => ({
//*   pokemons: state.list,
//* });

//* const mapDispatchToProps = dispatch => ({
//*   setPokemons: value => dispatch(setPokemon(value)),
//* });

//* En este caso se quitan los parametros pros de opkemons y setPokemons que se mandaban en el connect,
//* Ahora se manda en el useSelector --> function Home({ pokemons, setPokemons }) {

function Home() {
  const dispatch = useDispatch();
  const list = useSelector(state => state.list);

  console.log('data hook:', list);

  useEffect(() => {
    getPokemons().then((res) => {
      console.log('info pokemones:', res);
      dispatch(setPokemon(res.results));
    });
  }, []);

  return (
    <div className='Home'>
      <Searcher />
      <PokemomList pokemons={list} />
    </div>
  );
}

//** Se comenta connect para utilizar useDispatch 
//* export default connect(mapStateToProps, mapDispatchToProps)(Home);

export default Home;
