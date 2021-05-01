import React from 'react'
import '../App.css';
import {Link} from 'react-router-dom'


export default function EditarPersona(props){

    const [persona, setPersona] = React.useState('');

    const mostrar = ()=>{
        console.log(this.props.history);
    };

    React.useEffect(()=>{
        mostrar();
    }, []);

    return(
        <React.Fragment>
            <h1>Id:{props.id}</h1>
        </React.Fragment>
    )
}