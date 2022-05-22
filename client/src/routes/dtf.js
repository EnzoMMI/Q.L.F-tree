import './../App.css';
import React from 'react';
import { Navigate } from 'react-router-dom';


function DTF() {
    const [goToHome, setHome] = React.useState(false);

    if (goToHome) {
        return <Navigate to='/' />;
    }

    return (
        <div class="dtf">
            <img src={require('./../images/DTF_logo.jpg')} alt=""></img>
            <h1>DTF:</h1>
            <p>DTF (« Dans Ta Face ») est un groupe de rap français indépendant créé en 2015, composé de Karim Azzouz, dit RKM, et de Sammy Taourirt, dit RTI.
            <br />En 2015, RKM apparaît sur le titre Athéna du premier EP du groupe PNL, intitulé Que la famille,
            <br />ainsi que dans leur premier album, Le Monde Chico, sur le titre Rebenga. Le duo DTF invite
            <br />les deux frères dans leur deuxième album studio, Sans rêve, sorti en 2017, sur les titres suivants:
            <br />Avant de partir (feat N.O.S), et Baddack (feat Ademo). En 2019, ils collaborent une nouvelle fois avec N.O.S,
            <br />sur le titre Dans la ville dans leur troisième album, On ira où ?
            <br />
            <br />En septembre 2019, DTF annonce sur les réseaux sociaux, l'arrivée d'un nouveau clip, tourné en partie à Nefta (Tunisie),
            <br />lieu de tournage de la saga Star Wars. La date de sortie d'un nouvel album est prévue pour le 11 octobre 2019.
            <br />Cet album, On ira où ?, est réalisé en référence à leur cité Gagarine qui, après plusieurs décennies, doit être détruite
            <br />complètement d'ici 2020 pour laisser la place à de nouveaux logements. Pour l'occasion, DTF accorde une interview dans l'émission
            <br />Clique de Mouloud Achour sur Canal +, ainsi qu'un live de l'un des titres de leur album. En une semaine, l'album s'écoule à 8 963 exemplaires.
            <br />L'album sera certifié disque d'or le 11 septembre 2020, soit onze mois après sa sortie. Le groupe s'associe par la suite à N.O.S, l'un des frères du groupe PNL,
            <br />sur le titre Dans la ville10. Le titre est certifié single d'or, le 12 juin 2020.
            <br />
            <br />Le groupe prend part à la tournée Deux frères de PNL, pour assurer la première partie du groupe. Quelques jours après le début de la tournée,
            <br />un des bus qui transportait une partie de l'équipe technique et membre de la tournée, a été victime d'un accident de la route
            <br />dont 7 personnes se sont retrouvées blessées. On apprendra dans la soirée que le groupe se trouvait dans le véhicule, puisque lors du concert,
            <br />le rappeur RKM a effectué sa prestation assis sur une chaise.
            <br />
            <br />Le lendemain le groupe confirma la nouvelle via les réseaux sociaux, en indiquant qu'ils se retiraient
            <br />provisoirement de la tournée quelques jours pour raison personnelle.</p>
            <br />
            <button onClick={() => {setHome(true)}}>RETOUR À l'ARBRE GÉNÉALOGIQUE</button>
        </div>
    );
}

export default DTF;
