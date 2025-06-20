import { useLocation, useNavigate } from "react-router-dom";

function Home() {

    const location = useLocation();
    const navigate = useNavigate();

    const user = () => location.state? location.state.values.email: "usuario";

    return (
        <div className="main-body">
            <nav>
                <button className="rounded white-bg" onClick={() => navigate("/login")}>
                Log in
                </button>

                <button className="rounded white-bg" onClick={() => navigate("/register")}>
                Register
                </button>
            </nav>
            
            <div className="center">
                <h1>Esta en casa señor, { user() }</h1>
            </div>

            <div className="footer">
                <p>Pugh Juan 6°4, EPET N°20</p>
            </div>
            
        </div>
        
    )

} export default Home;
 