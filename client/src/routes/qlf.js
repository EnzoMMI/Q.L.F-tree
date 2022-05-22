import './../App.css';
import React from 'react';
import { Navigate } from 'react-router-dom';


function Profilexample() {
    const [goToHome, setHome] = React.useState(false);

    if (goToHome) {
        return <Navigate to='/' />;
    }

    return (
        <div class="qlf">
            <img src={require('./../images/QLF_logo.jpg')} alt=""></img>
            <h1>QLF:</h1>
            <p>QLF Records est un label fondé en 2016 par le groupe de rap français PNL à la sortie de leur premier EP.
            <br />Cette structure compte dans ses rangs des groupes proches comme DTF, MMZ et F430.
            <br />Son nom est l’acronyme d’une expression chère aux deux frères des Tarterêts : Que La Famille.
            <br />Le Label prendra une tout autre ampleur à la sortie de l’album Dans La Légende du groupe PNL
            <br />actuellement certifié double disque de diamant ainsi qu’avec la saga de 4 clips tourné dans l’Essonne :
            <br />Naha, Onizuka, Bené et Jusqu’au dernier gramme.</p>
            <h1>Synopsis:</h1>
            <p>Jusqu’au dernier gramme est l’histoire de deux meilleurs amis adolescents,
            <br />Naha et Macha. On les retrouve quelques années plus tard à l’âge adulte comme ennemis,
            <br />sans doute à cause de la drogue. Macha veut se venger de Naha qui contrôle le marché de la drogue,
            <br />dans le quartier en l’envoyant en prison. A la suite de cela les deux frères de ce dernier voudront se venger.</p>
            <br />
            <button onClick={() => {setHome(true)}}>RETOUR À l'ARBRE GÉNÉALOGIQUE</button>
        </div>
    );
}

export default Profilexample;
