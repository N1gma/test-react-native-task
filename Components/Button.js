import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { computeStyles } from '../utils/helpers';

export default function ({ style, textStyle, title, onPress, children }) {
    return(
        <TouchableOpacity
            style={ computeStyles(styles.submitButton, style) }
            onPress={ onPress }
        >
            {
                children
                    ?
                    children
                    :
                    <Text style={ computeStyles(styles.submitButtonText, textStyle) }>
                        { title }
                    </Text>
            }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    submitButton: {
        marginTop: 10,
        width: 150,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'gray'
    },
    submitButtonText: {
        textAlign: 'center',
        width: 100
    }
});