import React, { Component } from 'react';
import Modal from './containers/modal/Modal';
import { Button } from '@material-ui/core';

import './App.css';

const initialInputs = [
	{
		option: 'Twin',
		value: 22
	},
	{
		option: 'Tripple',
		value: 12
	},
	{
		option: 'Quadro',
		value: 4
	}
]

class App extends Component {
  state = {
    modalIsOpen: false,
    inputs: initialInputs
  }

  handleOpenModal = () => {
    this.setState({modalIsOpen: true})
  }

  handleCloseModal = () => {
    this.setState({modalIsOpen: false})
  }

  handleFormSubmit = (inputs) => {
    this.setState({modalIsOpen: false, inputs: inputs})
  }

  render() {
    const inputs = this.state.inputs

    return (
      this.state.modalIsOpen ? 
      (<div style={{border: '1px solid black', width: '500px', height: '500px'}}>
        <Modal inputs={inputs} handleCloseModal={this.handleCloseModal} handleFormSubmit={this.handleFormSubmit} />
      </div>) : <Button onClick={this.handleOpenModal}>Open Modal</Button>
      
    );
  }
}

export default App;
