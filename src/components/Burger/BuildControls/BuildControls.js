import React from "react";
import classes from "./BCS.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const buildControls = props => (
  <div className={classes.BuildControls}>
    <p>Current Price: {props.price}</p>
    {controls.map(ctrl => {
      return (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          added={() => props.ingredientAdded(ctrl.type)}
          deleted={() => props.ingredientDeleted(ctrl.type)}
          disabled={props.disabled[ctrl.type]}
        />
      );
    })}
    <button
      className={classes.OrderButton}
      onClick={props.clicked}
      disabled={!props.purchaser}
    >
      Order Now
    </button>
  </div>
);

export default buildControls;
