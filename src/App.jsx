import React, { Component } from 'react'
import { OctocatArticle } from './components/OctocatArticle'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import articles from './articles.json'

export class App extends Component {
  render() {
    const octocatArticlesFromData = articles.map(article => (
      <OctocatArticle
        key={article.id}
        imgLink={article.imgLink}
        catImg={article.catImg}
        catName={article.catName}
        artistLink={article.artistLink}
        artistImg={article.artistImg}
        artistName={article.artistName}
      />
    ))
    return (
      <div>
        <Header />

        {octocatArticlesFromData}

        <Footer />
      </div>
    )
  }
}
