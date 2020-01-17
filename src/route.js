import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './components/home/Home';
import AboutScreen from './components/sobre/Sobre';

const Routes = createAppContainer(
    createStackNavigator({
        Home: HomeScreen,
        About: AboutScreen
    })
)

export default Routes;