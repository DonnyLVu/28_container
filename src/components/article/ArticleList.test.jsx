import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ArticleList from './ArticleList';

describe('ArticleList component', () => {
  afterEach(() => cleanup());
  it('renders ArticleList', () => {
    const { asFragment } = render(<ArticleList
      articles={[]}
      title="dummy title"
      author="dummy author"
      description="dummy description" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
