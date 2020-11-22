import React from 'react';
import './TextContainer.css';
import online from '../../../assets/onlineIcon.png';




const TextContainer = ({ users }) => {
    return (
        <div className="textContainer">
            {
                users 
                    ? (
                        <div>
                            <h1>Сейчас в чате:</h1>
                            <div className="activeContainer">
                                <h2>
                                    {users.map((user) => (
                                        <div key = { user.name } className="activeItem">
                                            { user.name }
                                            <img src = { online } alt="Online Icon"/>
                                        </div>
                                    ))}
                                </h2>
                            </div>
                        </div>
                    ):null
            }
        </div>
    )
}

export default TextContainer;