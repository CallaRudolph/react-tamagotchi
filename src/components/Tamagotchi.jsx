import React from 'react';
import NewGotchiForm from './NewgotchiForm';

class Tamagotchi extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterGotchi: [],
      formVisible: true,
    }
    this.birthGotchi = this.birthGotchi.bind(this);
    this.hideForm = this.hideForm.bind(this);
  }

  birthGotchi(newGotchi) {
    var newMasterGotchi = this.state.masterGotchi.slice();
    newMasterGotchi.push(newGotchi);
    this.setState({masterGotchi: newMasterGotchi});
  }

  hideForm() {
    this.setState({formVisible: false});
  }

  render() {
    const formVisible = this.state.formVisible;
    let formAreaContent = null;
    if (formVisible) {
      formAreaContent = <NewGotchiForm
        onNewGotchiBirth={this.birthGotchi}
        hideFormAfterSubmission={this.hideForm}/>
    } else {
      formAreaContent = <p>"THANKS FOR BEING MY PARENT."</p>
      console.log(this.state.masterGotchi);
    }

    return(
      <div>
        {formAreaContent}
      </div>
    );
  }
}

export default Tamagotchi;
