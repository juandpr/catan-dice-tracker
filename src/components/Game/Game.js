import React from 'react';
import { PropTypes } from 'prop-types';
import styles from './Game.styles.js';

import {
  View
} from 'react-native';

import Chart from './../Chart'
import DiceThrower from './../DiceThrower'

class Game extends React.Component {
  componentWillMount() {
    this.props.newGame();
  }

  render() {
    return (
      <View style={styles.game}>
        <Chart dice={this.props.dice} />
        <DiceThrower throwDice={this.props.throwDice} undoDice={this.props.undoDice}/>
      </View>
    );
  }
}

Game.propTypes = {
  dice: PropTypes.array.isRequired,
  newGame: PropTypes.func.isRequired,
  throwDice: PropTypes.func.isRequired,
  undoDice: PropTypes.func.isRequired
};

export default Game;
