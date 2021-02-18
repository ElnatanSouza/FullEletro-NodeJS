import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgFundo: {
        justifyContent: 'center',
        alignSelf: 'center',
        width: '100%',
        height: '100%',
    },
    viewTit: {
        alignItems: 'center',
    },
    titulo: {
        color: '#F8F8FF',
        fontSize: 50,
        marginBottom: 20,
    },
    userImg: {
        marginBottom: 10,
        height: '37%',
        width: '63%',
    },
    inputs: {
        marginHorizontal: 30,
        alignItems: 'center',
    },
    input: {
        color: '#696969',
        height: 50,
        width: '110%',
        margin: 5,
        padding: 10,
        borderRadius: 20,
        backgroundColor: '#F8F8FF',
        fontSize: 20,
    },
    btn: {
        height: 50,
        width: '110%',
        margin: 10,
        alignItems: 'center',
        borderRadius: 40,
        justifyContent: 'center',
        backgroundColor: '#FF8C00',

    },
    textoBtn: {
        color: '#696969',
        alignContent: 'center',
        fontSize: 20,
    },
})

export default styles