import axios from 'axios';
import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { setError, setPokemons } from '../../actions';
import { getPokemons } from '../../api/getPokemons';

import PokemomList from '../../components/PokemonList';
import Searcher from '../../components/Searcher';

import './styles.css';

//** Se comenta connect para utilizar useDispatch 
//* const mapStateToProps = state => ({
//*   pokemons: state.list,
//* });

//* const mapDispatchToProps = dispatch => ({
//*   setPokemons: value => dispatch(setPokemons(value)),
//* });

//* En este caso se quitan los parametros pros de pokemons y setPokemons que se mandaban en el connect,
//* Ahora se manda en el useSelector --> function Home({ pokemons, setPokemons }) {

function Home() {
  const pokemons = useSelector(state => state.list);
  const dispatch = useDispatch();

  // console.log('data hook:', list);

  useEffect(() => {
    getPokemons()
      .then((res) => {
        const pokemonList = res.results;
        console.log('info pokemones:', res);
        return Promise.all(
          pokemonList.map(pokemon => axios.get(pokemon.url))
        );
        // dispatch(setPokemons(res.results));
      })
      .then((pokemonResponse) => {
        console.log('pokemonResponse::', pokemonResponse);
        const pokemonsWithDetails = pokemonResponse.map(
          response => response.data
        );
        console.log('pokemonsWithDetails::', pokemonsWithDetails);
        dispatch(setPokemons(pokemonsWithDetails));
      })
      .catch((error) => {
        dispatch(setError({ message: 'Ocurrio un error', error }));
      });
  }, []);

  return (
    <div className='Home'>
      <Searcher />
      <PokemomList pokemons={pokemons} />
    </div>
  );
}

//** Se comenta connect para utilizar useDispatch 
//* export default connect(mapStateToProps, mapDispatchToProps)(Home);

export default Home;
