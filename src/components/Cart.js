import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import CartItem from '../components/CartItem';

const Cart = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalItems, totalPrice, setTotalItems, setTotalPrice]);

  return (
    <div className='mainCart'>
      <div className='manCart-items'>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className='mainCart-summary'>
        <h4 className='mainCart-title'>Cart Summary</h4>
        <div className='mainCart-price'>
          <span>TOTAL: ({totalItems} items)</span>
          <span>$ {totalPrice}</span>
        </div>
        <button className='mainCart-checkout'>Proceed To Checkout</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.allProducts.cart,
  };
};

export default connect(mapStateToProps)(Cart);
