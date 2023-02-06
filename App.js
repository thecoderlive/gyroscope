import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import Gyroscope from './Gyroscope'

const Root = createStackNavigator()

export default function App() {
return (
    <NavigationContainer>
        <Root.Navigator
            initialRouteName="Gyroscope"
            screenOptions={{
                headerMode:'screen',
                headerStyle: { backgroundColor: 'white' },
                title: null,
                cardOverlayEnabled:true,
                cartStyle:{flex:1},
                animationEnabled:true,
                gestureEnabled:true
            }}
            >
        <Root.Screen name="Gyroscope" component={Gyroscope} />
        </Root.Navigator>
    </NavigationContainer>
)}