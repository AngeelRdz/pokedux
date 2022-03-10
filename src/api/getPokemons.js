import axios from "../services/axios";

export const getPokemons = (limit = 151) => 
    axios
        .get(`/pokemon?limit=${limit}`)
        .then((response) => response.data)
        .catch((err) => console.log(err));

// export const getPokemonsWithDetails = () => {
//     getPokemons()
//       .then((res) => {
//         const pokemonList = res.results;
//         console.log('info pokemones:', res);
//         return Promise.all(
//           pokemonList.map(pokemon => axios.get(pokemon.url))
//         );
//         // dispatch(setPokemons(res.results));
//       })
//       .then((pokemonResponse) => {
//         console.log('pokemonResponse::', pokemonResponse);
//         const pokemonsWithDetails = pokemonResponse.map(
//           response => response.data
//         );
//         console.log('pokemonsWithDetails::', pokemonsWithDetails);
//         // dispatch(setPokemons(pokemonsWithDetails));
//         return pokemonsWithDetails
//       })
//     //   .catch((error) => {
//     //     dispatch(setError({ message: 'Ocurrio un error', error }));
//     //   });
// }

export const getPokemonsWithDetails = (pokemons) => {
    return Promise.all(pokemons.map((pokemon) => axios.get(pokemon.url))).then(
      (pokemonResponses) => {
        return pokemonResponses.map((response) => response.data);
      }
    );
  };