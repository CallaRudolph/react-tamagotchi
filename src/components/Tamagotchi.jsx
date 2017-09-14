import React from 'react';
import PropTypes from 'prop-types';
import Food from './Food';

class Tamagotchi extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentTime: "Loading Time...",
    }
    this.updateClock = this.updateClock.bind(this);
    this.wasteAway = this.wasteAway.bind(this);
  }

  updateClock() {
    var currentTime = new Date();
    var currentTimeStr = currentTime.toLocaleTimeString();
    this.setState({currentTime: currentTimeStr});
  }

  componentWillMount() {
    setInterval(this.updateClock, 1000);
    setInterval(this.wasteAway, 1000);
  }

  wasteAway() {
    this.props.childGetHungry();
    console.log(this.props.food);
  }

  render() {
    return(
      <div>
        <h1>{this.state.currentTime}</h1>
        <h2>Hi, I'm {this.props.name}!</h2>
        <p>I was born {this.props.timeSinceBorn} ago. Please help me enjoy a long healthy life, by keeping the below numbers as high as possible.</p>
        <Food
          foodLevel={this.props.food}
          />
      </div>
    )
  }
}

Tamagotchi.propTypes = {
  name: PropTypes.string.isRequired,
  food: PropTypes.number.isRequired,
  play: PropTypes.number.isRequired,
  sleep: PropTypes.number.isRequired,
  timeSinceBorn: PropTypes.string,
  childGetHungry: PropTypes.func
}

export default Tamagotchi;
