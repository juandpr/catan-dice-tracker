import React from 'react';
import { PropTypes } from 'prop-types';
import styles from './Game.styles.js';

import {
  View,
  Text
} from 'react-native';

import Chart from './../Chart'
import DiceThrower from './../DiceThrower'

class Game extends React.Component {
  componentDidMount() {
    if (!this.props.currentGame) {
      this.props.navigation.navigate('New');
    }
  }

  render() {
    const dice = this.props.currentGame && this.props.currentGame.dice || [];

    return (
      <View style={styles.game}>
        <Text style={styles.title}>SOCDT</Text>
        <Text style={styles.subtitle}>Settlers Of Catan Dice Tracker</Text>
        <Chart dice={dice} />
        <DiceThrower throwDice={this.props.throwDice} undoDice={this.props.undoDice}/>
      </View>
    );
  }
}

Game.propTypes = {
  currentGame: PropTypes.object.isRequired,
  throwDice: PropTypes.func.isRequired,
  undoDice: PropTypes.func.isRequired
};

export default Game;
