import React from 'react';
import {Message} from '../Message'
import { ScrollView } from 'react-native';

import { styles } from './styles';




export function MessageList(){

    const message= {
    id: '1',
    text: 'Texto longo',
    user: {
        name: 'string',
        avatar_url: 'https://avatars.githubusercontent.com/u/44333133?v=4'
    }
}
  return (
    <ScrollView style={styles.container}
    contentContainerStyle={styles.content}
    keyboardShouldPersistTaps='never'>
        <Message data={message}/>
        <Message data={message}/>
        <Message data={message}/>
        


    </ScrollView>
  );
}