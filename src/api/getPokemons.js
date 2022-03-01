import axios from "./config";

export const getPokemons = (limit = 151) => 
    axios
    .get(`/pokemon?limit${limit}`)
    .then((response) => response.data)
    .catch((err) => console.log(err));
    