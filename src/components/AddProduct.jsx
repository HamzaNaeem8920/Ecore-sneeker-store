export const AddProduct = ({ onAddProduct }) => {
    return (
        <div className="flex justify-end">
            <button onClick={onAddProduct} className="bg-yellow-400 hover:bg-yellow-700 rounded-full w-175 h-25 p-2 flex items-center justify-center text-md"><span>Add to cart</span></button>
        </div>
    )
}