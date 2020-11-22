import React from 'react';
import './Input.css';

const Input = ({ message, setMessage, sendMessage }) => (
    <form className="form">
        <input 
            className="input"
            type="text"
            placeholder="Hапишите сообщение..."
            value = { message }
            onChange = { (e) => setMessage(e.target.value) }
            onKeyPress = { (e) => e.key === 'Enter' ? sendMessage(e):null }

        />

        <button className="sendButton" onClick = { (e) => sendMessage(e) }>Отправить</button>
    </form>
)

export default Input;