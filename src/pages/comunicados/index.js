
import React from 'react';
import Header from "../../components/header";
import ListaMensagens from "../../components/comunicados";
import {ScrollView, StyleSheet, Text} from 'react-native';


export default function Comunidados(){


    return(
        <ScrollView >
            <Header/>
            <Text style={styles.titulo}>
                Comunicados da Empresa
            </Text>
            <ListaMensagens/>
        </ScrollView>
        
    );
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