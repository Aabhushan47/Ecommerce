import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = () => {
  const [products, setProducts] = useState({});
  const params = useParams();
  const id = params.productId;

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  //add to cart
  const addToCart = () => {
    //fetch from local storage if available else empty
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const productData = {
      id: products.id,
      title: products.title,
      price: products.price,
      description: products.description,
      image: products.image,
      quantity: 1,
    };
    const existingItem = cartItems.find((item) => item.id === productData.id);
    if (existingItem) {
      toast.error("Product already in the cart.");
    } else {
      cartItems.push(productData);
      localStorage.setItem("cart", JSON.stringify(cartItems));
      toast.success(`${products.title} is added to cart`);
    }
  };

  return (
    <>
      <ToastContainer theme="colored" position="top-center" />
      <div className="container">
        <div className="d-flex justify-content-evenly align-items-center">
          <div className="col-md-4">
            <img src={products.image} alt={products.title} width="400px" />
          </div>
          <div className="col-md-6">
            <h1>{products.title}</h1>
            <h2>${products.price}</h2>
            <h3>Category:{products.category}</h3>
            <p>{products.description}</p>
            <h3>
              Rating:{products.rating && products.rating.rate}(
              {products.rating && products.rating.count})
            </h3>
            <div className="my-3">
              <button className="btn btn-success" onClick={addToCart}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
