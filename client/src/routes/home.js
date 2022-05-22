import './../App.css';
import React from 'react';

function Home() {
    return (
        <body>
            <div class="container">
                <div class="row">
                    <div class="tree">
                        <ul>
                            <li> <a href="/qlf"><img src={require('./../images/QLF_logo.jpg')} alt=""></img><span>QLF</span></a>
                                <ul>
                                    <li><a href="/pnl"><img src={require('./../images/PNL_logo.png')} alt=""></img><span>PNL</span></a>
                                        <ul>
                                            <li> <a href="/tarik"><img src={require('./../images/PNL_Ademo_Tarik_Andrieu.jpg')} alt=""></img><span>Tarik Andrieu</span></a> </li>
                                            <li> <a href="/nabil"><img src={require('./../images/PNL_Ademo_Nabil_Andrieu.jpg')} alt=""></img><span>Nabil Andrieu</span></a> </li>
                                        </ul>
                                    </li>
                                    <li> <a href="/dtf"><img src={require('./../images/DTF_logo.jpg')} alt=""></img><span>DTF</span></a>
                                        <ul>
                                            <li> <a href="/karim"><img src={require('./../images/DTF_RKM_Karim_Azzouz.jpg')} alt=""></img><span>Karim Azzouz</span></a> </li>
                                            <li> <a href="/sammy"><img src={require('./../images/DTF_RTI_Sammy_Taourirt.jpg')} alt=""></img><span>Sammy Taourirt</span></a> </li>
                                        </ul>
                                    </li>
                                    <li><a href="/mmz"><img src={require('./../images/MMZ_logo.jpg')} alt=""></img><span>MMZ</span></a>
                                        <ul>
                                            <li> <a href="/mohamed"><img src={require('./../images/MMZ_Moha_Mohamed_Lakmale.jpg')} alt=""></img><span>Mohamed Lakmale</span></a> </li>
                                            <li> <a href="/amine"><img src={require('./../images/MMZ_Lazer_Amine_Ramani.jpg')} alt=""></img><span>Amine Ramani</span></a> </li>
                                        </ul>
                                    </li>
                                    <li><a href="/f430"><img src={require('./../images/F430_logo.jpg')} alt=""></img><span>F430</span></a>
                                        <ul>
                                            <li> <a href="/sensei"><img src={require('./../images/F430_Sensei.jpg')} alt=""></img><span>Sensei</span></a> </li>
                                            <li> <a href="/jet"><img src={require('./../images/F430_Jet.jpg')} alt=""></img><span>Jet</span></a> </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </body>
    );
}

export default Home;
