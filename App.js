import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Reducers from './src/redux/reducers'
import Login from './src/screens/Login'
import Tabs from './src/navigation/tabs'

const store = createStore(Reducers)
const Stack = createStackNavigator()

const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Formulário">
                    <Stack.Screen name="Formulário" component={Login} options={{headerTintColor: '#FFF', headerStyle: {backgroundColor: '#6E5494'}}}/>
                    <Stack.Screen name="Tabs" component={Tabs} options={{headerShown: false}}/>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

export default App