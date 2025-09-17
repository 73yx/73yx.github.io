import React from 'react';
import bei_luo from '../images/Background/DSC01892.png'


const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    fontFamily: 'Josefin Sans, serif',
    color: 'rgb(255, 255, 255)'
};

const fullPageBackgroundStyle: React.CSSProperties = {
    backgroundImage: `url(${bei_luo})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
};



export {
    containerStyle,
    fullPageBackgroundStyle
};

