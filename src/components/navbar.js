import React from 'react';

export default function NavBar({bouton2}) {
    
        return (
            <div >
                <header>
                    <nav class={bouton2}>
                        <div className="logodiv">
                            <img className="imglogo" src="./img/blacklogo.png" alt="" />
                            <h1 className="logo">Time2<span className="redwork">Work</span></h1>
                        </div>

                        <ul class="nav">
                            <li className="nav__items ">
                                <i className="fas fa-home"></i>
                                <a href="">Acceuil</a>
                            </li>

                            <li class="nav__items ">
                                <i className="fas fa-user"></i>
                                <a href="">Profil</a>
                            </li>

                            <li className="nav__items ">
                                <i className="fas fa-calendar-alt"></i>
                                <a href="">TimeSheet</a>
                            </li>

                            <li class="nav__items ">
                                <i className="fas fa-moon"></i>
                                <div className="divbtn">
                                    <i className="fas fa-sun"></i>
                                    <div className="row press">
                                        <input type="checkbox" id="unchecked" class="cbx hidden" />
                                        <label for="unchecked" className="lbl"></label>
                                    </div>
                                    <i className="fas fa-cloud-moon"></i>
                                </div>
                            </li>
                        </ul>
                        
                    </nav>
                </header>
            </div>
        )
    
}