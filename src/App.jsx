import React, { Component } from 'react'

export class App extends Component {
  render() {
    return (
      <article>
        <div>
          <a href="https://octodex.github.com//spectrocat/">
            <img
              className="cat"
              src="https://octodex.github.com//images/spectrocat.png"
              width="290"
              height="290"
              alt="Spectrocat"
            />
          </a>
        </div>
        <ul>
          <li>
            #44:
            <a
              className="catName"
              href="https://octodex.github.com//images/spectrocat.png"
            >
              <strong>Spectrocat</strong>
            </a>
          </li>
          <li>
            <a href="https://github.com/cameronmcefee">
              <img
                src="https://github.com/cameronmcefee.png"
                width="24px"
                height="24px"
                alt="cameronmcefee"
              />
            </a>
          </li>
        </ul>
      </article>
    )
  }
}
