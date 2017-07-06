import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import { AppNavigator } from '../redux/navigator';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import { layoutChanged } from '../redux/commonActions'

class App extends Component {

    onLayout = () => {
        this.props.layoutChanged(Dimensions.get('window'));
    };

    render() {
        return (
            <View
                style={ { flex: 1 } }
                onLayout={ this.onLayout }
            >
                <AppNavigator
                    navigation={ addNavigationHelpers({
                        dispatch: this.props.dispatch,
                        state: this.props.navigator,
                    }) }
                    screenProps={ this.props.window }
                />
            </View>
        )
    }
}

export default connect(state => ({
    navigator: state.navigatorReducer,
    window: state.commonReducer.window
}), { layoutChanged })(App);