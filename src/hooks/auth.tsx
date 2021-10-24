import React,{ createContext, useContext, useState } from "react";
import * as AuthSessions from '@expo-auth-session'

const CLIENT_ID = '0d89b11491fc6cdf6b55'
    const SCOPE = 'read:user'

type User = {
    id: string
    avatar_url: string
    name: string
    login: string
}

type AuthContextData = {
    user: User | null
    isSigninIng: boolean

    signIn: () => Promise<void>
    signOut: () => Promise<void>
}

type AuthProviderProps = {
    children: React.ReactNode
}

type AuthResponse = {
    token: string
    user: User
}

type AuthorizationResponse = {
    params: {
        code?: string
    }
}



export const AuthContext = createContext({} as AuthContextData)

function AuthProvider({ children }: AuthProviderProps) {

    const [isSigninIng, setisSigninIng] = useState(false)
    const [user, setUser] = useState<User | null>(null)

    const authUrl = `https://hithub.com/login/oauth/authorize?client_id=${CLIENT_ID}&SCOPE=${SCOPE}`
    const {params} = AuthSessions.startAsync({authUrl}) as AuthorizationResponse

    console.log(params)

    async function signIn() {

    }

    async function signOut() {

    }

    return (
        <AuthContext.Provider value={{
            signIn,
            signOut,
            user,
            isSigninIng
        }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext)

    return context
}

export {AuthProvider, useAuth}