import React, { useState } from "react";
import Input from "../components/input";
import { useNavigate, Link, Navigate } from "react-router-dom";
import Button from "../components/button";
import Navbar from "../components/navbar";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { useAuth, User } from "../components/AuthContext";


function Register() {

    const { setUser } = useAuth();

    const [values, setValues] = useState({

        name: "",
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

        const usersRef = collection(db, "users");
        const userData = {
            ...values,
        }


        addDoc(usersRef, {...userData, isAdmin: false}).then((doc) => {
            setUser(userData as User)
        });

        return (<Navigate replace={true} to="/login" />)
    }

    return (


        <>
            <Navbar />

            <form onSubmit={handleSubmit} className="flex-vertical">

                <h1 className="title">Register</h1>

                <Input name="Name" onChange={handleChange} type="text" />
                <Input name="Email" onChange={handleChange} type="email" />
                <Input name="Password" onChange={handleChange} type="password" />

                <Button text="Registrar" type="submit" className="submit rounded white-bg" />


                <div className="form-switch">
                    <p>Ya tienes una cuenta?</p>
                    <Link to="/login">Inicia sesion!</Link>
                </div>


            </form>
        </>
    )

} export default Register;
