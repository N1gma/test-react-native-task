import React, { Component } from 'react';
import { AsyncStorage, StyleSheet, View, ListView, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import * as feedActions from './actions';
import { logOut } from '../../Containers/Login/actions';
import FormButton from '../../Components/Button';

class Feed extends Component {

    static navigationOptions = {
        title: 'Feed'
    };

    componentWillMount() {
        const self = this;
        AsyncStorage.getItem('News', (err, res) => {
            if (!err) {
                self.props.fetchNews(JSON.parse(res));
            } else {
                self.props.fetchNews();
            }
        });
    }

    renderFeedRow(rowData = {}){
        return (
        <View>
            <Text>{ rowData.title }</Text>
            <Text>{ rowData.description }</Text>
        </View>
        )
    }

    render() {
        const { window, feed, logOut } = this.props;
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        return (
            <View style={ [ styles.container, { width: window.width, height: window.height } ] }>
                <FormButton
                    onPress={ logOut }
                    title="Log Out"
                    style={ styles.logOutButton }
                />
                <ListView
                    dataSource={ ds.cloneWithRows(feed.articles || []) }
                    renderRow={ this.renderFeedRow }
                    enableEmptySections={ true }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    logOutButton: {
        alignSelf: 'center'
    }
});

export default connect(
    state => ({
        feed: state.feedReducer.feed,
        window: state.commonReducer.window
    }),
    { ...feedActions, logOut }
)(Feed)