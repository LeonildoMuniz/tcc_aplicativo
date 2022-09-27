
import { Button } from "react-native";
import { useContext } from 'react';
import {StyleSheet} from 'react-native'
import {AuthContext} from '../../contexts/AuthContext'
import { FontAwesome } from '@expo/vector-icons';


export default function Logout(){
    const {signOut} = useContext(AuthContext)
    return(
        <Button
            onPress={signOut}
            title="Sair"
            
        >
            <FontAwesome name="sign-out" size={24} color="white" />
        </Button>

    );
    
}
