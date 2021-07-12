import React from 'react'
import Hom from '../images/web.png'

function Home() {
    return (
        <div className="container text-center">
            <h2 className="bleu-text mt-5">WELCOM TO</h2>
            <h1 className="bleu-text">Système de gestion de rendez-vous polyvalent</h1>
            <img src={Hom} alt="HOME" width="50%" height="50%"/>
        </div>
    )
}

export default Home
