import { API_KEY } from '../static/constants';

export function getNewsFeed() {
    return fetch(`https://newsapi.org/v1/articles?source=cnn&sortBy=top&apiKey=${API_KEY}`).then(res => res.json())
}