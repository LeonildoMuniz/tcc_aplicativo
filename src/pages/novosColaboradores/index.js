
import { View, Text, StyleSheet} from "react-native";
import Header from "../../components/header";
import Colaboradores from '../../components/novosColaboradores'


export default function NovosColaboradores(){
    return(
        <View>
            <Header/>
            <Text style={styles.titulo}>
                Novos Colaboradores
            </Text>
            <Colaboradores/>
        </View>
    );
}

const styles = StyleSheet.create({
    titulo:{
        textAlign: 'center',
        color: '#0caeae',
        fontWeight: 'bold',
        fontSize: 16,
        paddingBottom: 15,
    }
})