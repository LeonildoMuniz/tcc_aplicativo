
import React, {useState, useContext} from "react";
import {ScrollView} from 'react-native'
import { AuthContext } from "../../contexts/AuthContext";
import {api}  from '../../services/api'
import Aniver  from '../listAniversariante'




export default function Aniversariante(){

    const [aniversariante, setAniversariante] = useState([])

    async function listaAniversariante(){
        const {verifica} = useContext(AuthContext)
        api.get('/aniversariantes').then(response=>{
            setAniversariante(response.data)
        }).catch(error=>{
                    console.error(error)
        })
        verifica()
    }

    listaAniversariante()

    return(
        <>
            {aniversariante.map((item, index)=>{
                return(
                    <ScrollView key={index}>
                        <Aniver nome={item.nome} foto={item.foto} setor={item.alocacao.desc_custo}/>
                    </ScrollView>
                )
            })}
        </>

    )
}
