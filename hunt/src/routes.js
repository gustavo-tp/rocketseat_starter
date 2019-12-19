import { createStackNavigator } from 'react-navigation';

import Main from './pages/main';
import Product from './pages/product';

export default createStackNavigator({
    Main,
    Product
}, {
    navigationOptions: {
        headerTitleStyle: {
            textAlign: 'center',
            flexGrow: 1,
            alignSelf: 'center'
        },
        headerStyle: {
            textAlign: 'center',
            backgroundColor: "#DA552F",
        },
        headerTintColor: "#FFF"
    }
});