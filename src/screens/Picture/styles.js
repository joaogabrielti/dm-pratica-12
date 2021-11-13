import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    cameraActionBar: {
        flexDirection: 'row',
        marginBottom: 24,
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
    },
    cameraAction: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 64,
        height: 64,
        backgroundColor: '#FFF',
        borderRadius: 50,
    },
    modal: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(50, 50, 50, 0.9)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalAction: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
    },
    picture: {
        width: 350,
        height: 450,
        borderRadius: 20,
        marginBottom: 20,
    },
})

export default styles