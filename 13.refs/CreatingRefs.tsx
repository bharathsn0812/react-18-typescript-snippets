// CreatingRefs.tsx
// This file explains how to create refs in React.

import React, { Component } from 'react';

class CreatingRefs extends Component {
  // React.createRef() is used to create a ref that can be attached to a DOM element.
  myRef: React.RefObject<HTMLDivElement>;

  constructor(props: any) {
    super(props);
    // Initializing the ref
    this.myRef = React.createRef();
  }

  componentDidMount() {
    // Accessing the ref after the component has mounted
    console.log(this.myRef.current);
  }

  render() {
    return (
      // Attaching the ref to a DOM element
      <div ref={this.myRef}>
        This div has a ref attached.
      </div>
    );
  }
}

export default CreatingRefs;
