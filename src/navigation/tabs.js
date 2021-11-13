import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Profile from '../screens/Profile'
import Picture from '../screens/Picture'

const icons = {
    Perfil: {
        name: 'account',
    },
    Foto: {
        name: 'camera',
    },
}

const Tab = createBottomTabNavigator()

const Tabs = ({route}) => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    const { name } = icons[route.name];
                    return <Icon name={name} color={color} size={size} />
                },
                tabBarActiveTintColor: '#FFF',
                tabBarInactiveTintColor: '#6E5494',
                tabBarActiveBackgroundColor: '#6E5494',
                tabBarStyle: [
                    {
                        display: 'flex',
                    },
                    null,
                ],
            })}
        >
            <Tab.Screen name="Perfil" component={Profile}/>
            <Tab.Screen name="Foto" component={Picture} options={{headerShown: false}}/>
        </Tab.Navigator>
    )
}

export default Tabs