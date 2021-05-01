import React from 'react';
import '../App.css';
import axios from 'axios';
import swal from 'sweetalert';
import Navegacion from './Navegacion';


export default function NuevaPersona(props){
    
    const [nombre, setNombre] = React.useState('');
    const [apellido, setApellido] = React.useState('');
    const [alias, setAlias] = React.useState('');
    const [email, setEmail] = React.useState('');

    const handleNombre = (e) => {
        setNombre(e.target.value);
    };

    const handleApellido = (e) => {
        setApellido(e.target.value);
    };
        
    const handleAlias = (e) => {
        setAlias(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };


    const enviarDatos = async() => {
        
            const persona = {
                "nombre": nombre,
                "apellido": apellido,
                "email": email,
                "alias": alias
            };
        
        try {
            const respuesta = await axios.post('http://localhost:3001/api/persona', persona);
            
            console.log(respuesta)
            swal(nombre + " " + apellido, "ha sido agregada/o correctamente!","success");

            
            setNombre('');
            setApellido('');
            setEmail('');
            setAlias('');

        } catch (error) {
            console.log(error.response);
            console.log(error.response.data);
            swal("Ha ocurrido un error", error.response.data, "error");
        }
    };

    return(
        <React.Fragment>
            <div className="contenedor contenedor-nueva-persona">

                
                <Navegacion />

                <div className="formulario-persona">
                    <h1>Ingresar los siguientes datos para registrar una nueva persona</h1>
                    
                    <form action="/api/persona" method="POST" className="form">
                        <div className="entrada">
                            <label htmlFor="nombre">Nombre</label>
                            <input type="text" name="nombre" id="nombre" value={nombre} onChange={handleNombre}/>
                        </div>

                        <div className="entrada">
                            <label htmlFor="apellido">Apellido</label>
                            <input type="text" name="apellido" id="apellido" value={apellido} onChange={handleApellido}/>
                        </div>

                        <div className="entrada">
                            <label htmlFor="alias">Alias</label>
                            <input type="text" name="alias" id="alias" value={alias} onChange={handleAlias}/>
                        </div>

                        <div className="entrada">
                            <label htmlFor="email">E-mail</label>
                            <input type="email" name="email" id="email" value={email} onChange={handleEmail}/>
                        </div>

                        <div className="submit">
                            <input type="button" name="enviar" id="enviar" value="Enviar" onClick={enviarDatos}/>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}