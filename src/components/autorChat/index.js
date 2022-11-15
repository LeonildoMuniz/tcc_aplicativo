import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default props =>{

    return(

        <View style={styles.container}>
            <Text style={styles.data}> 
               {props.data}
            </Text>
            <Text style={styles.nickname}> 
                {props.nickname}
            </Text>
            <Text style={styles.comment}>
                {props.comment}
            </Text>
        
        </View>

    )
}


const styles = StyleSheet.create({
    container:{
        width: '100%',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginTop: 5,
        padding: 10,
        backgroundColor: '#0caeae',
    },
    commentContainer:{
        flexDirection: 'column',
        marginTop: 5,
        padding: 15,
        backgroundColor: '#0caeae',
    },
    nickname:{
        marginLeft: 5,
        fontWeight: 'bold',
        color: '#FFFAFA',

    },
    data:{
        marginLeft: 5,
        fontWeight: 'bold',
        color: '#FFD700',
    },
    comment:{
        color: '#FFFAFA',
        fontSize: 20,
        fontStyle: 'italic',
        textAlign: 'justify'
        
    }
    
})
