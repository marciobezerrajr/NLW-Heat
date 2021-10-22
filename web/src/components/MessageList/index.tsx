import styles from './styles.module.scss'
import { api } from '../../services/api'
import { useEffect, useState } from 'react'
import logoImg from '../../assets/logo.svg'


type Message = {
    id: string;
    text: string;
    user: {
        name: string;
        avatar_url: string
    }
}

export function MessageList() {

    const [messages, setMessages] = useState<Message[]>([])



    useEffect(() => {
        api.get<Message[]>('messages/last3').then(res => {
            console.log(res.data)
        })
    }, [])

    return (
        <div className={styles.MessageListWrapper}>
            <img src={logoImg}></img>

            <ul className={styles.MessageList}>

                {messages.map(message => {
                    return (
                        <li key={message.id} className={styles.message}>
                            <p className={styles.messageContent}>{message.text}</p>
                            <div className={styles.messageUser}>
                                <div className={styles.userImage}>
                                    <img src={message.user.avatar_url} alt={message.user.name} />
                                </div>
                                <span>{message.user.name}</span>
                            </div>
                        </li>
                    )
                })}


            </ul>
        </div>
    )
}