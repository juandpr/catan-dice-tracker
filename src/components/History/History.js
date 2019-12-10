import React from 'react';
import { PropTypes } from 'prop-types';
import styles from './History.styles.js';

import {
  View,
  Text,
  FlatList,
  TouchableOpacity
} from 'react-native';

class History extends React.Component {
  selectRow(rowId) {
    this.props.selectGame(rowId);
    this.props.navigation.navigate('Current');
  }

  render() {
    const { games } = this.props;

    return (
      <View style={styles.history}>
        <Text style={styles.historyTitle}>Past games</Text>

        <View style={styles.listTitle}>
          <Text style={styles.listTitleLeft}>Date started</Text>
          <Text style={styles.listTitleRight}>Dice thrown</Text>
        </View>

        <FlatList
          contentContainerStyle={styles.gamesList}
          data={games}
          initialNumToRender={10}

          renderItem={({item}) =>
            <TouchableOpacity onPress={() => {this.selectRow(item.id)}} style={styles.gameCard}>
              <View style={styles.gameCardDate}>
                <Text>{item.date}</Text>
              </View>
              <View style={styles.gameCardEdge}>
                <Text>{item.dice.length}</Text>
              </View>
            </TouchableOpacity>
          }
          keyExtractor={item => `${item.id}`}
        >
        </FlatList>
      </View>
    );
  }
}

History.propTypes = {
  games: PropTypes.array.isRequired,
  selectGame: PropTypes.func.isRequired
};

export default History;
