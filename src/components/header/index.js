import React from "react";
import { useContext } from 'react';
import {AuthContext} from '../../contexts/AuthContext'
import { View, Text } from "react-native-animatable";
import { StyleSheet, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation }  from '@react-navigation/native'


export default function header (){
    const {signOut, user} = useContext(AuthContext)
    return (
        <View style={styles.container}>

            <Text style={styles.text}>
                Bem vindo(a) {user.nome}
            </Text>


            <TouchableOpacity style={styles.button} onPress={()=> signOut()}>
                <MaterialCommunityIcons name="logout" size={24} color="gray" />
            </TouchableOpacity>

        </View>
        
    )
}

const styles = StyleSheet.create({

    container:{
        flexDirection:"row",
        justifyContent:"space-evenly",
        marginTop: 30,
        marginLeft: 15,
        marginBottom: 15,
        width: '100%',
        height: 50,


    },

    text:{
        color:'gray',
        fontSize:15,
        fontWeight:"bold",
    }


})