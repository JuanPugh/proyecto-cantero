import { useEffect, useState } from "react";
import ItemList from "./ItemList";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

const ItemListContainer = () => {

    const [products, setProducts] = useState<any[]>([]);

    useEffect(() => {

        const productsRef = collection(db, "products");
        getDocs(productsRef)
            .then((resp) => {

                setProducts(resp.docs.map((doc) => {
                    return { ...doc.data(), id: doc.id }
                }));
            });
    });


    return (
        <ItemList products={products} />
    )

}; export default ItemListContainer;