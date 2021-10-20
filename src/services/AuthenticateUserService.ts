import axios from 'axios'

interface IAcessTokenResponse {
    access_token: string
}

interface IUserResponse {
    avatar_url: string,
    login: string,
    id: number,
    name: string
}



class AuthenticateUserService {
    async execute(code: string){
        
        const url = 'https://github.com/login/oauth/access_token'

        //nomeando a variavel data 
        const {data: acessTokenResponse} = await axios.post<IAcessTokenResponse>(url, null, {
            params: {
                client_id: process.env.GITHUB_CLIENT_ID,
                client_secret: process.env.GITHUB_CLIENT_SECRET,
                code
            },

            headers: {
                Accept: 'application/json'
            }
        })

        const response = await axios.get<IUserResponse>('https://api.github.com/user', {
            headers: {
                authorization: `Bearer ${acessTokenResponse.access_token}`
            }
        })

        return response.data
    }
}

export { AuthenticateUserService }