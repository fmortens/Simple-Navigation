import { StackNavigator } from 'react-navigation';
import HomeTabs from './HomeTabs';
import { Settings } from '../screens';

const RootStack = StackNavigator(
  {
    Main: {
      screen: HomeTabs,
      navigationOptions: {
        headerTitle: 'Home',
        headerTintColor: '#000',
        headerStyle: {
          backgroundColor: '#eee',
        },
        headerTitleStyle: {
          fontSize: 30
        }
      }
    },
    Settings: {
      screen: Settings,
      navigationOptions: {
        headerTitle: 'Settings',
        headerTintColor: '#000',
        headerStyle: {
          backgroundColor: '#eee',
        },
        headerTitleStyle: {
          fontSize: 30
        }
      }
    },
  },
  {
    initialRouteName: 'Main',
    headerMode: 'screen'
  }
);

export default RootStack;
