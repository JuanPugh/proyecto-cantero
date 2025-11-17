const Item = ({ product }: { product: any }) => {

    return (
        <div className="item">
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <p>{product.material}</p>
        </div>
    )
}; export default Item;