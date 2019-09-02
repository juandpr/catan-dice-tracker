import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './src/redux/modules'
import Game from './src/components/Game';
import NewGame from './src/components/NewGame';
import History from './src/components/History';

const TabNavigator = createBottomTabNavigator(
  {
    New: NewGame,
    Current: Game,
    History: History
  },
  {
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

const store = createStore(rootReducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}
