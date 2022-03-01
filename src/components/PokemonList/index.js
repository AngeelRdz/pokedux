import React from 'react';
import { Grid } from 'semantic-ui-react';
import PokemonCard from './PokemonCard';

import './styles.css';

const PokemomList = ({ pokemons }) => {
    // const pokemons = Array(20).fill('');

    return (
        <div className='wrapper'>
            <Grid>
                {pokemons.map((pokemon, index) => (
                    <PokemonCard pokemon={pokemon} key={`pokemon-${index}`} />
                ))}
            </Grid>
        </div>
    )
}

export default PokemomList;