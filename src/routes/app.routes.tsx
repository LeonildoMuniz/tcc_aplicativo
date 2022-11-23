import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Principal from '../pages/principal';


const Stack = createNativeStackNavigator();

function AppsRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name='Principal' component={Principal} options={{headerShown:false}}/>

        </Stack.Navigator>
    )
}

export default AppsRoutes;