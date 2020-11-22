import React from 'react';

import online from '../../../assets/onlineIcon.png';
import close from '../../../assets/closeIcon.png';

import './InfoBar.css';


const InfoBar = ({  }) => {
    return (
        <div className="infoBar">
            <div className="leftInnerContainer">
                <img className="onlineIcon" src={online} alt="online icon" />
                <h3> room2 </h3>
            </div>

            <div className="rightInnerContainer">
                <a href="/"><img src={close} alt="close icon" /></a>
            </div>
        </div>
    )
}

export default InfoBar


