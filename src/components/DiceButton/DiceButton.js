import React from 'react';
import { PropTypes } from 'prop-types';
import styles from './DiceButton.styles.js';

import {
  TouchableOpacity,
  Text
} from 'react-native';

class DiceButton extends React.Component {
  render() {
    const { value, onPress } = this.props
    return (
      <TouchableOpacity style={styles.diceButton} onPress={onPress}>
        <Text style={styles.diceButtonText}>{value}</Text>
      </TouchableOpacity>
    );
  }
}

DiceButton.propTypes = {
  value: PropTypes.any.isRequired,
  onPress: PropTypes.func.isRequired
};

export default DiceButton;
