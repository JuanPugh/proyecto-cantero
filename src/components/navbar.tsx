import { useNavigate } from "react-router-dom"
import Button from "./button";

export default function Navbar() {
    
    const navigate = useNavigate();

    return(
    <nav>
        <Button text="Log in" className="rounded white-bg" onClick={() => navigate("/login")}/>
        <Button text="Register" className="rounded white-bg" onClick={() => navigate("/register")}/>
    </nav>
    );
}