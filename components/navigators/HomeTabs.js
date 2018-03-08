import React from 'react';
import {
  TabBarBottom,
  TabNavigator
} from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import {
  Home,
  List
} from '../screens';
import PropTypes from 'prop-types';

export default TabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: () => ({
        tabBarIcon: ScreenTabBarIcon
      }),
    },
    List: {
      screen: List,
      navigationOptions: () => ({
        tabBarIcon: ListTabBarIcon
      }),
    },
  },
  {
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'darkgray',
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);

function ScreenTabBarIcon({
  focused,
  tintColor,
}) {
  const iconName = `ios-information-circle${focused ? '' : '-outline'}`;
  return getIconByTab(tintColor, iconName);
}

function ListTabBarIcon({
  focused,
  tintColor,
}) {
  const iconName = `ios-list${focused ? '-box' : ''}`;
  return getIconByTab(tintColor, iconName);
}

function getIconByTab(tintColor, iconName) {
  // You can return any component that you like here! We usually use an
  // icon component from react-native-vector-icons
  return <Ionicons color={tintColor} name={iconName} size={32} />;
}

ScreenTabBarIcon.propTypes = {
  focused: PropTypes.bool.isRequired,
  tintColor: PropTypes.string.isRequired,
};

ListTabBarIcon.propTypes = {
  focused: PropTypes.bool.isRequired,
  tintColor: PropTypes.string.isRequired,
};
