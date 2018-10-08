import React, { Component } from 'react';
import Header from '../../components/header/Header';
import InputGroup from '../../components/inputGroup/InputGroup';
import { Button } from '@material-ui/core';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: []
    };
  }

  componentDidMount() {
    this.setState({ inputs: this.props.inputs });
  }

  handleSelectChange = e => {
    const newInputs = this.state.inputs;
    newInputs[e.target.name].option = e.target.value;
    this.setState({ inputs: newInputs });
  };

  handleValueChange = e => {
    const newInputs = this.state.inputs;
    console.log(newInputs[e.target.name], e.target.value);
    newInputs[e.target.name].value = e.target.value;
    this.setState({ inputs: newInputs });
  };

  handleRemoveInput = e => {
    const newInputs = this.state.inputs;
    const index = e.target.name;
    newInputs.splice(index, 1);
    this.setState({ inputs: newInputs });
  };

  handleAddInput = () => {
    const newInput = { option: '', value: '' };
    const newInputs = [...this.state.inputs, newInput];
    this.setState({ inputs: newInputs });
  };

  render() {
    const inputs = this.state.inputs.map((input, i) => {
      return (
        <InputGroup
          key={i}
          id={i}
          option={input.option}
          value={input.value}
          onSelectChange={this.handleSelectChange}
          onValueChange={this.handleValueChange}
          onRemove={this.handleRemoveInput}
        />
      );
    });
    return (
      <div>
        <Header
          title={'Структура номеров'}
          handleCloseModal={this.props.handleCloseModal}
        />
        <form onSubmit={() => this.props.handleFormSubmit(this.state.inputs)}>
          {inputs}
          <Button
            variant="outlined"
            style={{ border: 'none' }}
            color="primary"
            onClick={this.handleAddInput}>
            ДОБАВИТЬ
          </Button>
          <div style={{ display: 'flex' }}>
            <Button type="submit" variant="contained" color="primary">
              СОХРАНИТЬ
            </Button>
            <Button onClick={this.props.handleCloseModal} variant="outlined">
              ОТМЕНА
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default Modal;
