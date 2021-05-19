import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { loadCurrentItem } from '../redux/actions/ProductActions';

const ProductComponent = ({ loadCurrentItem }) => {
  const products = useSelector((state) => state.allProducts.products);

  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className='card' key={id}>
        <div className='image'>
          <img src={image} alt={title} className='product-img' />
        </div>
        {/* <div className='title'>
          <h1 className='card-header'>{title}</h1>
        </div> */}
        <div className='price'>
          <p className='price'> $ {price}</p>
        </div>
        <p className='ctgr'>{category}</p>
        <div className='category'>
          <Link to={`/product/${id}`}>
            <button
              className='view-button'
              onClick={() => loadCurrentItem(product)}>
              View Product
            </button>
          </Link>
        </div>
      </div>
    );
  });

  return <>{renderList}</>;
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};
export default connect(null, mapDispatchToProps)(ProductComponent);
