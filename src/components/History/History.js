import React from 'react';
import { PropTypes } from 'prop-types';
import styles from './History.styles.js';

import {
  View,
  Text,
  FlatList
} from 'react-native';

class History extends React.Component {
  render() {
    const { games } = this.props;

    return (
      <View style={styles.history}>
        <FlatList
          contentContainerStyle={styles.gamesList}
          data={games}
          initialNumToRender={10}

          renderItem={({item}) =>
            <View style={styles.gameCard}>
              <View style={styles.gameCardDate}>
                <Text>{item.date}</Text>
              </View>
              <View style={styles.gameCardEdge}>
                <Text>{item.dice.length}</Text>
              </View>
            </View>
          }
          keyExtractor={item => `${item.id}`}
        >
        </FlatList>
      </View>
    );
  }
}

History.propTypes = {
  games: PropTypes.array.isRequired
};

export default History;
