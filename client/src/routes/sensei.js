import './../App.css';
import React from 'react';
import { Navigate } from 'react-router-dom';


function SENSEI() {
    const [goToHome, setHome] = React.useState(false);

    if (goToHome) {
        return <Navigate to='/' />;
    }

    return (
        <div class="sensei">
            <img src={require('./../images/F430_Sensei.jpg')} alt=""></img>
            <h1>SENSEI:</h1>
            <p>Sensei est l'un des deux artistes du groupe F430, presque rien de sa vie privé n'est connu malheureusement.
            <br />Si vous voulez en découvrir plus sur lui, je vous invite à écouter les musiques qu'il a publié !</p>
            <br />
            <button onClick={() => {setHome(true)}}>RETOUR À l'ARBRE GÉNÉALOGIQUE</button>
        </div>
    );
}

export default SENSEI;
