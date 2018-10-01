import React from 'react';
import { withRouter } from 'react-router';

class ScrollToTop extends React.Component {

  // using componentDidMount to monitor our
  // current position vs. last position.
  componentDidMount(prevProps) {
    if (this.props.location !== prevProps.location) {

      // use vDOM manipulation to scroll to the top based on our logic
      window.scrollTo(0,0);
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
