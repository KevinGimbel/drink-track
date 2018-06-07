import React, { Component } from 'react';

class ErrorPage extends Component {
  render() {
    return (
      <div className="page">
        <h1>Error</h1>
        <h2>Something went wrong.</h2>

        <p>Maybe the link has changed or the site is no longer available.</p>
        <p>Suggested actions:</p>
        <ul>
          <li><a href="/" title="Go back home">Go back home</a></li>
          <li><a href="/" title="Go back home">Really, there is only the home page</a></li>
          <li><a href="/imprint" title="Go to imprint">Ah, there is the imprint, right.</a></li>
          <li><a href="/" title="Go back home">But you should probably go back home</a></li>
        </ul>
      </div>
    )
  }
}

export default ErrorPage;
