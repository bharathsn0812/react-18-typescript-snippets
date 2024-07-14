// AccessingDOMElements.tsx
// This file demonstrates how to access DOM elements using refs in React.

import React, { Component } from 'react';

class AccessingDOMElements extends Component {
  // Create a ref using React.createRef()
  myInputRef: React.RefObject<HTMLInputElement>;

  constructor(props: any) {
    super(props);
    this.myInputRef = React.createRef();
  }

  handleButtonClick = () => {
    // Access the DOM element through the ref and set focus on it
    if (this.myInputRef.current) {
      this.myInputRef.current.focus();
    }
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.myInputRef} placeholder="Click the button to focus me" />
        <button onClick={this.handleButtonClick}>Focus the input</button>
      </div>
    );
  }
}

export default AccessingDOMElements;
