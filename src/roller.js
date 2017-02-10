import Dice from './components/dice.js'
import React from 'react';
import ReactDOM from 'react-dom';

let sides = 20;
let numOfDice = 1;

ReactDOM.render(
  <Dice sides={sides} numOfDice={numOfDice}/>,
  document.getElementById('app')
);
