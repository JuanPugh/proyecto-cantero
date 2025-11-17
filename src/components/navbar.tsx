import { useNavigate } from "react-router-dom"
import Button from "./button";

export default function Navbar() {

    const navigate = useNavigate();

    return (
        <nav>
            <h1>FERRETERIA PIU</h1>

            <div>
                <Button text="Iniciar sesion" className="rounded white-bg" onClick={() => navigate("/login")} />
                <Button text="Registrarse" className="rounded white-bg" onClick={() => navigate("/register")} />
            </div>

        </nav>
    );
}