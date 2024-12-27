import { useEffect, useState } from "react";
import "./css/hero.css";
import axios from "axios";
import Products from "./Products";

function Hero() {
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        const uniqueCategories = [...new Set(res.data.map((product) => product.category))];
        const uniqueBrands = [...new Set(res.data.map((product) => product.title.split(" ")[0]))]; 
        setCategories(uniqueCategories);
        setBrands(uniqueBrands);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleCategoryChange = (event, category) => {
    if (event.target.checked) {
      setSelectedCategories((prev) => [...prev, category]);
    } else {
      setSelectedCategories((prev) => prev.filter((cat) => cat !== category));
    }
  };

  const handleBrandChange = (event, brand) => {
    if (event.target.checked) {
      setSelectedBrands((prev) => [...prev, brand]);
    } else {
      setSelectedBrands((prev) => prev.filter((b) => b !== brand));
    }
  };

  const handleRatingChange = (event, rating) => {
    if (event.target.checked) {
      setSelectedRatings((prev) => [...prev, rating]);
    } else {
      setSelectedRatings((prev) => prev.filter((r) => r !== rating));
    }
  };

  return (
    <div className="hero">
      <div className="left-side">
        <div className="category">
          <p>Product Categories</p>
          <ul>
            {categories.map((category) => (
              <li key={category}>
                <label>
                  <input
                    type="checkbox"
                    onChange={(event) => handleCategoryChange(event, category)}
                    checked={selectedCategories.includes(category)}
                  />
                  {category}
                </label>
              </li>
            ))}
          </ul>
        </div>

        <div className="brand">
          <p>Product Brands</p>
          <ul>
            {brands.map((brand) => (
              <li key={brand}>
                <label>
                  <input
                    type="checkbox"
                    onChange={(event) => handleBrandChange(event, brand)}
                    checked={selectedBrands.includes(brand)}
                  />
                  {brand}
                </label>
              </li>
            ))}
          </ul>
        </div>

        <div className="rating">
          <p>Product Ratings</p>
          <ul>
            {[4, 3, 2, 1].map((rating) => (
              <li key={rating}>
                <label>
                  <input
                    type="checkbox"
                    onChange={(event) => handleRatingChange(event, rating)}
                    checked={selectedRatings.includes(rating)}
                  />
                  {rating}+ Stars
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="right-side">
        <Products
          categories={selectedCategories}
          brands={selectedBrands}
          ratings={selectedRatings}
        />
      </div>
    </div>
  );
}

export default Hero;


