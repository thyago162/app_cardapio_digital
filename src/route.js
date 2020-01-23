import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './components/home/Home';
import MainScreen from './components/main/Main';


const Routes = createAppContainer(
    createStackNavigator({
        Home: HomeScreen,
        Cardapio: MainScreen
    })
)

export default Routes;