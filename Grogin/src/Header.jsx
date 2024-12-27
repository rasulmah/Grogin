import './css/Header.css'

function Header() {
  return (
    <div className='header'>
      <div className='discount'>

        <div className='header-text'>
          Free Delivery & 40% Discount for next 3 orders! Place your 1st order in
        </div>

        <div className='text'>
          Until the end of the sales: <span className='span-el'>47</span> days <span className='span-el'>01</span> hours <span className='span-el'>48</span> minutes <span className='span-el'>35</span> sec. 
        </div>

      </div>

      <div className='second-menu'>
        <div className="left-menu">
          <ul className='Menu-list'>
            <li className='Menu-item'>About Us</li>
            <li className='Menu-item'>My Account</li>
            <li className='Menu-item'>Whislist</li>
          </ul>
          <div className="line">|</div>
          <div className="menu-text">
            We deliver to you every day from <span>7.00 to 23.00</span>
          </div>
        </div>

        <div className='right-menu'>
        <ul className='Menu-list'>
            <li className='Menu-item'>English <i className="fa-solid fa-angle-down"></i></li>
            <li className='Menu-item'>USD <i className="fa-solid fa-angle-down"></i></li>
            <li className='Menu-item'>Order Tracking</li>
          </ul>
        </div>

      </div>


      <div className="searchBar">
        <img src="https://klbtheme.com/grogin/wp-content/uploads/2023/11/grogin-logo-dark.png" alt="" />
        <div className="loc">
        <div className="i-con"><i className="fa-solid fa-location-dot"></i></div> <span>Delivery to</span>
        </div>
        <div className="search"> Search for products, categories, or brands... <i className="fa-solid fa-magnifying-glass"></i></div>
      </div>

      <div className='third-menu second-menu'>
        <div className="left-menu">
          <ul className='Menu-list'>
          <li className='Menu-item'>Home <i className="fa-solid fa-angle-down"></i></li>
            <li className='Menu-item'>Shop <i className="fa-solid fa-angle-down"></i></li>
            <li className='Menu-item'>Fruits & Vegetables</li>
            <li className='Menu-item'>Beverages</li>
            <li className='Menu-item'>Blog</li>
            <li className='Menu-item'>Contact</li>
          </ul>
        </div>

        <div className='right-menu'>
        <ul className='Menu-list'>
            <li className='Menu-item'>Trending Products <i className="fa-solid fa-angle-down"></i></li>
            <li className='Menu-item red'>Almost Finished <span className='third-span'>SALE</span> <i className="fa-solid fa-angle-down"></i></li>
          </ul>
        </div>

      </div>


    </div>
  )
}

export default Header;