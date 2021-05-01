import React from 'react';
import '../App.css';
import axios from 'axios';
import swal from 'sweetalert';
import Navegacion from './Navegacion';
import PersonaCard from './PersonaCard';

export default function Personas(){

    const [personas, setPersonas] = React.useState([]);

    const getPersonas = async() => {
        try {
            const respuesta = await axios.get('http://localhost:3001/api/persona');
            console.log(respuesta);
            console.log(respuesta.data);

            setPersonas(respuesta.data);

        } catch (error) {
            swal("Info", error.response.data, "info");
        }
    };

    React.useEffect(()=>{
        getPersonas()
    }, []); //se ejecuta cada vez que se carga este componente


    const listado = personas.map((elem, i) => {
        return (
            <React.Fragment>
                <PersonaCard key={i} id={elem.Persona_id} nombre={elem.Nombre} apellido={elem.Apellido} alias={elem.Alias} email={elem.Email}/>
            </React.Fragment>
        )
    });

    return(
        <React.Fragment>
            <div className="contenedor contenedor-personas">
                <Navegacion />
                <div className="listado-personas">
                    <div className="encabezado">
                        <p>Id</p>
                        <p>Nombre</p>
                        <p>Apellido</p>
                        <p>Alias</p>
                        <p>Email</p>
                        <div className="acciones">
                            <p>Editar</p>
                            <p>Eliminar</p>
                        </div>
                    </div>
                    
                        {listado}


                </div>
            </div>
        </React.Fragment>
    )
}