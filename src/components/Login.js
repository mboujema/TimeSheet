import React, { useState,Component } from 'react'
import NavBar from './navbar'

export default function Login({bouton,modifBouton}) {

    const [change4, setChange4] = useState('disparition')
    const [change5, setChange5] = useState('disparition')

    const enlever = (e) => {
        e.preventDefault()
        setChange4("nav__cont")
        modifBouton('disparition')
        setChange5('boddy')
    }

    return (

        <div >
            <NavBar bouton2 = {change4} bouton3 = {change5} modifBouton2 = {setChange5}></NavBar>

            <section className = {bouton}>

                <div>
                    <div className="container">

                        <div className="columns is-centered">
                            <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                                <form action="" className="box">
                                    <div className="field">
                                        <label for="" className="label">Nom</label>
                                        <div className="control has-icons-left">
                                            <input type="text" placeholder="..............." className="input" required />

                                        </div>
                                    </div>
                                    <div className="field">
                                        <label for="" className="label">Prenom</label>
                                        <div className="control has-icons-left">
                                            <input type="text" placeholder="..............." className="input" required />

                                        </div>
                                    </div>
                                    <div className="field">
                                        <label for="" className="label">Password</label>
                                        <div className="control has-icons-left">
                                            <input type="password" placeholder="*********" className="input" required />
                                            <span className="icon is-small is-left">
                                                <i className="fa fa-lock"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label for="" className="checkbox">
                                            <input type="checkbox" className='mr-2' />
                                                    Confirmer
                                    </label>
                                    </div>
                                    <div className="field">
                                        <button onClick = {(e) => enlever(e)} className="button is-info">
                                            S'inscrire
                                    </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </div>


    )
}