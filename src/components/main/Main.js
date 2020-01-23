import React, {Component} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';

import Destaque from '../destaque/Destaque';
import Cardapio from '../cardapio/Cardapio';

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            categorias: []
        }
    }

    componentDidMount() {
        axios('http://192.168.0.100:8000/api/api/categorias')
        .then(res => {
            this.setState({categorias: res.data})
        })

    }

    render() {
        return(
            <View>
                <Destaque />
                <Cardapio categorias={this.state.categorias}/>
            </View>
        )
    }
}

export default Main;