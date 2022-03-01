import React from 'react'
import { Grid, Image, Label, Icon, Divider } from 'semantic-ui-react';
import { MAIN_COLOR, FAV_COLOR } from '../../utils/constants';

import './styles.css';

const PokemonCard = ({ pokemon }) => {
    if (!pokemon) return null;

    return (
        <Grid.Column mobile={16} tablet={8} computer={4}>
            <div className='PokemonCard'>
                <Icon name='favorite' color={FAV_COLOR} />
                <Image centered src={pokemon.sprites.front_default} alt="Pokemon Card" />
                <h2 className='PokemonCard-title'>{pokemon.name}</h2>
                <Divider />
                {pokemon.types.map((type, index) => {
                    return (
                        <Label color={MAIN_COLOR} key={`${pokemon.name}-${index}`}>
                            {type.type.name}
                        </Label>
                    );
                })}
            </div>
        </Grid.Column>
    );
};

export default PokemonCard