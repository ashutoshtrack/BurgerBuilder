import React from "react";

import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = props => {
  const tempingre = { ...props.ingredients };
  console.log(props.ingredients);
  console.log(tempingre);
  let transformedIngredients = Object.keys(props.ingredients)
    .map((lol, ind) => {
      return [...Array(props.ingredients[lol])].map((_, i) => {
        return <BurgerIngredient key={lol + i} type={lol} />;
      });
    })
    .reduce((arr, el) => {
      //for total calculations
      return arr.concat(el);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p> Please start adding ingredients</p>;
  }

  console.log(transformedIngredients);

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
