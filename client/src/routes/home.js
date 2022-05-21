import './../App.css';
import React from 'react';

function Home() {
    return (
        <body>
            <div class="container">
                <div class="row">
                    <div class="tree">
                        <ul>
                            <li> <a href="/profilexample"><img src={require('./../images/1.jpg')} alt=""></img><span>Child</span></a>
                                <ul>
                                    <li><a href="/#"><img src={require('./../images/2.jpg')} alt=""></img><span>Grand Child</span></a>
                                        <ul>
                                            <li> <a href="/#"><img src={require('./../images/3.jpg')} alt=""></img><span>Great Grand Child</span></a> </li>
                                            <li> <a href="/#"><img src={require('./../images/4.jpg')} alt=""></img><span>Great Grand Child</span></a> </li>
                                        </ul>
                                    </li>
                                    <li> <a href="/#"><img src={require('./../images/5.jpg')} alt=""></img><span>Grand Child</span></a>
                                        <ul>
                                            <li> <a href="/#"><img src={require('./../images/6.jpg')} alt=""></img><span>Great Grand Child</span></a> </li>
                                            <li> <a href="/#"><img src={require('./../images/7.jpg')} alt=""></img><span>Great Grand Child</span></a> </li>
                                            <li> <a href="/#"><img src={require('./../images/8.jpg')} alt=""></img><span>Great Grand Child</span></a> </li>
                                        </ul>
                                    </li>
                                        <li><a href="/#"><img src={require('./../images/9.jpg')} alt=""></img><span>Grand Child</span></a></li>
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
