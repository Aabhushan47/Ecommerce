import React, { useEffect, useState } from "react";
import axios from "axios";
import { InfinitySpin } from "react-loader-spinner";
import Card from "./Card";
import Carousel from "./Carousel";
import { Link } from "react-router-dom";

const CardContainer = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(12);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products`);
        console.log(response.data);
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    //simulate 2 second delay before fetching the data
    const delay = setTimeout(() => {
      fetchProducts();
      clearTimeout(delay);
    }, 2000);
  }, []);

  return (
    <>
      <header className="py-3 mb-4 border-bottom">
        <div className="container d-flex flex-wrap justify-content-center">
          <Link
            to="/"
            className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none"
          >
            <span className="fs-4">Ecommerce Demo</span>
          </Link>
          <form className="col-12 col-lg-auto mb-3 mb-lg-0" role="search">
            <input
              type="search"
              className="form-control"
              placeholder="Search..."
              aria-label="search"
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
        </div>
      </header>
      <Carousel />
      {loading ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "40vh" }}
        >
          <InfinitySpin width="200" color="#4fa94d" />
        </div>
      ) : (
        <div className="container-fluid">
          <div className="row row-cols-1 row-cols-md-4 g-4">
            {products
              .slice(0, limit)
              .filter((item) => {
                return (
                  search.toLowerCase() === "" ||
                  item.title.toLowerCase().startsWith(search.toLowerCase())
                );
              })
              .map((item, i) => (
                <Card key={i} data={item} />
              ))}
          </div>
          <div className="d-flex justify-content-center my-3">
            {limit < products.length && (
              <button
                className="btn btn-warning"
                onClick={() => setLimit(limit + 4)}
              >
                Show More
              </button>
            )}
            {limit > 8 && (
              <button
                className="btn btn-warning"
                onClick={() => setLimit(limit - 4)}
              >
                Show Less
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CardContainer;
