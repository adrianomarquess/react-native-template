import { createStackNavigator } from 'react-navigation';
import { colors } from 'styles';

import Main from 'pages/main';

const Routes = createStackNavigator(
  {
    Main: { screen: Main }
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: colors.primary
      },
      headerTitle: 'Main',
      headerTitleStyle: {
        color: colors.white
      }
    }
  }
);

export default Routes;
