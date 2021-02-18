import React from 'react'
import {
    ImageBackground,
    Text,
    View,
    TouchableOpacity,
} from 'react-native'

import styles from './styles'
import Fundo from '../../../assets/fundo.jpg'

const Home = ({ navigation }) => {
    const logar = () => {
        navigation.navigate('Login')
    }

    return (
        <View>
            <ImageBackground source={Fundo} style={styles.imgFundo}>

                <View style={styles.textView}>
                    <Text style={styles.textMsg1}>Bem vindo(a) ao FullStack Eletro</Text>
                </View>

                <TouchableOpacity
                    onPress={logar}
                    style={styles.btn}
                >
                    <Text style={styles.btnText}>Entrar</Text>
                </TouchableOpacity>


                <View style={styles.viewMsg}>
                    <Text
                        style={styles.textMsg2}
                    >Aqui na nossa loja programadores tem descontos!
                    </Text>
                </View>
            </ImageBackground >
        </View>
    )
}

export default Home
