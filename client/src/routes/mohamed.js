import './../App.css';
import React from 'react';
import { Navigate } from 'react-router-dom';


function Profilexample() {
    const [goToHome, setHome] = React.useState(false);

    if (goToHome) {
        return <Navigate to='/' />;
    }

    return (
        <div class="mohamed">
            <img src={require('./../images/MMZ_Moha_Mohamed_Lakmale.jpg')} alt=""></img>
            <h1>MOHAMED LAKMALE:</h1>
            <p>Moha, de son vrai nom Mohamed Lakmale, est un rappeur français d'origine algéro-marocaine.
            <br />Né le 21 janvier 1998 en France, il forme, avec son binôme Lazer, le groupe MMZ, originaire de la cité des
            <br />Tarterêts dans le département de l'Essonne (91). Il a sorti le clip “On t'allume”,
            <br />le 6 septembre 2013 avec son grand frère Flasko, sur le projet de BlockStudio (Vol.4) En 2015, alors âgé de 17 ans,
            <br />Moha apparaît sur le morceau “Que la mif” de PNL, sur lequel il est crédité en tant que Pti Moha. Ce featuring à succès offre
            <br />une certaine visibilité à Moha et, par conséquent, à son groupe, la 2MZ.</p>
            <br />
            <button onClick={() => {setHome(true)}}>RETOUR À l'ARBRE GÉNÉALOGIQUE</button>
        </div>
    );
}

export default Profilexample;
