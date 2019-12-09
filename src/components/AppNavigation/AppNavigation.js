import React from 'react';

import { PropTypes } from 'prop-types';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Game from '../Game';
import NewGame from '../NewGame';
import History from '../History';
import { loadState } from '../../redux/store';

const TabNavigator = createBottomTabNavigator(
  {
    New: NewGame,
    Current: Game,
    History: History
  },
  {
    initialRouteName: 'History',
    defaultNavigationOptions: ({ navigation }) => {
      return {
        tabBarIcon: ({ tintColor }) => {
          const route = navigation.state.routeName;

          const name = {
            'New': 'plus',
            'Current': 'cube',
            'History': 'list'
          }[route];

          return <Icon name={name} color={tintColor} size={22} />
        },
        tabBarOptions: {
          activeBackgroundColor: '#E6F0FA'
        }
      }
    }
  }
)

const Navigation = createAppContainer(TabNavigator);

class AppNavigation extends React.Component {
  componentDidMount() {
    loadState().then((data) => {
      if (data && data.game) {
        this.props.setGames(data.game);  
      }
    });
  }

  render() {
    return (
      <Navigation />
    );
  }
}

AppNavigation.propTypes = {
  setGames: PropTypes.func.isRequired,
};

export default AppNavigation;