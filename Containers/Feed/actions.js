import { SET_NEWS } from './reducer';
import { getNewsFeed } from '../../services/newsApi';
import { AsyncStorage } from 'react-native';

export function fetchNews(news) {
    return async function(dispatch, action) {
        const feed = news || await getNewsFeed();
        await AsyncStorage.setItem('News', JSON.stringify(feed));
        return dispatch({
            type: SET_NEWS,
            feed
        })
    }
}