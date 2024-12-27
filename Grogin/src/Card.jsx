import PropTypes from "prop-types";
import './css/card.css'

function Card({ product }) {
  if (!product) {
    return null; 
  }

  return (
    <div className="product-wrapper">
  <div className="product-inner">
    <div className="thumbnail-wrapper">
      <img
        src={product.image || "https://via.placeholder.com/150"} 
        alt={product.title || "Product Image"} 
        className="thumbnail"
      />
    </div>
    <div className="content-wrapper">
      <div className="product-heading">{product.title || "Untitled Product"}</div>
      <div className="product-price">${product.price || "N/A"}</div>
      <div className="product-rating">
        Rating: {product.rating?.rate || "N/A"} ⭐ ({product.rating?.count || 0} reviews)
      </div>
    </div>
  </div>
</div>

  );
}


Card.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired, 
    price: PropTypes.number.isRequired, 
    image: PropTypes.string.isRequired, 
    rating: PropTypes.shape({
      rate: PropTypes.number, 
      count: PropTypes.number, 
    }),
  }).isRequired, 
};

export default Card;



   