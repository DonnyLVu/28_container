import React, { Component } from 'react';
import ArticleList from '../components/article/ArticleList';
import { getArticle } from '../services/newsApi';
import Search from '../components/search/Search';

export default class NewsSearch extends Component {
  state = {
    articles: []
  }

  componentDidMount() {
    getArticle()
      .then(articles => this.setState({ articles }));
  }

  handleChange = ({ target }) => {
    target.value.trim() && getArticle(target.value)
      .then(articles => this.setState({ articles }));
  }

  render() {
    const { articles } = this.state;
    return (
      <div>
        <Search onChange={this.handleChange} />
        <ArticleList articles={articles} />
      </div>
    );
  }
}
