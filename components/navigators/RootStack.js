import { StackNavigator } from 'react-navigation';
import HomeTabs from './HomeTabs';
import { Settings } from '../screens';

const RootStack = StackNavigator(
  {
    Main: { screen: HomeTabs },
    Settings: { screen: Settings },
  },
  { initialRouteName: 'Main' }
);

export default RootStack;
