
import { Button } from "react-native";
import { useContext } from 'react';
import { View, Text } from "react-native-animatable";
import {AuthContext} from '../../contexts/AuthContext'
import { FontAwesome } from '@expo/vector-icons';
import Logout from '../../components/logout'


export default function Comunidados(){
    return(
        <View>
            <Logout/>
            <Text>
                Pagina Inicial
            </Text>
        </View>
        
    );
}