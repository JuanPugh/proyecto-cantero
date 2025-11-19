import React, { useState, useEffect } from "react";
import Input from "../components/input";
import Button from "../components/button";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../components/navbar";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";
import { useAuth, User } from "../components/AuthContext";


function Login() {

    const { LogIn, setUser } = useAuth();


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

        const usersRef = collection(db, "users");
        const q = query(usersRef, where("email", "==", values.email), where("password", "==", values.password));

        getDocs(q)
            .then((resp) => {

                if (resp.docs.length > 0) {
                    
                    const userData = resp.docs[0].data(); 
                    setUser(userData as User);
                    LogIn();
                    navigate("/");
                } else {
                    alert("No tienes una cuenta!")
                }
            });

    }



    return (
        <>

            <Navbar />



            <form onSubmit={handleSubmit} className="flex-vertical">

                <h1 className="title">Log in</h1>

                <Input name="Email" onChange={handleChange} type="email" />
                <Input name="Password" onChange={handleChange} type="password" />

                <Button text="Iniciar sesion" type="submit" className="submit rounded white-bg" />

                <div className="form-switch">
                    <p>No tienes una cuenta? </p>
                    <Link to="/register">Crea una!</Link>
                </div>


            </form>
        </>

    )

} export default Login;
