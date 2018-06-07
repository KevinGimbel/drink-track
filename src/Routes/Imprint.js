import React, { Component } from 'react';

class ImprintPage extends Component {
  render() {
    return (
      <div className="page">
        <h1>Imprint</h1>

        <p><a href="https://www.kevingimbel.com">Kevin Gimbel</a> is responsible for the content of this website.</p>
        <p>You can contact him by e-Mail (as listed on <a href="https://www.kevingimbel.com/imprint">kevingimbel.com/imprint</a>) or via <a href="https://twitter.com/_kevinatari">Twitter</a></p>

        <h2>About drink-track.link</h2>
        <p>drink-track.link is a client-side only Web App to drack daily liquid intake. It is currently in an early alpha and things may change without notice.</p>
        <p>There is no server-side on which data is stored, all data is stored in localStorage on the client.</p>

        <h2>Technology</h2>
        <p>drink-track.link is...</p>
        <ul>
          <li>... build with <a href="https://reactjs.org/" title="ReactJS website with information about the library">ReactJS</a></li>
          <li>... using no server-side code, relying entirely on <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage" title="MDN web docs documentation of localStorage">localStorage</a></li>
          <li>... Open Source and available on <a href="https://github.com/kevingimbel/drink-track" title="All source code is published on GitHub.com">GitHub</a></li>
          <li>... hosted on <a href="https://aws.amazon.com/s3/?nc1=h_ls" title="Amazon Web Services landing page for S3 storage ">Amazon S3</a></li>
        </ul>

        <h2>Tracking and Cookies</h2>
        <p>There is currently no tracking technology in place and no cookies are used. As mention under "Technology" a browser API called "localStorage" is used to save data on the client ("Your Browser") which can be retrieved again if this website is visited again.</p>
      </div>
    )
  }
}

export default ImprintPage;
