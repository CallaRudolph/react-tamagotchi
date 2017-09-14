import React from 'react';
import PropTypes from "prop-types";

class Food extends React.Component {

  constructor(props) {
    super(props);
    this.feed = this.feed.bind(this);
  }

  feed() {
    // console.log("hello");
    this.props.increaseFood();
  }

  render() {
    return(
      <div>
        Food Level: {Math.round(this.props.foodLevel)}
        <br/>
        <button onClick={() => {this.feed()}}>Feed Me</button>
      </div>
    );
  }
}

Food.propTypes = {
  increaseFood: PropTypes.func
}

export default Food;
