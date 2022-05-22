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
            <p>PNL acronyme de Peace N’Lovés, est un groupe de rap français
            <br />composé de deux frères, Ademos et N.O.S. De leurs vrais nom Tarik et Nabil.
            <br />Connut notamment pour leur absence totale d’interview et par leurs clips cinématographiques novateur,
            <br />réalisé dans le monde entier dès leur début en 2015. Leur premier album s’intitule Le Monde Chico puis est suivit par Dans
            <br />la légende en 2016 et enfin leur 3ème et dernier projet pour l’instant Deux frère est sorti en 2019. Un des morceaux de l’album Deux frère,
            <br />Au DD à connus un succès énorme lors de sa sortie, en effet, il a été teaser dans un live sur leur chaine YouTube et
            <br />a reçus le prix de la « meilleur création audiovisuelle » lors de l’édition 2020 des Victoires de la musique. </p>
            <br />
            <button onClick={() => {setHome(true)}}>RETOUR À l'ARBRE GÉNÉALOGIQUE</button>
        </div>
    );
}

export default Profilexample;
