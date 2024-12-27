import './css/footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="newsletter">
        <div className="newsletter-text">
          <h2>Join our newsletter for £10 offs</h2>
          <p>Register now to get the latest updates on promotions & coupons. Don’t worry, we won’t spam!</p>
        </div>
        <div className="newsletter-input">
          <div>
          <input type="email" placeholder="Enter your email address" />
          <button>SEND</button>
          </div>
          <p className="terms">
          By subscribing you agree to our <a href="#">Terms & Conditions</a> and <a href="#">Privacy & Cookies Policy</a>.
        </p>
        </div>
        
      </div>

      <hr />

      <div className="footer-content">
        <div className="footer-section help">
          <h4>Do You Need Help?</h4>
          <p>Autoseligen syr. Nek diarask fröbomba. Nör antipol kynoda nynat. Pressa fåmoska.</p>
          <p>
            <i className="fas fa-phone"></i> Monday-Friday: 08am-9pm
          </p>
          <p className="phone">0 800 300-353</p>
          <p>
            <i className="fas fa-envelope"></i> Need help with your order?
          </p>
          <p className="email">info@example.com</p>
        </div>

        <div className="footer-section links">
          <h4>Make Money with Us</h4>
          <ul>
            <li>Sell on Grogin</li>
            <li>Sell Your Services on Grogin</li>
            <li>Sell on Grogin Business</li>
            <li>Sell Your Apps on Grogin</li>
            <li>Become an Affiliate</li>
            <li>Advertise Your Products</li>
            <li>Sell-Publish with Us</li>
            <li>Become a Blowve Vendor</li>
          </ul>
        </div>

        <div className="footer-section links">
          <h4>Let Us Help You</h4>
          <ul>
            <li>Accessibility Statement</li>
            <li>Your Orders</li>
            <li>Returns & Replacements</li>
            <li>Shipping Rates & Policies</li>
            <li>Refund and Returns Policy</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
            <li>Cookie Settings</li>
            <li>Help Center</li>
          </ul>
        </div>

        <div className="footer-section links">
          <h4>Get to Know Us</h4>
          <ul>
            <li>Careers for Grogin</li>
            <li>About Grogin</li>
            <li>Investor Relations</li>
            <li>Grogin Devices</li>
            <li>Customer Reviews</li>
            <li>Social Responsibility</li>
            <li>Store Locations</li>
          </ul>
        </div>

        <div className="footer-section app">
          <h4>Download our app</h4>
          <div className="app-buttons">
            <a href="#">
              <img src="https://via.placeholder.com/120x40" alt="Google Play" />
              <p>Download App Get -10% Discount</p>
            </a>
            <a href="#">
              <img src="https://via.placeholder.com/120x40" alt="App Store" />
              <p>Download App Get -20% Discount</p>
            </a>
          </div>
          <div className="social-media">
            <p>Follow us on social media:</p>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
