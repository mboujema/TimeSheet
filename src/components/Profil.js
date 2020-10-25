import React from 'react'

export default function Profil({ nom, prenom }) {

    return (

        <div id="card">
            <div class="card">
                <div class="card-picture">
                    <div class="fill-qr-code">
                        <a href="#">
                            <div class="icon icon-1">
                                <i class="fa fa-qrcode" aria-hidden="true"></i>
                            </div>
                        </a>
                    </div>
                    <div class="fill-social-picture">
                        <a href="#">
                            <div class="icon icon-1">
                                <i class="fa fa-linkedin" aria-hidden="true"></i>
                            </div>
                        </a>
                        <a href="https://github.com/GrimLaurent" target="_blank">
                            <div class="icon icon-2">
                                <i class="fa fa-github" aria-hidden="true"></i>
                            </div>
                        </a>
                        <a href="https://twitter.com/GrimLaurent" target="_blank">
                            <div class="icon icon-3">
                                <i class="fa fa-twitter" aria-hidden="true"></i>
                            </div>
                        </a>
                    </div>
                    <img src="https://api.laminedelaurent.dev/picture/user_asian1.png" alt="img" />
                </div>

                <div id="card-name">
                    <p class="name">Hey, je suis Lalattyna</p>
                    <p class="description">Je suis une <strong style="color: #F50057;">Otaku</strong> et <strong style="color: #2979FF;">Développeuse Front-End</strong> qui cherche le Graal</p>
                </div>
            </div>
        </div>

    )
}