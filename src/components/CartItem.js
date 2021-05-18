import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  removeFromCart,
  adjustQuantity,
} from '../redux/actions/ProductActions';

const CartItem = ({ item, removeFromCart, adjustQuantity }) => {
  const [input, setInput] = useState(item.qty);
  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQuantity(item.id, e.target.value);
  };

  return (
    <div className='cartItem'>
      <img className='cartItem-image' src={item.image} alt={item.title} />
      <div>
        <p className='cartItem-title'>{item.title}</p>
        <p className='cartItem-price'>$ {item.price}</p>
      </div>
      <div className='cartItem-action'>
        <div className='cartItem-qty'>
          <label htmlFor='qty'>Qty</label>
          <input
            min='1'
            type='number'
            id='qty'
            name='qty'
            value={input}
            onChange={onChangeHandler}
          />
        </div>
        <button
          className='deleteButton'
          onClick={() => removeFromCart(item.id)}>
          <img
            src='https://image.flaticon.com/icons/svg/709/709519.svg'
            alt=''
          />
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    adjustQuantity: (id, value) => dispatch(adjustQuantity(id, value)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
