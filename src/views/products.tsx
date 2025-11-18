import { Navigate } from "react-router-dom";
import Navbar from "../components/navbar";
import ItemListContainer from "../components/ItemListContainer";
import { useAuth } from "../components/AuthContext";


function Products() {

    const { isLoggedIn } = useAuth();

    if (!isLoggedIn) {
        return (<Navigate replace={true} to="/login" />)
    }


    return (
        <div className="main-body">
            <Navbar />
            <div className="center">

                <div className="flex-vertical">
                    <h1 style={{ paddingTop: "20px" }}>Productos</h1>
                    <ItemListContainer />
                </div>


            </div>

            <div className="footer">
                <p>Pugh Juan 6°4, EPET N°20</p>
            </div>

        </div >

    )

} export default Products;
