import React, {Component} from 'react';
import { SafeAreaView,View, FlatList, Text} from 'react-native';
import {Card} from 'react-native-elements';
import { ListItem } from 'react-native-elements';
import {connect} from 'react-redux';
import {baseUrl} from '../shared/baseUrl';


const mapStateToProps = state => {
    return {
        leaders: state.leaders
    }
}

function History(props) {
    return(
        <Card title="Our History">
             <Text>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</Text>
             <Text>The restaurant traces its humble beginnings to The Frying Pan, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</Text>
        </Card>
    );
}



class About extends Component{

    
    static navigationOptions= {
        title: 'About Us',
        headerStyle: {
            backgroundColor: '#512DA8'
          }
        
    };

    
    render(){
        const renderOurLeadership =  ({item, index}) =>{
            return(
                <ListItem 
                    key={index}
                    title={item.name}
                    titleStyle={{  fontWeight: 'bold' }}
                    subtitle={item.description}
                    hideChevron={true}
                    leftAvatar={{source: {uri: baseUrl + item.image}}}
                />
            );
        }
        return(
            <SafeAreaView style={{flex: 1}}>
                
                <History />
                
                <Card title="Corporate Leadership">
                
                <FlatList 
                    data={this.props.leaders.leaders}
                    keyExtractor={item => item.id.toString()} 
                    renderItem={renderOurLeadership}
                    />
                
                </Card>
            </SafeAreaView>
        );
    }
}

export default connect(mapStateToProps)(About);