import { Navigate } from "react-router-dom";
import Navbar from "../components/navbar";
import ItemListContainer from "../components/ItemListContainer";
import { useAuth } from "../components/AuthContext";
import Button from "../components/button";
import { useNavigate } from "react-router-dom";


function Products() {

    const { isLoggedIn, user } = useAuth();

    if (!isLoggedIn) {
        return (<Navigate replace={true} to="/login" />)
    }

    const navigate = useNavigate();


    return (
        <div className="main-body">
            <Navbar />
            <div className="center">

                <div className="flex-vertical">

                    <div className="flex-between">
                        <h1 style={{ paddingTop: "20px" }}>Productos</h1>
                        {
                            user?.isAdmin && 
                            <Button text="Añadir productos" className="rounded white-bg" onClick={() => {
                                navigate("/products/add")
                            }} />
                            
                        }
                    </div>
                    <ItemListContainer />
                </div>


            </div>

            <div className="footer">
                <p>Pugh Juan 6°4, EPET N°20</p>
            </div>

        </div >

    )

} export default Products;
