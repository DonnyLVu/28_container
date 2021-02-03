import React from 'react';
import PropTypes from 'prop-types';
import Article from './single-article';

const ArticleList = ({ articles }) => {
  const articleData = articles.map(article => (
    <li key={article.publishedAt}>
      <Article {...article} />
    </li>
  ));

  return (
    <ul>
      {articleData}
    </ul>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    source: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired
    })).isRequired,
    title: PropTypes.string.isRequired,
    publishedAt: PropTypes.string.isRequired
  })).isRequired
};

export default ArticleList;
