import { AddProduct } from "./AddProduct";

export const ProductPreviewCard = ({ product, onAddProduct }) => {

    const addProduct = () => {
        onAddProduct(product)
    }

    return (
        <div className="w-250 h-100 p-10 m-auto rounded text-white bg-gradient-to-b from-slate-600 to-slate-25 text-center">
            <img src={product.imageUrl} alt={product.name} />
            <h2 className="pb-2 text-lg">{product.name}</h2>
            <h3 className="pb-2 text-lg">{product.price}</h3>
            
            <AddProduct onAddProduct={addProduct} />
        </div>
    )
}