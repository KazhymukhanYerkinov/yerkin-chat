import React from 'react';

import wave from '../../assets/wave2.svg';
import back from '../../assets/bg.png';

import './JoinModule.css';
import JoinInput from './JoinInput/JoinInput';
            

const Join = () => {

    return (
        <>
            <img className = 'wave' src = {back} />
            <div className = 'container'>

                <div className = 'img'>
                    <img src = {wave}/>
                </div>

                <div className = 'login-content'>
                    <JoinInput />
                </div>

            </div>
        </>
    )
}

export default Join;