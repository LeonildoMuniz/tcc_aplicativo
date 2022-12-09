import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

export default props =>{

    return(

        <View style={styles.container}>
                <Image style={styles.foto} source={{uri:'http://192.168.1.14:3333/files/'+props.foto}}/>
                <View style={styles.texto}>
                    <Text style={styles.nome}> 
                        {props.nome}
                    </Text>
                    <Text style={styles.setor}>
                            {props.setor}
                    </Text>
                </View>
        </View>

    )
}

const styles = StyleSheet.create({

    container:{
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderColor: "#ddd",
    },
    foto:{
        width: 50,
        height: 50,
        marginTop:16,
        marginRight: 16,
    },
    texto:{
        flexDirection:'column',
        flex:1,
        paddingHorizontal: 10,
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderColor: "#ddd",
    },
    setor:{
        fontSize:12,
        fontWeight:'bold',
        color:'gray'
    },
    nome:{
        fontSize: 16,
        color:'#1caeee',
        fontWeight:'bold'
    },

    separador:{
        height: 1,
        width: '100%',
        backgroundColor:'#ccc',
    },

    
})