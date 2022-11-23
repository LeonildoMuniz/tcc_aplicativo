
import React, {useState, useContext} from "react";
import {ScrollView} from 'react-native'
import {api}  from '../../services/api'
import Colaboradores  from '../listaNovosCol'
import { AuthContext } from "../../contexts/AuthContext";


export default function NvColaboradores(){

    const [colaboradores, setColaboradores] = useState([])

    async function listaColaboradores(){
        const {verifica} = useContext(AuthContext)

        api.get('/nvcolaboradores').then(response=>{
            setColaboradores(response.data)
        }).catch(error=>{
                    console.error(error)
        })
        verifica()
    }

    listaColaboradores()

    return(
        <>
            {colaboradores.map((item, index)=>{
                return(
                    <ScrollView key={index}>
                        <Colaboradores nome={item.nome} foto={item.foto} setor={item.alocacao.desc_custo}/>
                    </ScrollView>
                )
            })}
        </>

    )
}
