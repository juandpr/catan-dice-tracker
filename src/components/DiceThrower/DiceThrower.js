import React from 'react';
import { PropTypes } from 'prop-types';
import styles from './DiceThrower.styles.js';

import {
  View, Button
} from 'react-native';

class DiceThrower extends React.Component {
  render() {
    return (
      <View style={styles.diceThrower}>
        <View style={styles.column}>
          <View style={styles.buttonContainer}><Button onPress={() => {this.props.throwDice(2)}} title="2"></Button></View>
          <View style={styles.buttonContainer}><Button onPress={() => {this.props.throwDice(3)}} title="3"></Button></View>
          <View style={styles.buttonContainer}><Button onPress={() => {this.props.throwDice(4)}} title="4"></Button></View>
        </View>
        <View style={styles.column}>
          <View style={styles.buttonContainer}><Button onPress={() => {this.props.throwDice(5)}} title="5"></Button></View>
          <View style={styles.buttonContainer}><Button onPress={() => {this.props.throwDice(6)}} title="6"></Button></View>
          <View style={styles.buttonContainer}><Button onPress={() => {this.props.throwDice(7)}} title="7"></Button></View>
        </View>
        <View style={styles.column}>
          <View style={styles.buttonContainer}><Button onPress={() => {this.props.throwDice(8)}} title="8"></Button></View>
          <View style={styles.buttonContainer}><Button onPress={() => {this.props.throwDice(9)}} title="9"></Button></View>
          <View style={styles.buttonContainer}><Button onPress={() => {this.props.throwDice(10)}} title="10"></Button></View>
        </View>
        <View style={styles.column}>
          <View style={styles.buttonContainer}><Button onPress={() => {this.props.throwDice(11)}} title="11"></Button></View>
          <View style={styles.buttonContainer}><Button onPress={() => {this.props.throwDice(12)}} title="12"></Button></View>
          <View style={styles.buttonContainer}><Button onPress={() => {this.props.undoDice()}} title="Undo"></Button></View>
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
