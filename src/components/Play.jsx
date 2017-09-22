import React from 'react';
import PropTypes from "prop-types";

function Play(props) {

  return(
    <div>
      <h4>Play Level: {Math.round(props.playLevel)}</h4>
      <button onClick={() => {props.increasePlay()}}>Play with Me</button>
    </div>
  );
}

Play.propTypes = {
  increasePlay: PropTypes.func
}

export default Play;
