import React from 'react';
import { PropTypes } from 'prop-types';
import styles from './Game.styles.js';

import {
  View
} from 'react-native';

import { BarChart, Grid, XAxis } from 'react-native-svg-charts'

class Game extends React.Component {
  render() {
    const fill = 'rgb(134, 65, 244)';
    let data = [4,7,11,22,30,36,28,21,20,13,5];
    const axis = [2,3,4,5,6,7,8,9,10,11,12];

    setInterval(() => {
      data[0] = data[0] + 1;
    }, 1000);

    return (
      <View style={styles.game}>
        <BarChart
          style={{ height: 300 }}
          data={data}
          svg={{ fill }}
          contentInset={{ top: 50, bottom: 30 }}
        >
          <Grid />
        </BarChart>
        <XAxis
          data={axis}
          xAccessor={ ({ item }) => item }
          contentInset={{ left: 10, right: 10 }}
          svg={{ fontSize: 10, fill: 'black' }}
        />
      </View>
    );
  }
}

Game.propTypes = {
};

export default Game;
