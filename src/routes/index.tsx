import React, { useContext } from 'react';

import { View } from 'react-native-animatable';

import { ActivityIndicator, Text } from 'react-native'

import AppRoutes from '../routes/app.routes';

import AuthRoutes from '../routes/auth.routes';
import {AuthContext} from '../contexts/AuthContext'

function Routes(){
    const {estaAutenticado, loading} = useContext(AuthContext);

    if(loading){
        return(
            <View style={{
                flex: 1,
                backgroundColor:'#0caeae',
                justifyContent: 'center',
                alignItems: 'center',
    
            }}>  
                <ActivityIndicator size={60} color="white"/>
            </View>
        )

    }
    return(
        estaAutenticado ? <AppRoutes/> : <AuthRoutes/>
    )

}

export default Routes