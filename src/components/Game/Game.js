import React from 'react';
import { PropTypes } from 'prop-types';
import styles from './Game.styles.js';

import {
  View,
  Button
} from 'react-native';

import Chart from './../Chart'

class Game extends React.Component {

  componentWillMount() {
    this.props.newGame();
  }

  render() {
    return (
      <View style={styles.game}>
        <Chart dice={this.props.dice} />
        <Button onPress={() => {this.props.throwDice(7)}} title="Throw"></Button>
      </View>
    );
  }
}

Game.propTypes = {
  dice: PropTypes.array.isRequired,
  newGame: PropTypes.func.isRequired,
  throwDice: PropTypes.func.isRequired
};

export default Game;
