import { useContext } from "react";
import classes from "./MedItem.module.css";
import MedItemForm from "./MedItemForm";
import CartContext from "../../../store/cart-context";

const MedItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,  
    });
  };
  return (
    <li className={classes.med}>
      <div>
        <h3> {props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}> {price} </div>
      </div>
      <div>
        <MedItemForm onAddToCart={addToCartHandler}></MedItemForm>
      </div>
    </li>
  );
};

export default MedItem;
