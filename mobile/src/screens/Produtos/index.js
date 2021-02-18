import React from 'react'
import { ImageBackground, ScrollView, Text, TouchableOpacity, View, } from 'react-native'
import { Card } from 'react-native-elements'

import styles from './styles'
import Fundo from '../../../assets/fundo.jpg'

import Lista from './produtos'

const Produtos = ({ navigation }) => {
    const back = () => {
        navigation.navigate('Home')
    }

    return (
        <View style={styles.container}>

            <ImageBackground source={Fundo} style={styles.imgFundo}>
                <TouchableOpacity
                    onPress={back}
                    style={styles.btn}
                >
                    <Text style={styles.btnText}>Home</Text>
                </TouchableOpacity>

                <ScrollView>
                    <View>
                        {Lista.map((produto, id) => {
                            return (
                                <Card
                                    key={id}
                                >
                                    <Card.Title style={styles.cardTit}>Oferta</Card.Title>
                                    <Card.Divider />
                                    <Text style={styles.textCard}>
                                        {produto.descricao}
                                    </Text>
                                    <Card.Image
                                        source={produto.avatar}
                                        style={styles.prodImg}
                                    ></Card.Image>
                                    <Text style={styles.textCard}>
                                        {produto.valor}
                                    </Text>

                                </Card>
                            )
                        })}

                    </View>
                </ScrollView>
            </ImageBackground >
        </View>

    )
}

export default Produtos
