import React from 'react';
import PropTypes from "prop-types";

function Sleep(props) {

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
      <h4>Sleep level: {Math.round(props.sleepLevel)}</h4>
      <button onClick={() => {props.increaseSleep()}}>Give me a nap</button>
    </div>
  );
}

Sleep.propTypes = {
  increaseSleep: PropTypes.func
}

export default Sleep;
