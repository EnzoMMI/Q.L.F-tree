import './../App.css';
import React from 'react';
import { Navigate } from 'react-router-dom';


function AMINE() {
    const [goToHome, setHome] = React.useState(false);

    if (goToHome) {
        return <Navigate to='/' />;
    }

    return (
        <div class="amine">
            <img src={require('./../images/MMZ_Lazer_Amine_Ramani.jpg')} alt=""></img>
            <h1>AMINE RAMANI:</h1>
            <p>MMZ ou 2MZ est un groupe de rap originaire de Corbeil Essonnes, dans le département 91 (Essonnes).
            <br />Le groupe, dont les initiales veulent dire Mini Mafia Zoo, est composé des rappeurs Lazer (MMZ), Moha (MMZ),
            <br />Brams et Doomams. Ils ont fait leur apparition sous le feu des projecteurs avec le titre “Cocaïna”, produit par TheBeatPlug,
            <br />qui reprend un type beat de Young Thug. Proches du groupe PNL, autre groupe du 91, ils ont été très
            <br />médiatisés suite au succès de leurs “grands frères”. Lazer commence le rap à 13 ans, en 2012, avec le titre “On débarque”
            <br />en featuring avec Razor et SDZ. Le 5 décembre 2014, on a pu le voir dans le clip Squad Freestyle, aux côtés du groupe PNL,
            <br />ainsi que de Jet, Moha, Lazeur et Sanders, du groupe F430. Brams, lui, apparaît dans le clip Gwapa,
            <br />le 27 octobre 2016, en featuring avec le rappeur S-Pion, originaire également de Corbeil-Essonnes.</p>
            <br />
            <button onClick={() => {setHome(true)}}>RETOUR À l'ARBRE GÉNÉALOGIQUE</button>
        </div>
    );
}

export default AMINE;
