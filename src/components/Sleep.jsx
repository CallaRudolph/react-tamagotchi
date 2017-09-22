import React from 'react';
import PropTypes from "prop-types";

function Sleep(props) {
  return(
    <div>
      <h4>Sleep level: {Math.round(props.sleepLevel)}</h4>
      <br/>
    </div>
  );
}

export default Sleep;
