import React, { Component } from 'react';
import Menu from './MenuComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import Home from './HomeComponent'
import { render } from 'react-dom';
import DishDetail from './DishDetailComponent';
import Reservation from './ReservationComponent';
import {View,Platform, Image, StyleSheet, ScrollView, Text} from 'react-native'
import {createStackNavigator} from 'react-navigation-stack'
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer'
import {createAppContainer, SafeAreaView} from 'react-navigation'
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import { StatusBar } from 'expo-status-bar';
import {Icon} from 'react-native-elements'
import {connect} from 'react-redux';
import {baseUrl} from '../shared/baseUrl'
import {fetchDishes, fetchComments, fetchPromos, fetchLeaders} from '../redux/ActionCreators';


const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => ({
    fetchDishes: () => dispatch(fetchDishes()),
    fetchComments: () => dispatch(fetchComments()),
    fetchPromos: () => dispatch(fetchPromos()),
    fetchLeaders: () => dispatch(fetchLeaders())
});


//define as navegações em pilha de cada página

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

const ReservationNavigator = createStackNavigator({
    Reservation: {screen: Reservation, 
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

//define um Component customizado para adicinar logo e titulo ao menu lateral

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


//define o navegador principal, adicionando as páginas que são apresentadas no menu principal

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
    Reservation: {
        screen:ReservationNavigator,
        navigationOptions: {
            title: 'Reserve Table',
            drawerLabel: 'Reserve Table',
            drawerIcon: ({tintColor}) => (
                <Icon name='cutlery'
                    type='font-awesome'
                    size={24}
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

//cria um container com o Navegador Principal
const MainNav = createAppContainer(MainNavigator);

class Main extends Component {
    componentDidMount(){
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
        this.props.fetchLeaders();
    }
    render(){
        return(
            <View style={{flex: 1}}>
                <MainNav />
            </View>
        );
    }
}


//define uma palheta de estilos que são usados no component customizado

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

export default connect(mapStateToProps,mapDispatchToProps)(Main);