import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

const Carousel = (props) => {
  const [products, setProducts] = useState([]);
  const [limit] = useState(8);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        className="carousel carousel-dark slide"
        data-bs-ride="true"
      >
        <div className="carousel-inner">
          {products.slice(0, limit).map((item, i) => (
            <div key={i} className={`carousel-item ${i === 0 && "active"}`}>
              <img
                src={item.image}
                className="d-block w-100"
                alt={item.title}
              />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
