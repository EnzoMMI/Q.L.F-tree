import './../App.css';
import React from 'react';
import { Navigate } from 'react-router-dom';


function Profilexample() {
    const [goToHome, setHome] = React.useState(false);

    if (goToHome) {
        return <Navigate to='/' />;
    }

    return (
        <div class="f430">
            <img src={require('./../images/F430_logo.jpg')} alt=""></img>
            <h1>F430:</h1>
            <p>F430 est un des célèbres duos de la QLF Records basé aussi aux Tarterêts dans l’Essonne,
            <br />son nom est expliqué dans le son Que La Mif du groupe PNL:
            <br />F pour le flow, 4 pour les sorties de pot, 3 comme Ralph ‘Lau, 0 poucave dans mon ghetto.
            <br />Le nom est tout de même emprunté à celui d’une voiture sportive de luxe du constructeur italien Ferrari.
            <br />Accessoirement, F430 est très proche, tant humainement que musicalement des autres groupes issues du même quartier comme PNL, MMZ et DTF.
            <br />Le groupe se fait remarquer en 2019 à la sortie de leurs premier album THANK YOU GOD
            <br />sur lequel ils maîtrisent parfaitement l’autotune et les sons mélancoliques.</p>
            <br />
            <button onClick={() => {setHome(true)}}>RETOUR À l'ARBRE GÉNÉALOGIQUE</button>
        </div>
    );
}

export default Profilexample;
