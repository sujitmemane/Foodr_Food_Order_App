import React, { useContext, useState } from "react";

import Modal from "../UI/Modal";
import "./cart.css";
import CartItem from "./CartItem";
import CartContext from "../store/cart-context";
import Checkout from "./Checkout";
const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmmiting, setIsSubmmiting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const CartCtx = useContext(CartContext);
  console.log(CartCtx.totalAmount);
  const totalAmount = `Rs ${CartCtx.totalAmount.toFixed(2)}`;
  const cartItemRemoveHandler = (id) => {
    CartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    CartCtx.addItem({
      ...item,
      amount: 1,
    });
  };
  const checkoutButtonHandler = () => {
    setIsCheckout(true);
  };
  const cartItems = CartCtx.items.map((item) => {
    return (
      <CartItem
        key={item.id}
        id={item.id}
        name={item.name}
        amount={item.amount}
        price={item.price}
        onRemove={cartItemRemoveHandler.bind(null, item.id)}
        onAdd={cartItemAddHandler.bind(null, item)}
      />
    );
  });
  console.log(isCheckout);
  const submitOrder = async (userData) => {
    setIsSubmmiting(true);
    await fetch("https://foodr-66475-default-rtdb.firebaseio.com/users.json", {
      method: "POST",
      body: JSON.stringify({
        user: userData,
        orderedItems: CartCtx.items,
      }),
    });
    setIsSubmmiting(false);
    setDidSubmit(true);
    CartCtx.clearCart();
  };

  const cartModalContent = (
    <div className="cart">
      <div className="heading-cart"> Shopping Cart</div>
      {CartCtx.items.length > 0 ? (
        <ul className="con">{cartItems}</ul>
      ) : (
        <p className="message">Your Cart is Empty</p>
      )}
      <div className="total">
        <span>Total Amount</span>
        <span> {totalAmount}</span>
      </div>
      {isCheckout && <Checkout onClose={props.onClose} onOrder={submitOrder} />}
      {!isCheckout && (
        <div className="action-btn">
          <button className="button order" onClick={checkoutButtonHandler}>
            Order
          </button>
          <button className="button close" onClick={props.onClose}>
            Close
          </button>
        </div>
      )}
    </div>
  );
  const isSubmmitingModalContent = <p>Sending Order Data</p>;
  const didSubmitModalContent = (
    <React.Fragment>
      <p>Successfully Submitted Your Data</p>
      <div className="action-btn">
        <button className="button close" onClick={props.onClose}>
          Close
        </button>
      </div>
    </React.Fragment>
  );
  return (
    <Modal onClose={props.onClose}>
      {!isSubmmiting && !didSubmit && cartModalContent}
      {isSubmmiting && isSubmmitingModalContent}
      {!isSubmmiting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
