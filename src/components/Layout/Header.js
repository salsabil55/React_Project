import { Fragment } from "react";
import mealImg from "../../assets/img/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["header-img"]}>
        <img src={mealImg} alt="meal img" />
      </div>
    </Fragment>
  );
};
export default Header;
