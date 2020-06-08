import React, {Component} from 'react';

import Wrap from '../../cover/wrap';
import Burger from '../../components/Burger/Burger';
import Burgercontrol from '../../components/Burger/Buildcontrols/Buildcontrols';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';


const INGREDIENT_PRICES = {
  salad:0.5,
  meat:0.7,
  bacon:0.6,
  cheese:0.4
}

class BurgerBuilder extends Component {
  state = {
    ingredients:{
      salad:0,
      meat:0,
      bacon:0,
      cheese:0
    },
    totalPrice :4,
    purchaseble : false,
    purchasing : false
  }

  purchasingHandler = () => {
    this.setState({purchasing : true});
  }

  purchaseCancelHandler = () => {
    this.setState({purchasing : false});
  }

  purchaseContinueHandler = () => {
    alert('continue..');
  }

  updatePurchaseState (ingredients) {

    const sum = Object.keys(ingredients)
          .map(igkey => {
            return ingredients[igkey];
          })
          .reduce((sum,el) =>{
            return sum + el;
          },0);
    this.setState({purchaseble: sum>0});
  }

  addIngredientHandler = (type) =>{
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount;

    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;

    this.setState({
      ingredients : updatedIngredients,
      totalPrice : newPrice
    });
    this.updatePurchaseState(updatedIngredients);
  }

  removeIngredientHandler = (type) =>{
    const oldCount = this.state.ingredients[type];
    if (oldCount<=0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount;

    const priceReduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceReduction;

    this.setState({
      ingredients : updatedIngredients,
      totalPrice : newPrice
    });
    this.updatePurchaseState(updatedIngredients);

  }


  render (){
    const disableInfo = {
      ...this.state.ingredients
    }

    for (let key in disableInfo){
      disableInfo[key] = disableInfo[key] <= 0;
    }

    return (
      <Wrap>
        <Modal show={this.state.purchasing} modelClosed={this.purchaseCancelHandler}>
          <OrderSummary
            ingredients={this.state.ingredients}
            cancelled={this.purchaseCancelHandler}
            continued={this.purchaseContinueHandler}
            totalPrice={this.state.totalPrice}/>
        </Modal>

        <Burger ingredients={this.state.ingredients}/>
        <Burgercontrol
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disableInfo}
          price={this.state.totalPrice}
          purchaseble={this.state.purchaseble}
          order={this.purchasingHandler}
          />
      </Wrap>
    );
  }
}

export default BurgerBuilder;
