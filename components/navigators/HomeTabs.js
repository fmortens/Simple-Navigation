import React from 'react';
import { TabBarBottom, TabNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import { Home, List } from '../screens';

export default TabNavigator(
  {
    Home: {
      screen: Home,
    },
    List: {
      screen: List,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
        case 'Home':
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
          break;

        case 'List':
          iconName = `ios-list${focused ? '-box' : ''}`;
          break;

        default:
          iconName = `ios-help${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons color={tintColor} name={iconName} size={32} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'darkgray',
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  },
);
