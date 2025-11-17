import Item from "./Item";

const ItemList = ({ products }: { products: any[] }) => {

    return (
        <div className="itemList">
            {
                products.length > 0 &&

                products.map((product) => {

                    return (
                        <Item key={product.id} product={product} />
                    )

                })


            }
        </div>
    )


}; export default ItemList;