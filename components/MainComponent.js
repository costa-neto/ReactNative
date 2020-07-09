import React, { Component } from 'react';
import Menu from './MenuComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import Home from './HomeComponent'
import { render } from 'react-dom';
import DishDetail from './DishDetailComponent';
import {View,Platform} from 'react-native'
import {createStackNavigator} from 'react-navigation-stack'
import {createDrawerNavigator} from 'react-navigation-drawer'
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


const HomeNavigator = createStackNavigator({
    Home: {screen: Home},
}, {
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

const ContactNavigator = createStackNavigator({
    Contact: {screen: Contact},
}, {
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

const AboutNavigator = createStackNavigator({
    Contact: {screen: About},
}, {
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


const MainNavigator = createDrawerNavigator({
    Home: {
        screen:HomeNavigator,
        navigationOptions: {
            title: 'Home',
            drawerLabel: 'Home'
        }
    },
    Contact: {
        screen:ContactNavigator,
        navigationOptions: {
            title: 'Contact',
            drawerLabel: 'Contact'
        }
    },
    About: {
        screen:AboutNavigator,
        navigationOptions: {
            title: 'About',
            drawerLabel: 'About'
        }
    },
    Menu: {
        screen:MenuNavigator,
        navigationOptions: {
            title: 'Menu',
            drawerLabel: 'Menu'
        }
    }
},{
    drawerBackgroundColor: '#D1C4E9'
}
);


const Main = createAppContainer(MainNavigator);

// class Main extends Component {
//     render(){
//         return(
//             <View style={{flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : 1}}>
//                 <MainNavigator />
//             </View>
//         );
//     }
// }

export default Main;