import React, { useRef, useState } from 'react'
import Login from './Login'



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
                <span className="secondary">Time2<b className='has-text-white'>Work</b></span>
                <button onClick={changement} className="tertiary">Creer un compte Time2Work</button>
            </div>
            <Login bouton = {change2} modifBouton = {setChange2}></Login>

        </div>

    )
}