import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";

function Home() {

    const location = useLocation();
    const navigate = useNavigate();

    const user = () => location.state ? location.state.values.email : "usuario";

    return (
        <div className="main-body">
            <Navbar />

            <div className="center">
                <h1>Esta en casa señor, {user()}</h1>
            </div>

            <div className="footer">
                <p>Pugh Juan 6°4, EPET N°20</p>
            </div>

        </div>

    )

} export default Home;
