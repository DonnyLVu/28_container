import React from 'react';
import PropTypes from 'prop-types';
import Article from './single-article';

const ArticleList = ({ articles }) => {
  const articleData = articles.map(article => (
    <li key={article.title}>
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
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  })).isRequired
};

export default ArticleList;
