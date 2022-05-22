import './../App.css';
import React from 'react';
import { Navigate } from 'react-router-dom';


function Profilexample() {
    const [goToHome, setHome] = React.useState(false);

    if (goToHome) {
        return <Navigate to='/' />;
    }

    return (
        <div class="f430">
            <img src={require('./../images/F430_logo.jpg')} alt=""></img>
            <h1>F430:</h1>
            <p>Paragraphe:</p>
            <button onClick={() => {setHome(true)}}>GO HOME</button>
        </div>
    );
}

export default Profilexample;
