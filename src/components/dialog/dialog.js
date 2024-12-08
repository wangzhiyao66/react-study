import './dialog.css';

import React from "react";

// study LINK:https://react.docschina.org/docs/composition-vs-inheritance.html

function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 class="Dialog-title">
        {props.title}
      </h1>
      <p class="Dialog-message">
        {props.message}
      </p>
      {props.children}
    </FancyBorder>
  );
}

class SignDialogComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.state = { login: '' };
  }

  render() {
    return (
      <Dialog title="Mars Exploration Program"
        message="How should we refer to you?">
        <input value={this.state.login}
          onChange={this.handleChange} />
        <button onClick={this.handleSignUp}>
          Sign Me Up!
        </button>
      </Dialog>
    );
  }

  handleChange(e) {
    this.setState({ login: e.target.value });
  }

  handleSignUp() {
    alert(`Welcome aboard, ${this.state.login}!`);
  }
}

SignDialogComponent.defaultProps = {
  // props
};

export default SignDialogComponent;