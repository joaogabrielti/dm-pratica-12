import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    name: {
        color: '#6E5494',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 6,
    },
    detail: {
        color: '#6E5494',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 2,
    },
    button: {
        width: 180,
        marginTop: 12,
    },
    pictureContainer: {
        width: 250,
        height: 250,
        borderRadius: 250,
        borderWidth: 3,
        borderColor: '#6E5494',
        marginBottom: 32,
        justifyContent: 'center',
        alignItems: 'center',
    },
    picture: {
        width: 240,
        height: 240,
        borderRadius: 240,
    },
})

export default styles