import React from 'react';
import PropTypes from "prop-types";

function Food(props) {

  return(
    <div>
      <h4>Food Level: {Math.round(props.foodLevel)}</h4>
      <button onClick={() => {props.increaseFood()}}>Feed Me</button>
    </div>
  );
}

Food.propTypes = {
  increaseFood: PropTypes.func
}

export default Food;
