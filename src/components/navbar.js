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

export default function NavBar({ bouton2 ,bouton3,nom ,prenom}) {


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
                                    <i className="fas fa-sun"></i>
                                    <div className="row press">
                                        <input type="checkbox" id="unchecked" className="cbx hidden" />
                                        <label for="unchecked" className="lbl"></label>
                                    </div>
                                    <i className="fas fa-cloud-moon"></i>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </header>
                <div className = {bouton3}>
                    
                    <Switch>

                        <Route path='/Timesheet'>
                            <Timesheet nomm = {nom} prenomm = {prenom} ></Timesheet>
                        </Route>

                        <Route path = '/home' >
                            <Home></Home>
                        </Route>

                        <Route path = '/Profil' >
                            <Profil nom = {nom} prenom = {prenom} ></Profil>
                        </Route>
                        
                    </Switch>
                </div>
            </Router>
        </div>
    )
}