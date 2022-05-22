import './../App.css';
import React from 'react';
import { Navigate } from 'react-router-dom';


function Profilexample() {
    const [goToHome, setHome] = React.useState(false);

    if (goToHome) {
        return <Navigate to='/' />;
    }

    return (
        <div class="nabil">
            <img src={require('./../images/PNL_Ademo_Nabil_Andrieu.jpg')} alt=""></img>
            <h1>NABIL ANDRIEU:</h1>
            <p>N.O.S de son vrais nom Nabil Andrieu, est un rappeur français et un des créateurs du groupe PNL avec son frère.
            <br />Né le 25 avril 1989, il a passé son enfance avec ses frères à Corbeil-Essonnes, élevé par leur père,
            <br />René Andrieu, un ancien braqueur dans la cité des Tarterêts et figure importante de leur quartier. Durant son adolescence,
            <br />il s’initie au rap, il évolue tout d’abord en solo avec son projet 365 jours pour percer qui sort en novembre
            <br />2011 et qui sera par la suite compilé en mixtape sous le nom de Calmement.</p>
            <br />
            <button onClick={() => {setHome(true)}}>RETOUR À l'ARBRE GÉNÉALOGIQUE</button>
        </div>
    );
}

export default Profilexample;
