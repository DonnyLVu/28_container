export const getArticle = (search) => {
  // eslint-disable-next-line max-len
  return fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${process.env.API_KEY_NEWS}`)
    .then(res => res.json())
    .then(json => json.articles);
};
