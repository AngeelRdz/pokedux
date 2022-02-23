import React from 'react'
import { Grid, Image, Label, Icon } from 'semantic-ui-react';
import { MAIN_COLOR, FAV_COLOR } from '../../utils/constants';

const PokemonCard = () => {
  return (
        <Grid.Column mobile={16} tablet={8} computer={4}>
            <div className='PokemonCard'>
                <Icon name='favorite' color={FAV_COLOR} />
                <Image centered src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt="Pokemon Card" />
                <p>Ditto</p>
                <Label color={MAIN_COLOR}>
                    Normal
                </Label>
            </div>
        </Grid.Column>
  )
}

export default PokemonCard