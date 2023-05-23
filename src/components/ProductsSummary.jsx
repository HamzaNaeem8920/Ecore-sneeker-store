import { useSelector } from "react-redux";
import { cartProducts } from "../stores/cart/cartSlice";
import { ProductsSummaryCard } from "./ProductSummaryCard";

export const ProductsSummary = () => {
    const cart = useSelector(cartProducts);

    return (
        <div className="grid mx-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cart &&
          cart.map((product, index) => {
            return (
              <div key={index}>
                <ProductsSummaryCard product={product} />
              </div>
            );
          })}
      </div>
    )
}