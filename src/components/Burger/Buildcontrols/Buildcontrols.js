import React from 'react';

import classes from './Buildcontrols.css';
import BuildControl from './Buildcontrol/Buildcontrol';

const controls = [
  {label:"Bacon", type:'bacon'},
  {label:"Salad", type:'salad'},
  {label:"Cheese", type:'cheese'},
  {label:"Meat", type:'meat'},
];

const buildControls = (props) => (
  <div className={classes.Buildcontrols}>
    <p>Burger Price : <strong>{props.price.toFixed(2)}</strong></p>
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
        disable={props.disabled[ctrl.type]}
        />
    ))}
    <button
      className={classes.OrderButton}
      disabled={!props.purchaseble}
      onClick={props.order}
      >ORDER NOW</button>
  </div>
);

export default buildControls;
