import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import avatar from '../../../assets/avatar.svg';

import './JoinInputModule.css';



const JoinInput = () => {

    const [name, setName] = useState('');
    const [chat, setChat] = useState('');

    const handleClick = (e) => {
        if (!name || !chat) return e.preventDefault()
        else return null;
    }


    return(
        <form>
            <img src={avatar} />
            <h3 className='title'> YERKIN CHAT  </h3>

            <div className='input-div one'>

                <div className='i'>
                    <i className="fas fa-user"></i>
                </div>

                <div className='div'>
                    <input type='text' className='input' placeholder='Имя пользователя' value = {name} onChange = {(e) => setName(e.target.value)}/>
                </div>

            </div>


            <div className='input-div pass'>

                <div className='i'>
                    <i class="fas fa-comments"></i>
                </div>

                <div className="div">
                    <input type="number" className="input" placeholder='ID чата' value = {chat} onChange = {(e) => setChat(e.target.value)}/>
                </div>

            </div>

            <Link onClick = { handleClick } to={`/chat?name=${name}&room=${chat}`}>
                <input type='submit' className='btn' value='ПРИСОЕДИНИТЬСЯ' />
            </Link>

        </form>
    )
}

export default JoinInput;