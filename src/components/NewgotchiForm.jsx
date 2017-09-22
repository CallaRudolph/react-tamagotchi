import React from 'react';
import Tamagotchi from '../models/Tamagotchi.js';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';

class NewGotchiForm extends React.Component {

  constructor(props) {
    super(props);
    this.createGotchi = this.createGotchi.bind(this);
    this.showFormModal = this.showFormModal.bind(this);
    this.hideFormModal = this.hideFormModal.bind(this);
    this.state = {
      formModalIsShowing: false
    };
  }

  createGotchi(event) {
    event.preventDefault();
    const { _name } = this.refs;
    var newGotchi = new Tamagotchi(_name.value);
    this.props.onNewGotchiBirth(newGotchi);
    this.props.hideFormAfterSubmission();
  }

  showFormModal(event){
    this.setState({
      formModalIsShowing: true
    });
  }

  hideFormModal(event){
    this.setState({
      formModalIsShowing: false
    });
  }

  render() {
    return(
      <div>
        <button onClick={this.showFormModal}>Birth Tamagotchi</button>
        <Modal
          show={this.state.formModalIsShowing}
          onHide={this.hideFormModal}>
          <Modal.Header>
            <Modal.Title>Let's go, Tamagotchi</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.createGotchi}>
              <input id="name" ref="_name" placeholder="Enter Name"/>
              <br/><br/>
              <button type="submit">Create Me!</button>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

NewGotchiForm.propTypes = {
  onNewGotchiBirth: PropTypes.func,
  hideFormAfterSubmission: PropTypes.func,
}

export default NewGotchiForm;
