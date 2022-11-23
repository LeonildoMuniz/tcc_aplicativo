import Header from "../../components/header";
import Conversa from "../../components/chat";
import {ScrollView, Text, StyleSheet} from 'react-native'
import React from "react";






export default function Chat(){

    return(
        

        <ScrollView style={{flex:1, marginBottom: 100}}>
            <Header/>
            <Text style={styles.titulo}>
                Comunicados do Gestor
            </Text>
            <Conversa/>
        </ScrollView>

  
    )
}

const styles = StyleSheet.create({
    titulo:{
        textAlign: 'center',
        color: '#0caeae',
        fontWeight: 'bold',
        fontSize: 16,
        paddingBottom: 15,
    }
})