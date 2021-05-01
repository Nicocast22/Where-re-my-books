import React from "react"
import {Link , Redirect} from 'react-router-dom'
import { BrowserRouter as Router, Route, Push } from 'react-router-dom';
import EditarPersona from './EditarPersona'
import swal from 'sweetalert';
import axios from "axios";

export default function PersonaCard(props){

    const deletePersona = (id, nombre, apellido) =>{

        swal({
            title: "¿Esta seguro que desea eliminar a: " + nombre + " " + apellido + "?",
            text: "",
            icon: "warning",
            buttons: {
                cancel: "Cancelar",
                true: "Borrar",
            },
          })
          .then(async(willDelete) => {
            if (willDelete) {

                try {

                    const respuesta = await axios.delete(`http://localhost:3001/api/persona/${id}`);

                    swal(nombre + " " + apellido ,"ha sido eliminado", {
                        icon: "success",
                      });   
                } catch (error) {
                    console.log(error.response.data);
                    swal("Ha ocurrido un error",error.response.data,"error");
                }
            }
          });
    };

    return(
        <div className="personas">
            <p>{props.id}</p>
            <p>{props.nombre}</p>
            <p>{props.apellido}</p>
            <p>{props.alias}</p>
            <p>{props.email}</p>
            <div className="acciones">
                <div className="edit">
                    <p><i class="fas fa-edit"></i></p>
                </div>
                <div className="delete">
                    <p><i class="fas fa-trash-alt" onClick={()=>deletePersona(props.id, props.nombre, props.apellido)}></i></p>
                </div>
            </div>
        </div>
    )
}