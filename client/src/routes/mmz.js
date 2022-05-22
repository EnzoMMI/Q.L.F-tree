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
            <p>MMZ ou 2MZ (Mini Mafia Zoo) est un groupe de rap originaire de la Cité des Tarterêts à Corbeil-Essonnes.
            <br />Les deux amis rencontrent un réel succès avec leur premier album, Tout pour le gang, certifié disque d'or en France.
            <br />MMZ a un style reconnaissable, à base d'auto-tune, de voix robotiques, de récits introspectifs, et d'envolées sentimentales.
            <br />Ils font partie de la galaxie PNL. Le groupe est composé de Moha, de son vrai nom Mohamed Lakmale
            <br />et de Lazer, de son vrai nom Amine Ramani, né le 9 juin 1998, en France, et tous deux d'origine marocaine.
            <br />Les anciens membres sont Brams, de son vrai prénom Brahim, né le 1 septembre 1997, d'origine algérienne, Doomams, et Razor.
            <br />On a pu voir MMZ pour la première fois, le 21 mars 2014, avec le clip Met des gifles.
            <br />Par la suite, en janvier 2015, ils sortent le clip Dans le four, en featuring avec la GDZ (Gangsta Du Zoo) et Mom's.
            <br />Puis, en mai 2015, sort le clip Ratepi. Mais c'est avec le clip Cocaïna sorti en janvier 2016 que le groupe connait le succès.
            <br />Le clip Au pied de ma tour, est leur plus gros succès, avec plus de 20 millions de vues. MMZ a connu une forte médiatisation grâce à PNL, groupe issu du même quartier, avec lequel il réalisait des featurings au tout début de leur carrière. Moha a d'ailleurs participé à l'album Le Monde Chico de PNL sur le son Que la mif. La chaîne YouTube de MMZ contient 40 titres, avec plus de 283 millions de vues jusqu'à présent. Leur chaîne compte dorénavant 1,12 millions d’abonnés. La MMZ apparaît dans plusieurs clips de PNL, TDA, GDZ et de S-Pion.
            <br />MMZ a été, comme d'autres, soutenu par le duo PNL. Ils sont très proches des rappeurs
            <br />DTF, TDA, F430, S-Pion, Flasko, IGD Gang, GDZ, Houzairou, Ilinas, N'dirty Deh, Bigy et Bené, qui sont aussi dans la famille QLF.</p>
            <br />
            <button onClick={() => {setHome(true)}}>RETOUR À l'ARBRE GÉNÉALOGIQUE</button>
        </div>
    );
}

export default Profilexample;
