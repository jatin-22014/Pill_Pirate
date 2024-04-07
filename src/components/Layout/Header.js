import { Fragment } from "react";
import medsImage from "../../assets/meds6.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Pill Pirate</h1>
        <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={medsImage} />
      </div>
    </Fragment>
  );
};

export default Header;
