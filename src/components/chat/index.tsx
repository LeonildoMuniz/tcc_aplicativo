
import React, {useState, useEffect} from "react";
import {Button, DevSettings, RefreshControl, ScrollView, View} from 'react-native'
import Autor from '../autorChat'
import {api}  from '../../services/api'
import AsyncStorage from "@react-native-async-storage/async-storage";



type UserProps = {
    id: string;
    nome: string;
    estrutura: string;
    token: string;
}


export default function Chat(){

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
    

        async function getChat() {
            api.get('/mensagem2',{params:{estrutura_id: user.estrutura}}).then(response=>{
                setMensagens(response.data)
            }).catch(error=>{
                console.error(error)
            })
        }

        getChat()
    
    return(
        <>
            {mensagens.map((item, index)=>{
                return(
                <ScrollView key={index} style={{flex:1, marginBottom: 5}}>
                    <Autor data={item.data_envio} nickname={item.colaborador.nome} comment={item.mensagem}/>
                </ScrollView>
                )
            })}
        </>

    )
}

