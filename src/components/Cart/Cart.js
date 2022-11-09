import { useContext } from "react";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";

import CartContext from "../../store/CartContext";

const Cart = (props) => {
  const cartCxt = useContext(CartContext);
  const totalAmount = `$${cartCxt.totalAmount.toFixed(2)}`;
  const hasItem = cartCxt.items.length > 0;
  const cartItemRemoveHandler = (id) => {
    cartCxt.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    // it increse only mount by step 1
    cartCxt.addItems({ ...item, amount: 1 });
  };
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCxt.items.map((item) => (
        // <li key={item.id}>{item.name}</li>
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
  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        {hasItem && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};
export default Cart;
