import CartIcon from "../Cart/CartIcon";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/CartContext";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [btnIsHighlight, setBtnIsHighlight] = useState(false);
  const buttonClasses = `${classes.button} ${
    btnIsHighlight ? classes.bump : ""
  }`;
  const cartCxt = useContext(CartContext);
  const { items } = cartCxt;
  // tnsform rry to single item
  const numOfItem = items.reduce((currNum, item) => {
    return currNum + item.amount;
  }, 0);

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlight(true);
    const timer = setTimeout(() => {
      setBtnIsHighlight(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button className={buttonClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numOfItem}</span>
    </button>
  );
};

export default HeaderCartButton;
