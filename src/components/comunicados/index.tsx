import  React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, View, Image, Dimensions} from 'react-native'
import Autor from '../autorComunicado'
import {api} from '../../services/api'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AuthContext } from '../../contexts/AuthContext'


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
        const {verifica} = useContext(AuthContext)
        api.get('/mensagem3').then(response=>{
            setMensagens(response.data)
        }).catch(error=>{
                    console.error(error)
        })

        verifica()
    }


    atualizarComunicado()

    
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
                <View style={styles.container} key={index}>
                    
                    <Autor nickname={item.colaborador.nome} mensagem={item.mensagem} data={dataAtualFormatada()}/>
                    <Image source={{uri:'http://192.168.1.14:3333/files/'+item.anexo}}  style={styles.image}/>
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


