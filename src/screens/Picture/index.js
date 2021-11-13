import React, { useState } from 'react'
import { View, StatusBar, TouchableOpacity, Modal, Image } from 'react-native'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { RNCamera } from 'react-native-camera'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './styles'

const Picture = () => {
    const [picture, setPicture] = useState(null)
    const [isPictureTaken, setIsPictureTaken] = useState(false)
    const [isFrontCamera, setIsFrontCamera] = useState(false)
    const switchCamera = () => setIsFrontCamera(!isFrontCamera)

    const dispatch = useDispatch()
    const navigation = useNavigation()

    const takePicture = async (camera) => {
        const data = await camera.takePictureAsync({quality: 1, base64: true})
        setPicture(data.uri)
        setIsPictureTaken(true)
    }

    const cancel = () => {
        setIsPictureTaken(false)
    }

    const save = () => {
        dispatch({type: 'updateFoto', payload: picture})
        setIsPictureTaken(false)
        navigation.navigate('Perfil')
    }

    return (
        <View style={styles.container}>
            <StatusBar hidden={true}/>
            <RNCamera style={styles.preview}
                type={(isFrontCamera) ? RNCamera.Constants.Type.front : RNCamera.Constants.Type.back}
                flashMode={RNCamera.Constants.FlashMode.auto}
                captureAudio={false}
                androidCameraPermissionOptions={{
                    title: 'Solicitando Permissão - Camera',
                    message: 'Este aplicativo deseja utilizar sua camera.',
                    buttonPositive: 'Confirmar',
                    buttonNegative: 'Cancelar',
                }}
            >
                {
                    ({ camera, status, recordAndroidPermissionStatus }) => {
                        return (status !== 'READY') ? <View/> : (
                            <View style={styles.cameraActionBar}>
                                <TouchableOpacity style={[styles.cameraAction, {width: 48, height: 48}]}>
                                    <Icon name="image-album" color="#000" size={32}/>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.cameraAction} onPress={() => takePicture(camera)}>
                                    <Icon name="camera" color="#000" size={38}/>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.cameraAction, {width: 48, height: 48}]} onPress={switchCamera}>
                                    <Icon name="camera-switch" color="#000" size={32}/>
                                </TouchableOpacity>
                            </View>
                        )
                    }
                }
            </RNCamera>
            { picture &&
                <Modal animationType="fade" transparent={true} visible={isPictureTaken}>
                    <View style={styles.modal}>
                        <Image source={{uri: picture}} style={styles.picture} resizeMode="contain"/>
                        <View style={styles.modalAction}>
                            <Icon.Button name="close-thick" backgroundColor="#DC3545" onPress={cancel}>Cancelar</Icon.Button>
                            <Icon.Button name="check-bold" backgroundColor="#198754" onPress={save}>Usar Foto</Icon.Button>
                        </View>
                    </View>
                </Modal>
            }
        </View>
    )
}

export default Picture