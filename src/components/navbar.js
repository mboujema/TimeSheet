import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './Home';
import Profil from './Profil';

import Timesheet from './Timesheet';

export default function NavBar({ bouton2, bouton3, nom, prenom }) {


    const toggleDarkLight = () => {
        const body = document.querySelector("body");

        console.log(body.className);
        
        if (body.className == 'darkMode') {
            body.className = "lightMode"
            console.log(body.className);
        } else {
            body.className = 'darkMode'
            console.log(body.className);

        }
      }


    return (
        <div >
            <Router>
                <header className={bouton2}>
                    <nav >
                        <div className="logodiv">
                            <img className="imglogo" src="./img/blacklogo.png" alt="" />
                            <h1 className="logo">Time2<span className="redwork">Work</span></h1>
                        </div>



                        <ul className="nav">
                            <li className="nav__items ">
                                <i className="fas fa-home"></i>
                                <Link to='/home'><a href="">Acceuil</a></Link>
                            </li>

                            <li className="nav__items ">
                                <i className="fas fa-user"></i>
                                <Link to='/Profil'><a href="">Profil</a></Link>
                            </li>

                            <li className="nav__items ">
                                <i className="fas fa-calendar-alt"></i>
                                <Link to='/Timesheet'><a href="">TimeSheet</a></Link>
                            </li>

                            <li className="nav__items ">
                                <i className="fas fa-moon"></i>
                                <div className="divbtn">
                                    <button id='mode' type="button" name="dark_light" onClick={toggleDarkLight} title="Toggle dark/light mode">🌞 / 🌛</button>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </header>
                <div className={bouton3}>

                    <Switch>
                        
                        <Route path='/home' >
                            <Home></Home>
                        </Route>

                        <Route path='/Timesheet'>
                            <Timesheet nomm={nom} prenomm={prenom} ></Timesheet>
                        </Route>

                        <Route path='/Profil' >
                            <Profil nom={nom} prenom={prenom} ></Profil>
                        </Route>

                    </Switch>
                </div>
            </Router>
        </div>
    )
}