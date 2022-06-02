import React, { Fragment } from 'react';
import './confirmOrder.css';
import { useSelector } from 'react-redux';
import CheckoutSteps from './CheckoutSteps';
import MetaData from '../layout/MetaData';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';

const ConfirmOrder = ({ history }) => {
  const { shippingInfo, cartItems } = useSelector((state) => state.cart);

  const { user } = useSelector((state) => state.user);

  let productPrice = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);

  const subtotal = productPrice;

  const shippingCharges = productPrice > 1000 ? 0 : 200;

  const tax = productPrice * 0.18;

  const totalPrice = subtotal + tax + shippingCharges;

  const address = `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.state}, ${shippingInfo.pinCode}, ${shippingInfo.country}`;

  const proceedToPayment = () => {
    const data = {
      subtotal,
      shippingCharges,
      totalPrice,
    };

    sessionStorage.setItem('orderInfo', JSON.stringify(data));

    history.push('/process/payment');
  };

  return (
    <Fragment>
      <MetaData title="Confirm Order" />
      <CheckoutSteps activeStep={1} />
      <div className="confirmOrderPage">
        <div>
          <div className="confirmshippingArea">
            <Typography>Shipping Info</Typography>
            <div className="confirmshippingAreaBox">
              <div>
                <p>Name:</p>
                <span>{user.name}</span>
              </div>
              <div>
                <p>Phone:</p>
                <span>{shippingInfo.phoneNo}</span>
              </div>
              <div>
                <p>Address:</p>
                <span>{address}</span>
              </div>
            </div>
          </div>
          <div className="confirmCartItems">
            <Typography>Your Cart Items:</Typography>

            {cartItems.length === 0 ? (
              <div className="confirmCartItemsContainer">""</div>
            ) : (
              <div className="confirmCartItemsContainer">
                {cartItems &&
                  cartItems.map((item) => (
                    <div key={item.product}>
                      <img src={item.image} alt="Product" />
                      <Link to={`/product/${item.product}`}>{item.name}</Link>{' '}
                      <span>
                        {item.quantity} X Rp.{item.price} = <b>Rp.{item.price * item.quantity}</b>
                      </span>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
        {/*  */}
        <div>
          <div className="orderSummary">
            <Typography>Order Summery</Typography>
            <div>
              <div>
                <p>Subtotal:</p>
                <span>Rp.{subtotal}</span>
              </div>
              <div>
                <p>Shipping Charges:</p>
                <span>Rp.{shippingCharges}</span>
              </div>
              <div>
                <p>GST:</p>
                <span>Rp.{tax}</span>
              </div>
            </div>

            <div className="orderSummaryTotal">
              <p>
                <b>Total:</b>
              </p>
              <span>Rp.{totalPrice}</span>
            </div>

            <button onClick={proceedToPayment}>Proceed To Payment</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ConfirmOrder;
