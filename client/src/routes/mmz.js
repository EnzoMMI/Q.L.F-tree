import './../App.css';
import React from 'react';
import { Navigate } from 'react-router-dom';


function Profilexample() {
    const [goToHome, setHome] = React.useState(false);

    if (goToHome) {
        return <Navigate to='/' />;
    }

    return (
        <div class="mmz">
            <img src={require('./../images/MMZ_logo.jpg')} alt=""></img>
            <h1>MMZ:</h1>
            <p>Paragraphe:</p>
            <button onClick={() => {setHome(true)}}>GO HOME</button>
        </div>
    );
}

export default Profilexample;