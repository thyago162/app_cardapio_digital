import React, {Component} from 'react';
import {View,Text, Button, StyleSheet, Picker, Image} from 'react-native';

export default class HomeScreen extends Component {

    static navigationOptions = {
        title: 'Cardápio digital',
        headerTintColor: 'white',
        headerStyle: {
            backgroundColor: '#333333',
        },
    }

    render() {
        const {navigate} = this.props.navigation
        return(
            <View style={styles.container}>
                <View style={styles.logo}>
                    <Image source={require('../../assets/images/logo.png')} style={styles.logo_image}/>
                </View>

                <View style={styles.table}>
                    <Picker>
                        <Picker.Item  label="Escolha a mesa" value=''/>
                        <Picker.Item label="Mesa 01" value='1'/>
                    </Picker>
                </View>

                <View style={styles.btn_comanda}>
                    <Button title="Gerar comanda" onPress={() => navigate('About')} color="#FF7F00"/>
                </View>
                

                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column'
    },

    logo: {
        alignContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        height: 250,
    },

    logo_image: {
        marginTop: 30,
        width: 300,
        height: 210
    },

    table: {
        borderColor: 'gray',
        borderWidth: 1,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 60
    },

    btn_comanda: {
        marginLeft: 15,
        marginRight: 15,
        marginTop: 30,
    }

})