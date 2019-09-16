import React from 'react';
import { PropTypes } from 'prop-types';
import styles from './NewGame.styles.js';

import {
  View, Text
} from 'react-native';

class NewGame extends React.Component {
  render() {
    setTimeout(() => {
      this.props.newGame();
      this.props.navigation.navigate('Current');
    }, 1000);

    return (
      <View style={styles.newGame}>
        <Text>Creating your new game...</Text>
      </View>
    );
  }
}

NewGame.propTypes = {
  newGame: PropTypes.func.isRequired
};

export default NewGame;
