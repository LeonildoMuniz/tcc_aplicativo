
import React from 'react';
import Header from "../../components/header";
import ListaMensagens from "../../components/comunicados";
import {DevSettings, RefreshControl, ScrollView} from 'react-native';


export default function Comunidados(){

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
      }

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        
        wait(1000).then(() => setRefreshing(false));
      }, []);


    return(

        <ScrollView 
            refreshControl={
            <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
              />
            } 
            style={{flex:1, marginBottom:100, padding:10}
        }>
            <Header/>
            <ListaMensagens/>
        </ScrollView>
        
    );
}