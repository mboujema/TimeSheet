import React from 'react'
import Clock from './Clock.js'

export default function Home() {
    let video = "./video/bg.mp4"
    return (

        <div className="kwd">

            <div className="divlogo">
                <img className="imglogo2" src="./img/blanclogo.png" alt="" />
            </div>


            <div className="info">
                <h1 className="logo2">Time2<span className="redwork2">Work</span></h1>
                <h2 className="titre1">Que Peux-tu faires sur notre TimeSheet ?</h2>
                <p className="pext">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad fuga aliquam vero hic dolores consequuntur nam laborum vel ut numquam nisi obcaecati fugiat facere totam commodi porro qui quibusdam impedit, alias error rerum deleniti? Quos quam ullam odio ducimus, maxime magni. Quisquam, rerum neque quas id vel laboriosam ab accusamus.</p>
            </div>
            <img className = "test" src="./img/heure.png" alt="" />
            <Clock />
        </div>
    )
}