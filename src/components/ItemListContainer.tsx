import { useEffect, useState } from "react";
import data from "../data/products.json"
import ItemList from "./ItemList";

const ItemListContainer = () => {

    const [products, setProducts] = useState<any[]>([]);

    const fetchProducts = () => {

        return new Promise<any[]>((resolve, reject) => {
            resolve(data);
        })

    }



    useEffect(() => {
        fetchProducts()
            .then((res: any[]) => {
                setProducts(res);
                console.log(products);
            });
    }, []);


    return (
        <ItemList products={products} />
    )

}; export default ItemListContainer;