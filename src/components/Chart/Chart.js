import React from 'react';
import { PropTypes } from 'prop-types';
import styles from './Chart.styles.js';

import {
  View
} from 'react-native';

import { BarChart, Grid, XAxis } from 'react-native-svg-charts'

class Chart extends React.Component {
  
  /**
   * Returns the data formatted to be used by the chart
   * @return array
   */
  getChartData() {
    const { dice } = this.props;
    let data = [
      {
        diceValue: 2,
        amount: 0
      },
      {
        diceValue: 3,
        amount: 0
      },
      {
        diceValue: 4,
        amount: 0
      },
      {
        diceValue: 5,
        amount: 0
      },
      {
        diceValue: 6,
        amount: 0
      },
      {
        diceValue: 7,
        amount: 0
      },
      {
        diceValue: 8,
        amount: 0
      },
      {
        diceValue: 9,
        amount: 0
      },
      {
        diceValue: 10,
        amount: 0
      },
      {
        diceValue: 11,
        amount: 0
      },
      {
        diceValue: 12,
        amount: 0
      }
    ];

    for (diceEntry of dice) {
      const foundIndex = data.findIndex(item => item.diceValue === diceEntry);
      if (foundIndex >= 0) {
        data[foundIndex].amount++;
      }
    }

    return data;
  }

  render() {
    const fill = '#C32227';
    let data = this.getChartData();

    return (
      <View style={styles.chart}>
        <BarChart
          style={{ height: 250 }}
          data={data}
          svg={{ fill }}
          yAccessor={ ({ item }) => item.amount }
          xAccessor={ ({ item }) => item.diceValue }
          contentInset={{ top: 0, bottom: 10 }}
        >
          <Grid />
        </BarChart>
        <XAxis
          data={data}
          xAccessor={ ({ item }) => item.diceValue }
          contentInset={{ left: 10, right: 10, top: 10 }}
          svg={{ fontSize: 10, fill: 'black' }}
        />
      </View>
    );
  }
}

Chart.propTypes = {
  dice: PropTypes.array.isRequired,
};

export default Chart;
