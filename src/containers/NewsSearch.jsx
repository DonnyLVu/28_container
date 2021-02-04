import React, { Component } from 'react';
import ArticleList from '../components/article/ArticleList';
import { getArticle } from '../services/newsApi';
import Search from '../components/search/Search';

export default class NewsSearch extends Component {
  state = {
    articles: [],
    loading: true,
  }

  componentDidMount() {
    getArticle()
      .then(articles => this.setState({ articles }))
      .then(() => this.setState({ loading: false }));
  }

  handleChange = ({ target }) => {
    target.value.trim() && getArticle(target.value)
      .then(articles => this.setState({ articles }));
  }

  render() {
    const { articles, loading } = this.state;
    return (
      <div>
        <Search onChange={this.handleChange} />
        {!loading ? <ArticleList articles={articles} />
          : <h1>Loading...</h1>
        }
      </div>
    );
  }
}
