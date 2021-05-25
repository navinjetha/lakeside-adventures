import "./HomeScreen.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import Product from "../components/Product";

//Actions
import { getProducts as listProducts } from "../redux/actions/productActions";

function HomeScreen() {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="homescreen">
      <h2 className="homescreen__title" align="centre">Available Adventures</h2>
      <div className="homescreen__products">
      
        {loading ? (
          <h2>Loading...</h2>
         ) : error ? ( 
          <h2>{error}</h2>
          ) : (
            products.map((product) => (
            <Product 
              key={product._id}
              productId={product._id}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
              
            />
          ))
        )}
      </div>
    </div>
  );
};

export default HomeScreen;

