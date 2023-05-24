import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, selectAllProducts } from "../../stores/products/productsSlice";
import ProductDetailCard from "../../components/ProductDetailCard";
import { Tabs } from "../../components/Tabs";
import { addToCart } from "../../stores/cart/cartSlice";

const Products = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectAllProducts);
    const [activeTab, setActiveTab] = useState('');
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    const onAddProduct = (product) => {
        dispatch(addToCart(product))
    }

    const onTabSwitch = (newActiveTab) => {
        setActiveTab(newActiveTab);
        let categories = products.products.map((product) => product.name.name);
        let index = categories.findIndex(category => newActiveTab === category);
        console.log(index);
        if (index > -1) {
            setActiveTabIndex(index);
        } else {
            setActiveTabIndex(0);
        }
    }

    return (
        <div className="bg-white">
        {products.status !== 'fulfilled' ? (
          <div>loading...</div>
        ) : (
          <div className="menu-wrapper">
            {products.products && (
              <Tabs
                list={products.products.map((product) => product.name.name)}
                activeTab={activeTab}
                onTabSwitch={onTabSwitch}
              />
            )}
            <div className="flex flex-wrap mx-auto px-20 py-20">
              {products.products &&
                products.products[activeTabIndex].products.map((product, index) => {
                  return (
                    <div key={index} className="card w-1/3" >
                      <img
                        className="card-image"
                        src={product.imageUrl}
                        alt={product.name}
                        style={{ width: "200px", height: "250px", objectFit: "contain" }}
                      />
                      <div className="card-content">
                        <h3 className="card-title">{product.name}</h3>
                        <p className="card-price">{product.price}</p>
                        <button
                            className="card-button bg-yellow-400 hover:bg-yellow-600 text-white border-none py-2 px-4 rounded-lg text-base font-medium cursor-pointer"
                            onClick={() => onAddProduct(product)}>
                                             Add to Cart
                        </button>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        )}
      </div>
      
    )
}

export default Products;