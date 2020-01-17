import React, {Component} from 'react';
import {View,Text, Button} from 'react-native';

export default class HomeScreen extends Component {

    static navigationOptions = {
        title: 'Bem vindo'
    }

    render() {
        const {navigate} = this.props.navigation
        return(
            <View>
                <Text>This is my home</Text>
                <Button title="Vamos navegar" onPress={() => navigate('About')}/>
            </View>
        )
    }
}