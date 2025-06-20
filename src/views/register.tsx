import React, {useState} from "react";
import Input from "../components/input";
import { useNavigate, Link } from "react-router-dom";

function Register() {

   // const days = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];    
   // const activities = ["Cocinar", "Despertar", "Entrenar", "Limpiar", "Darle de comer a los perros"];

    const navigate = useNavigate();

    const [values, setValues] = useState({

        name: "",
        surname: "",
        email: "",
        password: ""
    })

    const handleChange = (e: any) => {

        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: value
        });

    }

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if(values.name.trim() != "" && values.surname.trim() != "" && 
        values.email.trim() != "" && values.password.trim() != "") {

            console.log("Datos enviados: ", values);
            navigate("/");
        } else {
            alert("Debe ingresar datos en todos los campos");
        }
    }

    return (

            <form onSubmit={handleSubmit} className="flex-vertical">

                <h1 className="title">Register</h1>

                <Input name="Name" onChange={handleChange} type="text"/>
                <Input name="Surname" onChange={handleChange} type="text"/>
                <Input name="Email" onChange={handleChange} type="email"/>
                <Input name="Password" onChange={handleChange} type="password"/>

                <button type="submit" className="submit rounded white-bg">
                Enviar datos!
                </button>

                <div className="form-switch">
                    <p>Ya tienes una cuenta?</p>
                    <Link to="/login">Inicia sesion!</Link>
                </div>


            </form>
    )

} export default Register;
 