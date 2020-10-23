import React from 'react'

export default function Login({ bouton }) {

    return (

        <div>
            <section className={bouton}>
                
                <div>
                    <div className="container">


                        <div className="columns is-centered">
                            <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                                <form action="" className="box">
                                    <div className="field">
                                        <label for="" className="label">Nom</label>
                                        <div className="control has-icons-left">
                                            <input type="text" placeholder="..............." className="input" required />
                                            <span className="icon is-small is-left">
                                                <i className="fa fa-envelope"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label for="" className="label">Prenom</label>
                                        <div className="control has-icons-left">
                                            <input type="text" placeholder="..............." className="input" required />
                                            <span className="icon is-small is-left">
                                                <i className="fa fa-envelope"></i>
                                            </span>
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
                                                    Remember me
                                    </label>
                                    </div>
                                    <div className="field">
                                        <button className="button is-success">
                                            Login
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