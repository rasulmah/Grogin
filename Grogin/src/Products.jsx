import PropTypes from "prop-types";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";

const Products = ({ categories, brands, ratings }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setFilteredProducts(res.data); 
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    let filtered = products;

    if (categories.length > 0) {
      filtered = filtered.filter((product) => categories.includes(product.category));
    }

    if (brands.length > 0) {
      filtered = filtered.filter((product) =>
        brands.some((brand) => product.title.startsWith(brand))
      );
    }

    if (ratings.length > 0) {
      filtered = filtered.filter((product) =>
        ratings.some((rating) => Math.floor(product.rating?.rate) >= rating)
      );
    }

    setFilteredProducts(filtered);
  }, [categories, brands, ratings, products]);

  return (
    <div className="products-container">
      {filteredProducts.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

Products.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
  brands: PropTypes.arrayOf(PropTypes.string),
  ratings: PropTypes.arrayOf(PropTypes.number),
};

export default Products;


