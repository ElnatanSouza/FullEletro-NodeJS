import React from 'react'
import {
    ImageBackground,
    View,
    TextInput,
    TouchableOpacity,
    Text,
    Alert,
    Image,
} from 'react-native'
import { StatusBar } from 'expo-status-bar'


import styles from './styles'
import Fundo from '../../../assets/fundo.jpg'
import imgUser from '../../../assets/userImg.png'

const userApi = {
    id: 1,
    username: 'Teste',
    password: '1234567',
}

const Login = ({ navigation }) => {
    const [user, setUser] = React.useState('');
    const [password, setPassword] = React.useState('');

    const autentication = () => {
        if (userApi.username === user && userApi.password === password) {
            navigation.navigate('Produtos')
        } else {
            Alert.alert("Algo errado!", "Tente novamente. . .")
        }

        setUser('')
        setPassword('')
    }

    const back = () => {
        navigation.navigate('Home')
    }

    return (
        <View style={styles.container}>
            <StatusBar style='inverted' />
            <ImageBackground source={Fundo} style={styles.imgFundo}>
                <View style={styles.viewTit}>
                    <Text
                        style={styles.titulo}
                    >
                        Welcome!
                    </Text>

                </View>

                <View style={styles.inputs}>
                    <Image
                        source={imgUser}
                        style={styles.userImg}
                    />
                    <TextInput
                        placeholder='Username'
                        style={styles.input}
                        value={user}
                        onChangeText={(text) => setUser(text)}
                    />            
                
                    <TextInput
                        placeholder="Password"
                        style={styles.input}
                        secureTextEntry={true}
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />
                    
    
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={autentication}
                    >
                        <Text style={styles.textoBtn}>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.btn}
                        onPress={back}
                    >
                        <Text style={styles.textoBtn}>Voltar</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Login
