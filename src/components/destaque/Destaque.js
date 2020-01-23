import React, {Component} from 'react';
import {StyleSheet, View, ScrollView, Dimensions, Image, Text} from 'react-native';
import axios from 'axios'

const DEVICE_WIDTH = Dimensions.get("window").width;

class Destaque extends Component {

    scrollRef = React.createRef();

    constructor(props) {
        super(props);

        this.state = {
            selectedIndex: 0,
            destaques: [
                {image:require('../../assets/images/destaques/frango.png')},
                {image:require('../../assets/images/destaques/picanha.png')}
            ]
        }
    }


    render() {
        
        return(
           <View style={{width:DEVICE_WIDTH}}>
               <ScrollView horizontal >
                 {this.state.destaques.map(destaque =>(
                    <Image key={destaque} source={destaque.image} style={{width: DEVICE_WIDTH, height: 170}} />
                 ))}
               </ScrollView>
           </View>
        )
    }
}

const styles = StyleSheet.create({

})

export default Destaque