import React, {useState, useEffect} from 'react';
import queryString from 'query-string' /* helps retrive data from URL */

import io from 'socket.io-client'

import './Chat.css'

const ENDPOINT = 'localhost:5000';

let socket;

const Chat = ({ location }) => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    

    useEffect(() => {
        const {name, room} = queryString.parse(location.search); /*  with this we get basacly the URL back */

        socket = io(ENDPOINT);

        setName(name)
        setRoom(room)
        
        socket.emit('join', {name, room} , () => {
            
        });

        return () => {
            socket.emit('disconnect');
            // out mounting the component and leaving the chat

            socket.off();

        }
    }, [ENDPOINT, location.search])

    return (
        <div>
            <h1>Chat</h1>
        </div>
    );
};

export default Chat;