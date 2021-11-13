import React from 'react'
import { View, Text, Button, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './styles'

const Profile = () => {
    const profile = useSelector(state => state.profile)
    const navigation = useNavigation()

    const navigate = () => {
        navigation.navigate('Formulário')
    }

    return (
        <View style={styles.container}>
            <View style={styles.pictureContainer}>
                { profile.foto &&
                    <Image source={{uri: profile.foto}} style={styles.picture} resizeMode="cover"/>
                }
                { !profile.foto &&
                    <Icon name="account" color="#6E5494" size={128}/>
                }
            </View>
            <Text style={styles.name}>{profile.nome}</Text>
            <Text style={styles.detail}>{profile.telefone}</Text>
            <Text style={styles.detail}>{profile.email}</Text>
            <View style={styles.button}>
                <Button title="Voltar" color="#6E5494" onPress={navigate}/>
            </View>
        </View>
    )
}

export default Profile