import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../redux/actions/ProductActions';

const SingleItem = ({ currentItem, addToCart }) => {
  return (
    <div className='single-card'>
      <img
        className='single-image'
        src={currentItem.image}
        alt={currentItem.title}
      />
      <div>
        <p className='single-title'>{currentItem.title}</p>
        <p className='single-price'>{currentItem.price}</p>
        <p className='single-category'>{currentItem.category}</p>
        <p className='single-category'>{currentItem.description}</p>
        <button onClick={() => addToCart(currentItem.id)}>Add to cart</button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

const mapStateToProps = (state) => {
  return {
    currentItem: state.allProducts.currentItem,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);
