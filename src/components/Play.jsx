import React from 'react';
import PropTypes from "prop-types";

function Play(props) {

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
      <h4>Play Level: {Math.round(props.playLevel)}</h4>
      <button onClick={() => {props.increasePlay()}}>Play with Me</button>
    </div>
  );
}

Play.propTypes = {
  increasePlay: PropTypes.func
}

export default Play;
