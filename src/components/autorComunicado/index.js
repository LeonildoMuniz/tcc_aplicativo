import React from 'react'
import {Text, View, StyleSheet} from 'react-native'

export default props =>{

    return(
        
        <View style={styles.container}>
            <Text style={styles.nickname}>
                {props.nickname}
            </Text>
            <Text style={styles.mensagem}>
                {props.mensagem}
            </Text>
            <Text style={styles.data}>
                {props.data}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'column',
        alignItems: 'flex-start',
        paddingLeft:10,
        marginBottom:0

    },

    nickname:{
        color: '#999',

        fontSize: 15,
        fontWeight: 'bold',
    }, 
    mensagem:{
        color: '#999',
        fontSize: 16,
        fontWeight: '400',
    },
    data:{
        color: '#999',
        fontSize: 16,
        fontWeight: '400',
        
    },

})