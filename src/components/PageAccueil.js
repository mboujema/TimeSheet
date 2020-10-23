import React, { useRef, useState } from 'react'
import Login from './Login'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";



export default function PageAccueil() {

    const [change, setChange] = useState('container')
    const [change2, setChange2] = useState('disparition')

    const changement = () => {
        setChange('disparition')
        setChange2('hero is-fullheight')
        
    }

    return (
        <div>

            <div className={change}>
                <span className="primary">Bienvenue sur</span>
                <span className="secondary">Time2Work</span>
                <button onClick={changement} className="tertiary">enter</button>
            </div>
            <Login bouton = {change2}></Login>

        </div>


    )
}