import React, {useContext, useState} from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, ActivityIndicator } from "react-native";
import *as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

import {AuthContext} from '../../contexts/AuthContext.tsx'



export default function Login(){

    const {Logar,loadingAuth} = useContext(AuthContext)

    const [matricula, setMatricula] = useState('');
    const [senha, setSenha] = useState('');

    async function handleLogin(){
        if(matricula==='' || senha===''){
            alert('Preencha todos os campos para processeguir!');
            return;
        }

        await Logar({matricula,senha})
    }

    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Bem-Vindo(a)!</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.inputText}>Matricula</Text>
                <TextInput
                    placeholder="Digita sua matricula"
                    style={styles.input}
                    value={matricula}
                    onChangeText={setMatricula}
                />
                <Text style={styles.inputText}>Senha</Text>
                <TextInput
                    placeholder="Digita sua senha"
                    secureTextEntry={true}
                    style={styles.input}
                    value={senha}
                    onChangeText={setSenha}
                />

                <TouchableOpacity 
                    style={styles.button}
                    onPress={handleLogin}
                >
                    {loadingAuth ? (
                        <ActivityIndicator size={25} color="white"/>
                    ):(
                        <Text style={styles.buttonText}>Acessar</Text>
                    )}
                    
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonPr}>
                    <Text style={styles.buttonTextPr}>Primeiro Acesso</Text>
                </TouchableOpacity>

            </Animatable.View>
        </View>
    );

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#0caeae',
    },
    containerHeader:{
        marginTop:'14%',
        marginBottom:'8%',
        paddingStart: '5%',
    },
    message:{
        fontSize:28,
        fontWeight: "bold",
        color:'#fff'
    },
    containerForm:{
        backgroundColor:'#fff',
        flex: 1,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    inputText:{
        fontSize: 20,
        marginTop:28,
    },
    input:{
        borderBottomWidth:1,
        marginBottom:12,
        height: 40,
        fontSize:16,

    },
    button:{
        backgroundColor:'#0caeae',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText:{
        color: '#fff',
        fontSize:18,
        fontWeight: "bold"
    },
    buttonPr:{
        marginTop: 14,
        alignSelf:"center"
    },
    buttonTextPr:{
        color:'#a1a1a1'
    }
})