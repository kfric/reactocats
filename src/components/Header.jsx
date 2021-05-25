import React from 'react'

export class Header extends React.Component {
  render() {
    return (
      <header>
        <nav className="navLeft">
          <ul>
            <li>
              <a href="#">
                <img
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  width="40"
                  height="40"
                  alt="GithubLogo"
                />
              </a>
            </li>
            <li className="oct">
              <a href="#">Octodex</a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="https://octodex.github.com/faq/">FAQ</a>
            </li>
            <li>
              <a href="https://octodex.github.com/atom.xml">RSS</a>
            </li>
          </ul>
        </nav>

        <nav className="navRight">
          <ul>
            <li>
              <a class="test" href="https://twitter.com/githubdesign">
                Follow us on Twitter
              </a>
            </li>
            <li className="github">
              <a href="https://github.com/">GitHub.com</a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}
