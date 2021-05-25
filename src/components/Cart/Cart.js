import { useContext, useState } from 'react';
import React from 'react';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const discounts = React.useRef();
  const [dis, setDis] = useState(cartCtx.totalAmount);

  let totalAmount = `INR ${cartCtx.totalAmount}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const discountHandler = (props) => {
    let a = discounts.current.value
    console.log(a)
    if (a == 1001) {
      let b = cartCtx.totalAmount - ((5 * cartCtx.totalAmount) / 100);
      setDis(b)
    }
    if (a == 1002) {
      let b = cartCtx.totalAmount - ((10 * cartCtx.totalAmount) / 100);
      setDis(b)
    }
    if (a == 1003) {
      let b = cartCtx.totalAmount - ((15 * cartCtx.totalAmount) / 100);
      setDis(b)
    }
  }


  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{dis}</span>
      </div>
      <div>
        <label>Have A promo Code:</label><br />
        <input type="number" ref={discounts}></input>
        <button onClick={discountHandler}>Apply</button>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button} >Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;