import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from '~/pages/Login';
import Signup from '~/pages/Signup';
import Notifications from '~/pages/Notifications';

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    Signup,
    Notifications,
  }),
);

export default Routes;
