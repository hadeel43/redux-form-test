import React, { Component } from 'react';

export default class NameInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.values.name,
    };
  }
  render() {
    const { submitAndContinue, errors } = this.props;

    return (
      <form>
        <input
          type="text"
          placeholder="Enter your name"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <span className="error">{errors.name}</span>
        <button
          className="submit-button"
          value="submit"
          onClick={(e) => {
            e.preventDefault();
            submitAndContinue(this.state);
          }}
        >
          send
        </button>
      </form>
    );
  }
}
