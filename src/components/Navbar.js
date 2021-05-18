import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Navbar = (props) => {
  const { cart } = props;
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);
  return (
    <nav className='navbar bg-primary'>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <h1 className='nav-logo'>{props.title}</h1>
      </Link>

      <Link to='/cart' style={{ textDecoration: 'none' }}>
        <div className='nav-cart'>
          <img
            className='cart-image'
            src='https://image.flaticon.com/icons/svg/102/102276.svg'
            alt='shopping cart'
          />
          <div className='nav-counter'>{cartCount}</div>
        </div>
      </Link>
    </nav>
  );
};

const mapStatestoProps = (state) => {
  return {
    cart: state.allProducts.cart,
  };
};

Navbar.defaultProps = {
  title: 'Brothers shop',
};

export default connect(mapStatestoProps)(Navbar);
