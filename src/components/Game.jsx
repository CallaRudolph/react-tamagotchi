import React from 'react';
import NewGotchiForm from './NewgotchiForm';
import Tamagotchi from './Tamagotchi';
import Clock from './Clock';

class Game extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterGotchi: null,
      formVisible: true,
    }
    this.birthGotchi = this.birthGotchi.bind(this);
    this.hideForm = this.hideForm.bind(this);
  }

  birthGotchi(newGotchi) {
    this.setState({masterGotchi: newGotchi});
  }

  hideForm() {
    this.setState({formVisible: false});
  }

  updateTimeSinceBorn() {
    let newMasterGotchi = this.state.masterGotchi.slice();
  }

  render() {
    let app = this.liveTime;
    const formVisible = this.state.formVisible;
    const preciousGotchi = this.state.masterGotchi;
    let formAreaContent = null;
    if (formVisible) {
      formAreaContent = <NewGotchiForm
        onNewGotchiBirth={this.birthGotchi}
        hideFormAfterSubmission={this.hideForm}/>
    } else {
      formAreaContent =
      <div>
        <Tamagotchi
          name={this.state.masterGotchi.name}
          food={this.state.masterGotchi.food}
          play={this.state.masterGotchi.play}
          sleep={this.state.masterGotchi.sleep}
          timeSinceBorn={this.state.masterGotchi.timeSinceBorn}/>
      </div>
    }

    // <p>"THANKS FOR BEING MY PARENT."</p>
    // <h3>"Hi, I'm {preciousGotchi.name}, and I was born {preciousGotchi.timeBorn}. I'm so happy to meet you! Please help me eat, play, and sleep an appropriate amount, so I can have a long and happy life."</h3>
    return(
      <div>
        {formAreaContent}
      </div>
    );
  }
  // setInterval(updateClock, 1000);
}

export default Game;
