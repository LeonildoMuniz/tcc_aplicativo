import  React, { useEffect, useState } from 'react'
import { StyleSheet, View, Image, Dimensions} from 'react-native'
import Autor from '../autorComunicado'
import {api} from '../../services/api'
import AsyncStorage from '@react-native-async-storage/async-storage'


type UserProps = {
    id: string;
    nome: string;
    estrutura: string;
    token: string;
}

type atualizarProps = {
    atualizar: string;
}


export default function ListaMensagens({atualizar}: atualizarProps) {
    
    const [mensagens, setMensagens] = useState([])
    
    const [user, setUser] = useState({
        id:'',
        nome: '',
        estrutura: '',
        token: '',
    })

    useEffect(()=>{
        async function getUSER() {
            const userInfo = await AsyncStorage.getItem('@token')
            let hasUser: UserProps = JSON.parse(userInfo || '{}');

                setUser({
                    id: hasUser.id,
                    nome: hasUser.nome,
                    estrutura: hasUser.estrutura,
                    token: hasUser.token,
                })
            
        }
     
            getUSER();
        
    },[])
    
     
    async function atualizarComunicado() {
        api.get('/mensagem3').then(response=>{
            setMensagens(response.data)
        }).catch(error=>{
                    console.error(error)
        })
    }

    atualizarComunicado()

    
    return(
        <>   
            {mensagens.map((item, index)=>{
               return(
                <View style={styles.container} key={index}>
                    
                    <Autor nickname={item.colaborador.nome} mensagem={item.mensagem} data={item.data_envio}/>
                    <Image source={{uri:'http://192.168.1.11:3333/files/'+item.anexo}}  style={styles.image}/>
                </View>
               )
            })}

        </>

    )
    
}


const styles = StyleSheet.create({
    container:{
        flex: 1,

    },
    image:{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * 3/4,
        resizeMode: 'contain',
    },
})


