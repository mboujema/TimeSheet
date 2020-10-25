import React, { useRef, useState } from 'react';

export default function Timesheet({ prenomm, nomm }) {

    const temps = useRef(null)
    const temps1 = useRef(null)
    const temps2 = useRef(null)
    const temps3 = useRef(null)
    const temps4 = useRef(null)
    const temps5 = useRef(null)
    const temps6 = useRef(null)

    const tempsa = useRef(null)
    const tempsa1 = useRef(null)
    const tempsa2 = useRef(null)
    const tempsa3 = useRef(null)
    const tempsa4 = useRef(null)
    const tempsa5 = useRef(null)
    const tempsa6 = useRef(null)


    const [rep1, setRep1] = useState("0")
    const [rep2, setRep2] = useState("0")
    const [rep3, setRep3] = useState("0")
    const [rep4, setRep4] = useState("0")
    const [rep5, setRep5] = useState("0")
    const [rep6, setRep6] = useState("0")
    const [rep7, setRep7] = useState("0")


    const [repa1, setRepa1] = useState("0")
    const [repa2, setRepa2] = useState("0")
    const [repa3, setRepa3] = useState("0")
    const [repa4, setRepa4] = useState("0")
    const [repa5, setRepa5] = useState("0")
    const [repa6, setRepa6] = useState("0")
    const [repa7, setRepa7] = useState("0")

    const Sommeheure = (temp, tempa, rep,repa) => {

        const heure = temp.current.valueAsNumber
        const heurea = tempa.current.valueAsNumber
        const rep1 = (heure - heurea) / 3.6e+6
        const rep2 = rep1*9
        rep(Math.floor(rep1))
        repa(Math.floor(rep2))
        
        
    }

    return (
        <div className='container'>

            <h1 className="Titre">TIMESHEET</h1>
            
            <div className="columns">
                <div className="column">DAY
                <ul className="mesUl">
                        <li className="mesLi">Lundi</li>
                        <li className="mesLi">Mardi</li>
                        <li className="mesLi">Mercredi</li>
                        <li className="mesLi">Jeudi</li>
                        <li className="mesLi">Vendredi</li>
                        <li className="mesLi">Samedi</li>
                        <li className="mesLi">Dimanche</li>
                    </ul>
                </div>
                <div className="column">DATE
                <ul className="mesUl">
                        <li className="mesLi"><input type="date" /></li>
                        <li className="mesLi"><input type="date" /> </li>
                        <li className="mesLi"><input type="date" /> </li>
                        <li className="mesLi"><input type="date" /> </li>
                        <li className="mesLi"><input type="date" /> </li>
                        <li className="mesLi"><input type="date" /> </li>
                        <li className="mesLi"><input type="date" /> </li>
                    </ul>
                </div>
                <div className="column">TIME IN
                <ul className="mesUl">
                        <li className="mesLi"><input ref={tempsa} type="time" /></li>
                        <li className="mesLi"><input ref={tempsa1} type="time" /></li>
                        <li className="mesLi"><input ref={tempsa2} type="time" /></li>
                        <li className="mesLi"><input ref={tempsa3} type="time" /></li>
                        <li className="mesLi"><input ref={tempsa4} type="time" /></li>
                        <li className="mesLi"><input ref={tempsa5} type="time" /></li>
                        <li className="mesLi"><input ref={tempsa6} type="time" /></li>
                    </ul>
                </div>

                <div className="column">TIME OUT
                <ul className="mesUl">
                        <li className="mesLi"><input ref={temps} type="time" /></li>
                        <li className="mesLi"><input ref={temps1} type="time" /></li>
                        <li className="mesLi"><input ref={temps2} type="time" /></li>
                        <li className="mesLi"><input ref={temps3} type="time" /></li>
                        <li className="mesLi"><input ref={temps4} type="time" /></li>
                        <li className="mesLi"><input ref={temps5} type="time" /></li>
                        <li className="mesLi"><input ref={temps6} type="time" /></li>
                    </ul>
                </div>

                <div className="column">CALCUL
                <ul className="mesUl">
                        <li className="mesLi"><button onClick={() => Sommeheure(temps, tempsa, setRep1,setRepa1 )}>=</button></li>
                        <li className="mesLi"><button onClick={() => Sommeheure(temps1, tempsa1, setRep2,setRepa2)}>=</button></li>
                        <li className="mesLi"><button onClick={() => Sommeheure(temps2, tempsa2, setRep3,setRepa3)}>=</button></li>
                        <li className="mesLi"><button onClick={() => Sommeheure(temps3, tempsa3, setRep4,setRepa4)}>=</button></li>
                        <li className="mesLi"><button onClick={() => Sommeheure(temps4, tempsa4, setRep5,setRepa5)}>=</button></li>
                        <li className="mesLi"><button onClick={() => Sommeheure(temps5, tempsa5, setRep6,setRepa6)}>=</button></li>
                        <li className="mesLi"><button onClick={() => Sommeheure(temps6, tempsa6, setRep7,setRepa7)}>=</button></li>
                    </ul>
                </div>


                <div className="column">TOTAL HOURS
                <ul className="mesUl">
                        <li className="mesLi">{rep1}</li>
                        <li className="mesLi">{rep2}</li>
                        <li className="mesLi">{rep3}</li>
                        <li className="mesLi">{rep4}</li>
                        <li className="mesLi">{rep5}</li>
                        <li className="mesLi">{rep6}</li>
                        <li className="mesLi">{rep7}</li>
                    </ul>
                </div>
                <div className="column">MONEY WIN
                <ul className="mesUl">
                        <li className="mesLi">{repa1} €</li>
                        <li className="mesLi">{repa2} €</li>
                        <li className="mesLi">{repa3} €</li>
                        <li className="mesLi">{repa4} €</li>
                        <li className="mesLi">{repa5} €</li>
                        <li className="mesLi">{repa6} €</li>
                        <li className="mesLi">{repa7} €</li>
                    </ul>
                </div>
            </div>
            <h5>Ils sont payer 9€ de l'heure.</h5>
        </div>
    )

}