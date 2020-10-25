import React from 'react'

export default function Profil({ nom, prenom }) {

    return (

        <div>
            <div className='proffil'>
                {/* Card */}
                <div id="card">
                    <div className="card">
                        <div className="card-picture">
                            
                            <div className="fill-social-picture">
                                
                                <a href="https://github.com/oussamaghzl" target="_blank">
                                    <div className="icon icon-2">
                                        <i className="fa fa-github" aria-hidden="true" />
                                    </div>
                                </a>
                                <a href="https://twitter.com/Le_ghezaal" target="_blank">
                                    <div className="icon icon-3">
                                        <i className="fa fa-twitter" aria-hidden="true" />
                                    </div>
                                </a>
                            </div>
                            <img src="./img/user.jpg" alt="img" />
                        </div>{/* /card-picture */}
                        <div id="card-name">
                            <p className="name">Bienvenue, {nom} {prenom}</p>
                            <p className="description">Je suis un Developpeur Web plutot énerve si dessus vous pouvez me retrouver et me contacter ! </p>
                        </div>{/* /card-name */}
                    </div>
                </div>
            </div>
        </div>
    )
}