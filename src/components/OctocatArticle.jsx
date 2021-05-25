import React from 'react'

export class OctocatArticle extends React.Component {
  render() {
    return (
      <article>
        <main>
          <section>
            <article>
              <div>
                <a href={this.props.imgLink}>
                  <img
                    className="cat"
                    src={this.props.catImg}
                    width="290"
                    height="290"
                    alt={this.props.catName}
                  />
                </a>
              </div>
              <ul>
                <li>
                  #{this.props.Id}:
                  <a className="catName" href={this.props.catName}>
                    <strong>{this.props.catName}</strong>
                  </a>
                </li>
                <li>
                  <a href={this.props.artistLink}>
                    <img
                      src={this.props.artistImg}
                      width="24px"
                      height="24px"
                      alt={this.props.artistName}
                    />
                  </a>
                </li>
              </ul>
            </article>
          </section>
        </main>
      </article>
    )
  }
}
