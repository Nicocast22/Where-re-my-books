import React from 'react'
import '../App.css';
import {Link} from 'react-router-dom'

function desplegarSubmenu(id){
    const submenu = document.getElementById(id);
    const padre = submenu.previousSibling;

    submenu.style.height = submenu.scrollHeight + "px";
    padre.style.backgroundColor = "rgb(0, 110, 161)";
}

function contraerSubmenu(id){
    const submenu = document.getElementById(id);
    submenu.style.height = 0 + "px";

    const padre = submenu.previousSibling;
    padre.style.backgroundColor = "rgb(0, 0, 77)";
}


export default function Navegacion(){
    return(
            <div className="navegacion">
                <ul className="menu">
                    <li><p><Link to="/" id="home">Home</Link></p></li>
                    <li onMouseLeave={()=>contraerSubmenu("personas")} onMouseEnter={()=>desplegarSubmenu("personas")}><p>Personas</p>
                        <ul id="personas" className="submenu">
                            <li><Link to="/NuevaPersona"><p>Ingresar una persona nueva</p></Link></li>
                            <li><Link to="/Personas"><p>Ver todas las personas</p></Link></li>
                            <li><p>Ver libros por persona</p></li>
                        </ul>
                    </li>
                    <li onMouseLeave={()=>contraerSubmenu("generos")} onMouseEnter={()=>desplegarSubmenu("generos")}><p>Géneros</p>
                        <ul id="generos" className="submenu">
                                <li><p>Ingresar un género nuevo</p></li>
                                <li><p>Ver todas los géneros</p></li>
                                <li><p>Ver libros por género</p></li>
                            </ul>
                    </li>
                    <li onMouseLeave={()=>contraerSubmenu("libros")} onMouseEnter={()=>desplegarSubmenu("libros")}><p>Libros</p>
                        <ul id="libros" className="submenu">
                                <li><p>Ingresar un libro nuevo</p></li>
                                <li><p>Ver todos los libros</p></li>
                            </ul>
                    </li>
                </ul>
            </div>
    )
}