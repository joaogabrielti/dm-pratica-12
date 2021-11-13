import React from 'react'
import { View, TextInput, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'

const Login = () => {
    const profile = useSelector(state => state.profile)
    const dispatch = useDispatch()
    const navigation = useNavigation()

    const navigate = () => {
        navigation.navigate('Tabs')
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.textInput} placeholder="nome completo" keyboardType="default" value={profile.nome} onChangeText={(text) => dispatch({type: 'updateNome', payload: text})}/>
            <TextInput style={styles.textInput} placeholder="telefone" keyboardType="phone-pad" value={profile.telefone} onChangeText={(text) => dispatch({type: 'updateTelefone', payload: text})}/>
            <TextInput style={styles.textInput} placeholder="email" keyboardType="email-address" value={profile.email} onChangeText={(text) => dispatch({type: 'updateEmail', payload: text})}/>
            <View style={styles.button}>
                <Button title="Confirmar" color="#6E5494" onPress={navigate}/>
            </View>
        </View>
    )
}

export default Login