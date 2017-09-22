import React from 'react';
import PropTypes from "prop-types";

function Food(props) {

  var flexItem = {
    margin: "2",
    order: "1",
    flexGrow: "1",
    wordBreak: "normal",
    minWidth: "100",
    maxWidth: "200",
  }

  return(
    <div style={flexItem}>
      <h4>Food Level: {Math.round(props.foodLevel)}</h4>
      <button onClick={() => {props.increaseFood()}}>Feed Me</button>
    </div>
  );
}

Food.propTypes = {
  increaseFood: PropTypes.func
}

export default Food;
