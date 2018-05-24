import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
  salad: 2,
  bacon: 4,
  cheese: 7,
  meat: 8
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchaseable: false,
    purchasing: false
  };

  //Adding an item
  addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];

    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };

    updatedIngredients[type] = updatedCount;

    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;

    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseableState(updatedIngredients);
  };

  //Deleting an Item
  deleteIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    if (oldCount < 0) {
      return;
    }

    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };

    updatedIngredients[type] = updatedCount;

    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;

    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseableState(updatedIngredients);
  };

  //Update disablity of Order Now Button

  updatePurchaseableState = ingredients => {
    const sum = Object.keys(ingredients)
      .map(igK => {
        return ingredients[igK];
      })
      .reduce((sume, el) => {
        return sume + el;
      }, 0);

    this.setState({ purchaseable: sum > 0 });
  };

  // Modal visibiltlies....

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    alert("You Continue!");
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
      console.log(disabledInfo[key] <= 0);
    }
    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          <OrderSummary
            ingredients={this.state.ingredients}
            price={this.state.totalPrice}
            purchaseCanceled={this.purchaseCancelHandler}
            purchaseContinueHandler={this.purchaseContinueHandler}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientDeleted={this.deleteIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice + " Rs"}
          purchaser={this.state.purchaseable}
          clicked={this.purchaseHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
