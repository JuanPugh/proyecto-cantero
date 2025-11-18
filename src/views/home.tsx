import { Navigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext";
import Navbar from "../components/navbar";

function Home() {

    const { isLoggedIn } = useAuth();

    if (!isLoggedIn) {
        return (<Navigate replace={true} to="/login" />)
    }


    return (
        <div className="main-body">
            <Navbar />

            <div className="center">
                <div className="flex-vertical column">
                    <h1>Bienvenido a la Ferreteria Piu</h1>
                    <p>La ferretería Piu comenzó como un pequeño local familiar atendido por Don Ricardo Piu, un apasionado de las herramientas pero sin experiencia digital. Durante años funcionó con una libreta de pedidos, precios anotados a mano y clientes del barrio que ya eran casi de la familia.</p>
                    <p>En 2024, su nieto Martín, estudiante de programación, decidió ayudar a modernizar el negocio. Primero digitalizó el inventario en una simple planilla y después se animó a algo más grande: crear la primera página web de la ferretería. Con fotos caseras, un catálogo básico y un formulario de contacto, la web se volvió rápidamente un puente entre la tradición del local y los clientes modernos.</p>
                    <p> La “humilde Ferretería Piu” pasó de vender solo a vecinos cercanos a recibir consultas de toda la ciudad. Aunque el local sigue siendo pequeño, su página web marcó el inicio de una nueva etapa, demostrando que incluso los negocios más modestos pueden reinventarse sin perder su esencia.</p>

                </div>
            </div>

            <div className="footer">
                <p>Pugh Juan 6°4, EPET N°20</p>
            </div>

        </div>

    )

} export default Home;
