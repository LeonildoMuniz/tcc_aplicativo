import Header from "../../components/header";
import Conversa from "../../components/chat";
import {Button, DevSettings, ScrollView} from 'react-native'
import React from "react";
import Restart from 'react-native-restart'





export default function Chat(){

    return(
        

        <ScrollView style={{flex:1, marginBottom: 100}}>
            <Header/>
            <Conversa/>
        </ScrollView>

  
    )
}