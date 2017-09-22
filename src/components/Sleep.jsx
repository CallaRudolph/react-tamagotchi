import React from 'react';
import PropTypes from "prop-types";

function Sleep(props) {

  return(
    <div>
      <h4>Sleep level: {Math.round(props.sleepLevel)}</h4>
      <button onClick={() => {props.increaseSleep()}}>Give me a nap</button>
    </div>
  );
}

Sleep.propTypes = {
  increaseSleep: PropTypes.func
}

export default Sleep;
