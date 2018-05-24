import React from "react";
import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button/Button";

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(igk => {
    return (
      <li key={igk}>
        <span style={{ textTransform: "capitalize" }}> {igk} </span> :{" "}
        {props.ingredients[igk]}
      </li>
    );
  });

  return (
    <Aux>
      <h3> Your Order</h3>
      <p> A delicious order is here</p>

      <ul>{ingredientSummary}</ul>

      <p>
        <strong>Total Price: {props.price.toFixed(2)}</strong>
      </p>

      <p>Continue to checkout</p>
      <Button btnType="Danger" clicked={props.purchaseCanceled}>
        Cancel
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinueHandler}>
        Continue
      </Button>
    </Aux>
  );
};

export default orderSummary;
