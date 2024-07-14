// CallbackRefs.tsx
// This file explains how to use callback refs in React.

import React, { Component } from 'react';

class CallbackRefs extends Component {
  // Define a property to hold the DOM element
  myDiv: HTMLDivElement | null = null;

  setMyDivRef = (element: HTMLDivElement) => {
    // Assign the DOM element to the property
    this.myDiv = element;
  }

  componentDidMount() {
    // Access the DOM element after the component has mounted
    console.log(this.myDiv);
  }

  render() {
    return (
      // Use the callback ref to attach the ref to the DOM element
      <div ref={this.setMyDivRef}>
        This div uses a callback ref.
      </div>
    );
  }
}

export default CallbackRefs;
