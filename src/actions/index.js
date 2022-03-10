import axios from "axios";
import { getPokemons } from "../api/getPokemons";
import { SET_POKEMONS, SET_ERROR, CLEAR_ERROR, FETCH_POKEMON_DETAIL } from "./type";

export const setPokemons = (payload) => ({
    type: SET_POKEMONS,
    payload,
});

export const setError = (payload) => ({
    type: SET_ERROR,
    payload,
});
  
  export const clearError = (payload) => ({
    type: CLEAR_ERROR,
    payload,
});

export const fetchPokemonDetails = (payload) => ({
    type: FETCH_POKEMON_DETAIL,
    payload,
});

//* Se comenta para utilizarlo en redux-saga
// export const getPokemonWithDetails = () => (dispatch) => {
    // getPokemons()
    //   .then((res) => {
    //     const pokemonList = res.results;
    //     console.log('info pokemones:', res);
    //     return Promise.all(
    //       pokemonList.map(pokemon => axios.get(pokemon.url))
    //     );
    //     // dispatch(setPokemons(res.results));
    //   })
    //   .then((pokemonResponse) => {
    //     console.log('pokemonResponse::', pokemonResponse);
    //     const pokemonsWithDetails = pokemonResponse.map(
    //       response => response.data
    //     );
    //     console.log('pokemonsWithDetails::', pokemonsWithDetails);
    //     dispatch(setPokemons(pokemonsWithDetails));
    //   })
    //   .catch((error) => {
    //     dispatch(setError({ message: 'Ocurrio un error', error }));
    //   });
// };
