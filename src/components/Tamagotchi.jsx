import React from 'react';
import PropTypes from 'prop-types';
import Food from './Food';

class Tamagotchi extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentTime: null,
    }
    this.updateClock = this.updateClock.bind(this);
  }

  updateClock() {
    var currentTime = new Date();

    var currentHrs = currentTime.getHours();
    var currentMins = currentTime.getMinutes();
    var currentSecs = currentTime.getSeconds();

    currentMins = (currentMins < 10 ? "0" : "") + currentMins;
    currentSecs = (currentSecs < 10 ? "0" : "") + currentSecs

    var amPM = (currentHrs < 12) ? "AM" : "PM";

    currentHrs = (currentHrs === 0) ? 12 : currentHrs;

    var currentTimeStr = currentHrs + ":" + currentMins + ":" + currentSecs + " " + amPM;

    this.setState({currentTime: currentTimeStr});
  }

  componentWillMount() {
    setInterval(this.updateClock, 1000);
  }

  render() {
    return(
      <div>
        <h1>{this.state.currentTime}</h1>
        <h2>Hi, I'm {this.props.name}!</h2>
        <p>I was born {this.props.timeSinceBorn} ago. Please help me enjoy a long healthy life, by keeping the below numbers as high as possible.</p>
        <Food foodLevel={this.props.food}/>
      </div>
    )
  }
}

Tamagotchi.propTypes = {
  name: PropTypes.string.isRequired,
  food: PropTypes.number.isRequired,
  play: PropTypes.number.isRequired,
  sleep: PropTypes.number.isRequired,
  timeSinceBorn: PropTypes.string
}

export default Tamagotchi;
