import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import App from './Containers/App';
import store from './redux/store';


export default class TestApp extends React.Component {
    render() {
        return (
            <Provider store={ store }>
                <App/>
            </Provider>
        );
    }
}


//export default AppRegistry.registerComponent('TestApp', () => TestApp);