import './../App.css';
import React from 'react';
import { Navigate } from 'react-router-dom';


function Profilexample() {
    const [goToHome, setHome] = React.useState(false);

    if (goToHome) {
        return <Navigate to='/' />;
    }

    return (
        <div class="dtf">
            <img src={require('./../images/DTF_logo.jpg')} alt=""></img>
            <h1>DTF:</h1>
            <p>Paragraphe:</p>
            <button onClick={() => {setHome(true)}}>GO HOME</button>
        </div>
    );
}

export default Profilexample;
