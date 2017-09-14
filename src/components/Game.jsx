import React from 'react';
import NewGotchiForm from './NewgotchiForm';
import Tamagotchi from './Tamagotchi';

class Game extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterGotchi: null,
      formVisible: true,
      deadOrAlive: "alive"
    }
    this.birthGotchi = this.birthGotchi.bind(this);
    this.hideForm = this.hideForm.bind(this);
    this.getHungry = this.getHungry.bind(this);
  }

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
    if (this.state.deadOrAlive === "alive") {
      this.timeSinceBornChecker = setInterval(() =>
        this.updateTimeSinceBorn(),
        5000
      );
    }
  }

  getHungry() {
    if (this.state.masterGotchi.food > 0) {
      let newMasterGotchi = this.state.masterGotchi;
      newMasterGotchi.food -= 2;
      this.setState({masterGotchi: newMasterGotchi});
      console.log(this.state.masterGotchi.food);
    } else {
      this.gameOver();
    }
  }

  gameOver() {
    console.log("reached gameOver");
    let newLiveState = this.state.deadOrAlive;
    newLiveState = "dead";
    this.setState({deadOrAlive: newLiveState});
    console.log("fully died");
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
          deadOrAlive={this.state.deadOrAlive}
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
