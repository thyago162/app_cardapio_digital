import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './components/home/Home';
import CardapioScreen from './components/cardapio/Cardapio';

const Routes = createAppContainer(
    createStackNavigator({
        Home: HomeScreen,
        Cardapio: CardapioScreen
    })
)

export default Routes;