import React, { Component } from 'react';
import Menu from './MenuComponent';
import {DISHES} from '../shared/dishes.js';
import { render } from 'react-dom';
import DishDetail from './DishDetailComponent';
import {View,Platform} from 'react-native'
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import { StatusBar } from 'expo-status-bar';

const MenuNavigator = createStackNavigator({
    Menu: {screen: Menu},
    DishDetail: {screen: DishDetail}
}, {
    initialRouteName: 'Menu',
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#512DA8'
          },
        headerTintColor: '#fff',
        headerTitleStyle:{
            color: '#fff'
        }
    }
});

const Main = createAppContainer(MenuNavigator);

// class Main extends Component {
//     render(){
//         return(
//             <View style={{flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : 1}}>
//                 <MenuNavigator />
//             </View>
//         );
//     }
// }

export default Main;