import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: "" };
  }

  static getDerivedStateFromError(error) {
    // Update state to indicate an error occurred
    return { hasError: true, errorMessage: error.message };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service here
    console.error("Error caught by Error Boundary: ", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div className="error-message">Something went wrong: {this.state.errorMessage}</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
