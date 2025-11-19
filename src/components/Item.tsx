import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import Button from "./button";
import { useAuth } from "./AuthContext";

function DeleteItem(id: any) {

    deleteDoc(doc(db, "products", id))
    .then(() => {
        console.log("Product deleted");
    })
    .catch(err => console.error(err));

}

const Item = ({ product }: { product: any }) => {

    const { user } = useAuth();

    return (
        <div className="item">
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <p>Material: {product.material}</p>
            <p>{product.description}</p>
            
            {
                user?.isAdmin &&
                <Button text="Eliminar producto" className="rounded white-bg" onClick={ () => DeleteItem(product.id) } />
                
            }   


        </div>
    )
}; export default Item;