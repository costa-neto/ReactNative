import React, { Component } from 'react';
import Menu from './MenuComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import Home from './HomeComponent'
import { render } from 'react-dom';
import DishDetail from './DishDetailComponent';
import {View,Platform, Image, StyleSheet, ScrollView, Text} from 'react-native'
import {createStackNavigator} from 'react-navigation-stack'
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer'
import {createAppContainer, SafeAreaView} from 'react-navigation'
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import { StatusBar } from 'expo-status-bar';
import {Icon} from 'react-native-elements'

const MenuNavigator = createStackNavigator({
    Menu: {screen: Menu,
            navigationOptions: ({navigation}) => ({
                headerLeft: ()=><Icon name='menu' size={24} 
                                color='white'
                                onPress={() => navigation.toggleDrawer()}
                                />
            })},
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
    Home: {screen: Home, navigationOptions: ({navigation}) => ({
        headerLeft: ()=><Icon name='menu' size={24} 
                        color='white'
                        onPress={() => navigation.toggleDrawer()}
                        />
    })},
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#512DA8'
          },
        headerTintColor: '#fff',
        headerTitleStyle:{
            color: '#fff'
        },
       
    }
});

const ContactNavigator = createStackNavigator({
    Contact: {screen: Contact, 
        navigationOptions: ({navigation}) => ({
            headerLeft: ()=> <Icon name='menu' size={24} 
                            color='white'
                            onPress={() => navigation.toggleDrawer()}
                            />
        })},
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#512DA8'
          },
        headerTintColor: '#fff',
        headerTitleStyle:{
            color: '#fff'
        },
        
    }
});

const AboutNavigator = createStackNavigator({
    Contact: {screen: About,
        navigationOptions: ({navigation}) => ({
            headerLeft: ()=><Icon name='menu' size={24} 
                            color='white'
                            onPress={() => navigation.toggleDrawer()}
                            />
        })},
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#512DA8'
          },
        headerTintColor: '#fff',
        headerTitleStyle:{
            color: '#fff'
        },

    }
});

const CustomDrawerContentComponent = (props) => (
    <ScrollView>
        <SafeAreaView style = {styles.container}
                    forceInset={{top: 'always', horizontal: 'never'}}>
                <View style={styles.drawerHeader}>
                    <View style={{flex: 1}}>
                        <Image source={require('./images/logo.png')}
                                style={styles.drawerImage} />
                    </View>
                    <View style={{flex:2}}>
                        <Text style={styles.drawerHeaderText}>Ristorante Con Fusion</Text>
                    </View>
                </View>
                <DrawerItems {...props} />
        </SafeAreaView>
    </ScrollView>
);


const MainNavigator = createDrawerNavigator({
    Home: {
        screen:HomeNavigator,
        navigationOptions: ({navigation}) => ({
            title: 'Home',
            drawerLabel: 'Home',
            drawerIcon: ({tintColor}) => (
                <Icon name='home'
                    type='font-awesome'
                    size={24}
                    color={tintColor}
                    />
            )
        }
        )},
    Contact: {
        screen:ContactNavigator,
        navigationOptions: {
            title: 'Contact',
            drawerLabel: 'Contact',
            drawerIcon: ({tintColor}) => (
                <Icon name='address-card'
                    type='font-awesome'
                    size={22}
                    color={tintColor}
                    />
            )
        }
    },
    About: {
        screen:AboutNavigator,
        navigationOptions: {
            title: 'About',
            drawerLabel: 'About',
            drawerIcon: ({tintColor}) => (
                <Icon name='info-circle'
                    type='font-awesome'
                    size={24}
                    color={tintColor}
                    />
            )
        }
    },
    Menu: {
        screen:MenuNavigator,
        navigationOptions: {
            title: 'Menu',
            drawerLabel: 'Menu',
            drawerIcon: ({tintColor}) => (
                <Icon name='list'
                    type='font-awesome'
                    size={24}
                    color={tintColor}
                    />
            )
        }
    }
},{
    drawerBackgroundColor: '#D1C4E9',
    contentComponent: CustomDrawerContentComponent
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

const styles=StyleSheet.create({
    container:{
        flex: 1
    },
    drawerHeader: {
        backgroundColor: "#512DA8",
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color:'white',
        fontSize: 24,
        fontWeight: 'bold'
    },
    drawerImage:{
        margin: 10,
        width: 80,
        height:60
    }

        
})

export default Main;