import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Card} from 'react-native-elements';
import axios from 'axios';
import { FlatList } from 'react-native-gesture-handler';

class Cardapio extends Component {

    constructor() {
        super();
        this.state = {
            refeicoes: []
        }
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
                <Text>Aqui vai ser o cardapio</Text>
                <FlatList
                    data={this.state.refeicoes}
                    renderItem={({item}) => (
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