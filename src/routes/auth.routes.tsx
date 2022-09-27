import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BemVindo from '../pages/bemVindo';
import Login from '../pages/login';

const Stack = createNativeStackNavigator();

function AuthRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name='BemVindo' component={BemVindo} options={{headerShown:false}}/>
            <Stack.Screen name='Login' component={Login} options={{headerShown:false}} />
        </Stack.Navigator>
    )
}

export default AuthRoutes;