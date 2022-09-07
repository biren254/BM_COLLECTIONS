import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import { NavLink } from 'react-router-dom';
import {addCart, deleteCart} from '../redux/action';

const cart = () => {
    const state = useSelector((state)=> state.handleCart);
    const dispatch = useDispatch();

    const handleAdd = (item) => {
      dispatch(addCart(item));
    };
    const handleDelete = (item) => {
      dispatch(deleteCart(item));
    };

    const emptyCart = () => {
      return (
        <div className="px-4 my-5 bg-warning rounded-3 py-5">
          <div className="container py-4">
            <div className="row">
              <h3>Your Cart is Empty</h3>
            </div>
          </div>
        </div>
      );
    };
    const cartItems = (product) => {
      return (
        <>
          <div className="px-4 my-5 bg-warning rounded-3 py-5">
            <div className="container py-4">
              <div className="row">
                <div className="col-md-4">
                  <img src={product.image} alt={product.title} height="200px" width="180px" />
                </div>
                <div className="col-md-4">
                  <h3>{product.title}</h3>
                  <p className="lead">
                    {product.qty} X ${product.price} = $
                    {product.qty * product.price}
                  </p>
                  <button className="btn btn-outline-dark me-4"
                   onClick={() => handleDelete(product)}>
                    <i className="fa fa-minus"></i>
                   </button>
                  <button className="btn btn-outline-dark"
                   onClick={() => handleAdd(product)}>
                    <i className="fa fa-plus"></i>
                   </button>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    };

    const buttons = () => {
      return (
        <>
          <div className="container">
            <div className="row">
              <NavLink to="/checkout" className="btn btn-outline-dark mb-5 w-25 mx-auto">
                Proceed to Checkout
              </NavLink>
            </div>
          </div>
        </>
      );
    };

  return (
    <div>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && buttons()}
    </div>
  )
}

export default cart
