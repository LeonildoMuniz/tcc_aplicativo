import Header from "../../components/header";
import React,{useState} from "react";
import {ScrollView, Text, StyleSheet} from "react-native";
import ListaAniversariante from '../../components/aniversariante'



export default function Aniversariante(){

    return(
        <ScrollView>
            <Header/>  
            <Text style={styles.titulo}>
                Aniversariantes do Dia
            </Text>
            <ListaAniversariante/>
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