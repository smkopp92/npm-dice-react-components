import _ from 'lodash';
import React from 'react';

class Dice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roll: this.roll(this.props.sides, this.props.numOfDice)
    }
    this.handleButtonClick = this.handleButtonClick.bind(this);
  };

  handleButtonClick() {
    this.setState({roll: this.roll(this.props.sides, this.props.numOfDice)});
  }

  roll(sides, numOfDice){
    let total = 0
    _.times(numOfDice,() => {
      total = total + (_.random(1, sides));
    });
    return total
  };

  render() {
    let resultString = `You rolled a ${this.props.sides}-sided Die ${this.props.numOfDice} times! You rolled a ${this.state.roll}!` ;

    return(
      <h1 className="header" onClick={this.handleButtonClick}>
        { resultString }
      </h1>
    );
  }
};

export default Dice;
