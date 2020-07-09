import React, { Component } from 'react';
import Menu from './MenuComponent';
import {DISHES} from '../shared/dishes.js';
import { render } from 'react-dom';
import DishDetail from './DishDetailComponent';
import {View} from 'react-native'

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            dishes : DISHES,
            selectedDish: null
        }
    }
    render(){
        return(
            <View>
                <Menu dishes={this.state.dishes} 
                onPress={(dishId) => this.onDishSelect(dishId)} />
                <DishDetail dish={this.state.dishes.filter((dish)=> dish.id === this.state.selectedDish)[0]}/>
            </View>
        );
    }
    onDishSelect(dishId){
        this.setState({selectedDish:dishId});
    }
}

export default Main;