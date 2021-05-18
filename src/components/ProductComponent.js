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
      <div className='card-area'>
        <div className='card'>
          <div className='image'>
            <img src={image} alt={title} />
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
              <button onClick={() => loadCurrentItem(product)}>
                View Product
              </button>
            </Link>
          </div>
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
