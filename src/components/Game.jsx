import React from 'react';
import NewGotchiForm from './NewgotchiForm';
import Tamagotchi from './Tamagotchi';

class Game extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterGotchi: null,
      formVisible: true,
    }
    this.birthGotchi = this.birthGotchi.bind(this);
    this.hideForm = this.hideForm.bind(this);
    this.getHungry = this.getHungry.bind(this);
  }

// Create a new Tamagotchi and hide the NewgotchiForm component

  birthGotchi(newGotchi) {
    this.setState({masterGotchi: newGotchi});
  }

  hideForm() {
    this.setState({formVisible: false});
  }

  updateTimeSinceBorn() {
    let newMasterGotchi = this.state.masterGotchi;
    newMasterGotchi.setTimeSinceBorn();
    this.setState({masterGotchi: newMasterGotchi})
  }

  componentWillMount() {
    this.timeSinceBornChecker = setInterval(() =>
      this.updateTimeSinceBorn(),
      5000
    );
  }

  getHungry() {
    let newMasterGotchi = this.state.masterGotchi;
    newMasterGotchi.food -= 0.1;
    this.setState({masterGotchi: newMasterGotchi});
  }

  componentWillUnmount() {
    clearInterval(this.timeSinceBornChecker);
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
          childGetHungry={this.getHungry}
          name={this.state.masterGotchi.name}
          food={this.state.masterGotchi.food}
          play={this.state.masterGotchi.play}
          sleep={this.state.masterGotchi.sleep}
          timeSinceBorn={this.state.masterGotchi.timeSinceBorn}/>
      </div>
    }

    return(
      <div>
        {formAreaContent}
      </div>
    );
  }
}

export default Game;
