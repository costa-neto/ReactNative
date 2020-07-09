import React, {Component} from 'react';
import { Text, View, FlatList} from 'react-native';
import {Card} from 'react-native-elements';
import { ListItem } from 'react-native-elements';
import {LEADERS} from '../shared/leaders'

// function History(props) {
//     const item=props.item;
//     return(
//         <ListItem 
//             title={item.name}
//             subtitle={item.description}
//             hideChevron={true}
//             leftAvatar={{source: require('./images/alberto.png')}}
//         />
//     );
// }






class About extends Component{

    constructor(props){
        super(props);
        this.state={
            leaders:LEADERS
        }
    }
    static navigationOptions= {
        title: 'About Us',
        headerStyle: {
            backgroundColor: '#512DA8'
          }
        
    };

    
    render(){
        const History =  ({item, index}) =>{
            return(
                <ListItem 
                    key={index}
                    title={item.name}
                    titleStyle={{  fontWeight: 'bold' }}
                    subtitle={item.description}
                    hideChevron={true}
                    leftAvatar={{source: require('./images/alberto.png')}}
                />
            );
        }
        return(
            <Card
                title='Corporate Leadership'
            >
                <FlatList 
                data={this.state.leaders}
                renderItem={History}
                keyExtractor={item => item.id.toString()} 
                />
            </Card>
        );
    }
}

export default About;