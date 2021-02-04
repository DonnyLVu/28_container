import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, author, description }) => {
  return (
    <>
      <a> {title} </a>
      <p>Author: {author}</p>
      <p>Description: {description}</p>
    </>
  );
};
Article.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  description: PropTypes.string,
};
export default Article;
