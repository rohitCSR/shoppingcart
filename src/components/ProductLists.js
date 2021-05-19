import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setProduct } from '../redux/actions/ProductActions';
import ProductComponent from './ProductComponent';

const ProductLists = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get('https://fakestoreapi.com/products')
      .catch((err) => {
        console.log('Err', err);
      });
    dispatch(setProduct(response.data));
  };

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line
  }, []);
  console.log(products);

  return (
    <div className='products-list'>
      <ProductComponent />
    </div>
  );
};

export default ProductLists;
