import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Card} from 'react-native-elements';
import axios from 'axios';
import { FlatList } from 'react-native-gesture-handler';

import Destaque from '../destaque/Destaque';

class Cardapio extends Component {

    constructor(props) {
        super(props);
        this.state = {
            refeicoes: []
        }
    }

    static navigationOptions = {
        title: 'Bom apetite',
        headerTintColor: 'white',
        headerLeft: () => null,
        headerStyle: {
            backgroundColor: '#333333',
        },
    }

    componentDidMount() {
       axios('http://192.168.0.100:8000/api/api/refeicoes')
       .then(res => {
           this.setState({refeicoes: res.data})
       })
    }

    render() {
        return(
            <View>
                <FlatList
                    data={this.state.refeicoes}
                    renderItem={({item}) => (
                   <View>
                        <Text>{item.nm_categoria}</Text>
                        <Card>
                            <View style={styles.container}>
                                <View style={styles.detalhes}>
                                    <Text>{item.nm_refeicao}</Text>
                                    <Text>Descrição: {item.nm_descricao}</Text>
                                    <Text>Preço: {item.nu_preco}</Text>
                                </View>
                                <View>
                                    <Image style={{width:70, height:65}} source={{uri: 'http://192.168.0.100:8000/storage/foods/3SQn9fyFzMVty3hAhxgg2SoDgTJPyfiNker9MHqR.jpeg'}}/>
                                </View>
                            </View>
                        </Card>
                    </View>
                    )}
                    keyExtractor={item => item.id_refeicao}
                 />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },

    detalhes: {
        width: 270,
    }
})

export default Cardapio