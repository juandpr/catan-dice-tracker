import React from 'react';
import { PropTypes } from 'prop-types';
import styles from './DiceThrower.styles.js';

import {
  View
} from 'react-native';

import DiceButton from './../DiceButton'

class DiceThrower extends React.Component {
  render() {
    return (
      <View style={styles.diceThrower}>
        <View style={[styles.column, styles.firstColumn]}>
          <View style={styles.buttonContainer}><DiceButton onPress={() => {this.props.throwDice(2)}} value="2"></DiceButton></View>
          <View style={styles.buttonContainer}><DiceButton onPress={() => {this.props.throwDice(3)}} value="3"></DiceButton></View>
          <View style={[styles.buttonContainer, styles.buttonContainerLastRow]}><DiceButton onPress={() => {this.props.throwDice(4)}} value="4"></DiceButton></View>
        </View>
        <View style={styles.column}>
          <View style={styles.buttonContainer}><DiceButton onPress={() => {this.props.throwDice(5)}} value="5"></DiceButton></View>
          <View style={styles.buttonContainer}><DiceButton onPress={() => {this.props.throwDice(6)}} value="6"></DiceButton></View>
          <View style={[styles.buttonContainer, styles.buttonContainerLastRow]}><DiceButton onPress={() => {this.props.throwDice(7)}} value="7"></DiceButton></View>
        </View>
        <View style={styles.column}>
          <View style={styles.buttonContainer}><DiceButton onPress={() => {this.props.throwDice(8)}} value="8"></DiceButton></View>
          <View style={styles.buttonContainer}><DiceButton onPress={() => {this.props.throwDice(9)}} value="9"></DiceButton></View>
          <View style={[styles.buttonContainer, styles.buttonContainerLastRow]}><DiceButton onPress={() => {this.props.throwDice(10)}} value="10"></DiceButton></View>
        </View>
        <View style={styles.column}>
          <View style={styles.buttonContainer}><DiceButton onPress={() => {this.props.throwDice(11)}} value="11"></DiceButton></View>
          <View style={styles.buttonContainer}><DiceButton onPress={() => {this.props.throwDice(12)}} value="12"></DiceButton></View>
          <View style={[styles.buttonContainer, styles.buttonContainerLastRow]}><DiceButton onPress={() => {this.props.undoDice()}} value="Undo"></DiceButton></View>
        </View>
      </View>
    );
  }
}

DiceThrower.propTypes = {
  throwDice: PropTypes.func.isRequired,
  undoDice: PropTypes.func.isRequired
};

export default DiceThrower;
