// Using componentDidCatch

// The componentDidCatch lifecycle method works along with static getDerivedStateFromError to catch errors in any component below it in the tree.
// This method is used to log error information.

import React, { Component, ErrorInfo } from 'react';

interface Props {}

interface State {
  hasError: boolean;
}

class ComponentDidCatchExample extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error caught in componentDidCatch:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return <div>{this.props.children}</div>;
  }
}

export default ComponentDidCatchExample;
