import React from 'react';

import Wrap from '../../../cover/wrap';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
          .map(igkey => {
            return (
              <li key={igkey}>
                <span style={{textTransform:'capitalize'}}>{igkey}</span> : {props.ingredients[igkey]}
              </li>
            );
          });

  return (
    <Wrap>
      <h3>Your Order</h3>
      <p>A delicious burger with following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>

      <p><strong>Total Price : {props.totalPrice.toFixed(2)}</strong></p>
      <p>Continue to Checkout?</p>
        <Button btnType={'Danger'} clicked={props.cancelled}>CANCEL</Button>
        <Button btnType={'Success'} clicked={props.continued}>CONTINUE</Button>
    </Wrap>
  );
}

export default orderSummary;
