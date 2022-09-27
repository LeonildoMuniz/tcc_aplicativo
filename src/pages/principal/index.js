import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons} from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Comunidados from '../comunicados';
import Chat from '../chat';
import Aniversariante from '../aniversariantes';
import NovosColaboradores from '../novosColaboradores';
import Canais from '../canaisComunicacao'
import { View } from 'react-native-animatable';
import Logout from '../../components/logout'


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function Principal(){
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor:'#fff',
                tabBarInactiveTintColor: '#fff',
                tabBarShowLabel:false,
                tabBarStyle:{
                    position:'absolute',
                    backgroundColor: '#0caeae',
                    borderTopWidth:0,

                    bottom: 14,
                    left:14,
                    right: 14,
                    elevation:0,
                    borderRadius: 8,
                    height: 60
                }
            }}
        >


            <Tab.Screen
                name = "Comunicados"
                component={Comunidados}
                
                options={{

                    tabBarIcon:({color, size, focused})=>{
                        if(focused){
                            return <Ionicons name='information-circle' size={size} color={color}/>
                        }

                        return <Ionicons name='information-circle-outline' size={size} color={color}/>
                    }
                }}
                
            />             
         
            <Tab.Screen
                name = "Chat"
                component={Chat}
                options={{
                    tabBarIcon:({color, size, focused})=>{
                        if(focused){
                            return <FontAwesome name="commenting" size={size} color={color} />
                        }

                        return <FontAwesome name="commenting-o" size={size} color={color} />
                    }
                }}
            />   

            <Tab.Screen
                name = "Aniversariante"
                component={Aniversariante}
                options={{
                    tabBarIcon:({color, size, focused})=>{
                        if(focused){
                            return <MaterialCommunityIcons name="cake-variant" size={size} color={color}/>
                        }

                        return <MaterialCommunityIcons name="cake-variant-outline" size={size} color={color}/>
                    }
                }}
            />   

            <Tab.Screen
                name = "Novos Colaboradores"
                component={NovosColaboradores}
                options={{
                    tabBarIcon:({color, size, focused})=>{
                        if(focused){
                            return <MaterialCommunityIcons name="hand-wave" size={size} color={color} />
                        }

                        return <MaterialCommunityIcons name="hand-wave-outline" size={size} color={color} />
                    }
                }}
            />   

            <Tab.Screen
                name = "Canais"
                component={Canais}
                options={{
                    tabBarIcon:({color, size, focused})=>{
                        if(focused){
                            return <Ionicons name="send" size={size} color={color} />
                        }

                        return <Ionicons name="send-outline" size={size} color={color}/>
                    }
                }}
            />   

        </Tab.Navigator>
    );
}
