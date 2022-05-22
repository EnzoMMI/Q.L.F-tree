import './../App.css';
import React from 'react';
import { Navigate } from 'react-router-dom';


function Profilexample() {
    const [goToHome, setHome] = React.useState(false);

    if (goToHome) {
        return <Navigate to='/' />;
    }

    return (
        <div class="pnl">
            <img src={require('./../images/PNL_logo.png')} alt=""></img>
            <h1>PNL:</h1>
            <p>Paragraphe:</p>
            <button onClick={() => {setHome(true)}}>GO HOME</button>
        </div>
    );
}

export default Profilexample;
