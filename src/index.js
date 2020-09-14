import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import Home from './Screens/Home';

const AppFlow = createStackNavigator({
    Home,
});

const Trioplaza = createStackNavigator(
    {
        Main: {
            screen: AppFlow,
        },
    },
    {
        mode: 'modal',
        headerMode: 'none',
    },
);

export default createAppContainer(Trioplaza);
