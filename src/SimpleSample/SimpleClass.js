import React, { Component } from 'react';

class SimpleClass extends Component {
  constructor() {
    super();

    this.state = {
      text: '',
    };
  }

  componentDidMount(){
    document.title = " o texto é " + this.state.text;
  }

  componentDidUpdate(){
    document.title = " o texto é " + this.state.text;
  }

  render() {
    const isValid = this.state.text == 'devmt';

    const color = isValid ? 'green' : 'red';

    return (
      <div>
        <input
          text={this.state.text}
          onChange={(e) => this.setState({ text: e.target.value })}
        />
        <h1 style={{ color }}> {this.state.text} </h1>
      </div>
    );
  }
}

export default SimpleClass;
