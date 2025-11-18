import { useNavigate } from "react-router-dom"
import Button from "./button";
import { useState } from "react";
import { useAuth } from "./AuthContext";


export default function Navbar() {


    const { isLoggedIn, LogOut } = useAuth();
    const navigate = useNavigate();

    return (
        <nav>
            <h1>FERRETERIA PIU</h1>

            <div>
                <Button text="Inicio" className="rounded white-bg" onClick={() => navigate("/")} />
                <Button text="Productos" className="rounded white-bg" onClick={() => navigate("/products")} />

                {
                    !isLoggedIn ? <>
                        <Button text="Iniciar sesion" className="rounded white-bg" onClick={() => navigate("/login")} />
                        <Button text="Registrarse" className="rounded white-bg" onClick={() => navigate("/register")} />
                    </> :
                        <Button text="Cerrar sesion" className="rounded white-bg" onClick={LogOut} />
                }


            </div>

        </nav>
    );
}