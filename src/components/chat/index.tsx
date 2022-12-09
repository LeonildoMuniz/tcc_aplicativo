
import React, {useState, useEffect, useContext} from "react";
import {ScrollView} from 'react-native'
import Autor from '../autorChat'
import {api}  from '../../services/api'
import AsyncStorage from "@react-native-async-storage/async-storage";
import {AuthContext} from '../../contexts/AuthContext'



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
        const {verifica} = useContext(AuthContext)
        api.get('/mensagem2',{params:{estrutura_id: user.estrutura}}).then(response=>{
            setMensagens(response.data)
        }).catch(error=>{
            console.error(error)
        })
        verifica()
    }
    
    getChat()
    
    return(
        <>
            {mensagens.map((item, index)=>{
                function dataAtualFormatada(){
                    var data = new Date(item.data_envio),
                        dia  = data.getDate().toString(),
                        diaF = (dia.length == 1) ? '0'+dia : dia,
                        mes  = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
                        mesF = (mes.length == 1) ? '0'+mes : mes,
                        anoF = data.getFullYear();
                    return diaF+"/"+mesF+"/"+anoF;
                }



                return(
                <ScrollView key={index} style={{flex:1, marginBottom: 5}}>

                    <Autor data={dataAtualFormatada()} nickname={item.colaborador.nome} comment={item.mensagem}/>
                </ScrollView>
                )
            })}
        </>

    )
}


