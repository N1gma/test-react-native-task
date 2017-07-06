import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import * as loginActions from './actions';
import FormButton from '../../Components/Button';
import Validator from '../../utils/validator';
import ErrorLabel from '../../Components/ErrorLabel';

class Login extends Component {

    static navigationOptions = {
        title: 'Please Login'
    };

    constructor() {
        super(...arguments);
        this.validator = new Validator();
    }

    onInputChange = field => text => {
        this.props.inputChanged(field, text);
    };

    onSubmit = () => {
        const validationData = this.validator.validateGroup([
            {
                field: 'Login',
                data: this.props.login.trim(),
                rules: ['isEmail']
            },
            {
                field: 'Password',
                data: this.props.password.trim(),
                rules: [{
                    name: 'minLength',
                    len: 8
                }, 'isPassword']
            }
        ]);
        this.props.loginSubmitted(validationData);
    };

    getContainerStyle = () => {
        const { window } = this.props;
        return {
            width: window.width,
            top: window.orientation === 'PORTRAIT' ? window.height/3 - 100 : 10,
            height: window.height/2.3
        }
    };


    render() {
        const { login, password, window } = this.props;
        return (
            <View style={ [ styles.container, this.getContainerStyle() ]}>
                <View style={ styles.input }>
                    <TextInput
                        placeholder='username'
                        placeholderTextColor='gray'
                        autoFocus={ true }
                        keyboardType="email-address"
                        style={ styles.input }
                        onChangeText={ this.onInputChange('login') }
                        value={ login }
                        autoCorrect={ false }
                        autoCapitalize='none'
                    />
                </View>
                <ErrorLabel
                    errors={ this.props.validationErrors.Login ? this.props.validationErrors.Login.results : {} }
                />
                <View style={styles.input}>
                    <TextInput
                        placeholder='password'
                        placeholderTextColor='gray'
                        secureTextEntry={ true }
                        style={ styles.input }
                        onChangeText={ this.onInputChange('password') }
                        value={ password }
                        autoCorrect={ false }
                        autoCapitalize='none'
                    />
                </View>
                <ErrorLabel
                    errors={ this.props.validationErrors.Password ? this.props.validationErrors.Password.results : {} }
                />
                <FormButton
                    onPress={ this.onSubmit }
                    title="Login"
                />
                <ErrorLabel
                    errors={ this.props.authErrors }
                />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        alignSelf: 'center',
        top: 50,
        minHeight: 200,
        padding: 10
    },
    input: {
        borderBottomWidth: 2,
        borderBottomColor: 'blue',
        width: 250,
        //height: 40,
        flex: 1
    }
});

export default connect(({ loginReducer, commonReducer }) => ({
    login: loginReducer.login,
    password: loginReducer.password,
    authErrors: loginReducer.authErrors,
    validationErrors: loginReducer.validationErrors,
    window: commonReducer.window
}), { ...loginActions })(Login)