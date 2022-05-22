import './../App.css';
import React from 'react';
import { Navigate } from 'react-router-dom';


function Profilexample() {
    const [goToHome, setHome] = React.useState(false);

    if (goToHome) {
        return <Navigate to='/' />;
    }

    return (
        <div class="tarik">
            <img src={require('./../images/PNL_Ademo_Tarik_Andrieu.jpg')} alt=""></img>
            <h1>TARIK ANDRIEU:</h1>
            <p>Ademo de son vrais nom Tarik Andrieu, est un rappeur français et un des créateurs du groupe PNL avec son frère.
            <br />Né le 26 décembre 1986, il a passé son enfance avec ses frères à Corbeil-Essonnes,
            <br />élevé par leur père, René Andrieu, un ancien braqueur dans la cité des Tarterêts et
            <br />figure importante de leur quartier. Durant son adolescence, il s’initie au rap,
            <br />il évolue tout d’abord en solo et sort sa première mixtape en 2008, intitulé Le son des Halls Vol 1,
            <br />le second volume sort en 2011. Il va participer à plusieurs go-fast qui vont l’amener
            <br />à purger une peine à Fleury-Merogis. C’est à la suite de cette arrestation que les deux frères vont sortir
            <br />leur premier EP, Que le Famille.</p>
            <br />
            <button onClick={() => {setHome(true)}}>RETOUR À l'ARBRE GÉNÉALOGIQUE</button>
        </div>
    );
}

export default Profilexample;
