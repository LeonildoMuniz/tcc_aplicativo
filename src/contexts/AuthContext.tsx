
import React, {useState, createContext, ReactNode, useEffect} from 'react';
import {api} from '../services/api'
import AsyncStorage from '@react-native-async-storage/async-storage'

type AuthContextData = {
    user:UserProps;
    estaAutenticado: boolean;
    Logar: (credenciais: LogarProps) => Promise<void>;
    loadingAuth: boolean;
    loading: boolean;
    signOut: () => Promise<void>;
}

type UserProps = {
    id: string;
    nome: string;
    token: string;
}

type AuthProviderProps ={
    children: ReactNode;
}

type LogarProps={
    matricula: string,
    senha: string,
}



export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({children}:AuthProviderProps){

    

    const [user, setUser] = useState({
        id:'',
        nome: '',
        token: '',
    })
    const [loadingAuth, setLoadingAuth] = useState(false)
    const [loading, setLoading] = useState(true);

    const estaAutenticado = !!user.token;

    useEffect(()=>{
        async function getUSER() {
            const userInfo = await AsyncStorage.getItem('@token')
            let hasUser: UserProps = JSON.parse(userInfo || '{}');

            if(Object.keys(hasUser).length > 0){
                api.defaults.headers.common['Authorization'] = `Bearer ${hasUser.token}`

                setUser({
                    id: hasUser.id,
                    nome: hasUser.nome,
                    token: hasUser.token,
                })
            }

            setLoading(false);

        }

        

        getUSER();
    },[])

    async function Logar({matricula, senha}: LogarProps) {
        setLoadingAuth(true);

        try{

            const response = await api.post('/session2',{
                matricula,
                senha,
            })

           const {id, nome, token} = response.data;
           const data = {
            ...response.data
           }
           
            await AsyncStorage.setItem('@token',JSON.stringify(data))

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`

           setUser({
                id,
                nome,
                token,
           })

           setLoadingAuth(false);

        }catch(err){
            console.log('Erro ao acessar: ', err)
            setLoadingAuth(false);
        }

    }

    async function signOut() {
        await AsyncStorage.clear()
        .then(()=>{
            setUser({
                id: '',
                nome: '',
                token: '',
            })
        })
    }

    return(
        <AuthContext.Provider value={{user, estaAutenticado, Logar, loading, loadingAuth, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}