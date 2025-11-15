import React, {useState} from "react";
import Input from "../components/input";
import Button from "../components/button";
import { useNavigate, Link } from "react-router-dom";

function Login() {

    const [values, setValues] = useState({

        email: "",
        password: ""
    });


    const handleChange = (e: any) => {

        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: value
        });

    }

    const navigate = useNavigate();

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if(values.email.trim() != "" && values.password.trim() != "") {

            console.log("Datos enviados: ", values);
            navigate("/", { state: {values}});
        } else {
            alert("Debe ingresar datos en todos los campos");
        }

    }



    return (
        <form onSubmit={handleSubmit} className="flex-vertical">

            <h1 className="title">Log in</h1>

            <Input name="Email" onChange={handleChange} type="email"/>
            <Input name="Password" onChange={handleChange} type="password"/>

            <Button text="Iniciar sesion" type="submit" className="submit rounded white-bg"/>

            <div className="form-switch">
                <p>No tienes una cuenta? </p>
                <Link to="/register">Crea una!</Link>
            </div>
            

        </form>
    )

} export default Login;
 