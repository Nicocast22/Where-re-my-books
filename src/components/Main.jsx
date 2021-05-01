import React from 'react';
import Navegacion from './Navegacion';
import '../App.css';
import {Link} from 'react-router-dom'


export default function Main(){
    return(
        <React.Fragment>
            <div className="hero">

            <Navegacion />

            <h1 className="titulo">Where're my books?</h1>

            </div>
        </React.Fragment>
    );
}

