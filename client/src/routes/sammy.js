import './../App.css';
import React from 'react';
import { Navigate } from 'react-router-dom';


function Profilexample() {
    const [goToHome, setHome] = React.useState(false);

    if (goToHome) {
        return <Navigate to='/' />;
    }

    return (
        <div class="sammy">
            <img src={require('./../images/DTF_RTI_Sammy_Taourirt.jpg')} alt=""></img>
            <h1>SAMMY TAOURIRT:</h1>
            <p>Sammy est l'un des deux artistes du groupe DTZ, presque rien de sa vie privé n'est connu malheureusement.
            <br />Si vous voulez en découvrir plus sur lui, je vous invite à écouter les musiques qu'il a publié !</p>
            <br />
            <button onClick={() => {setHome(true)}}>RETOUR À l'ARBRE GÉNÉALOGIQUE</button>
        </div>
    );
}

export default Profilexample;
