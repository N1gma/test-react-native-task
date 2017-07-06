import React from 'react';
import { Text, StyleSheet, ListView, View } from 'react-native';

export default function ({ errors }) {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    const errorsArray = Object.values(errors);
    return (
        <View style={ [styles.container, { flex: errorsArray.length * 1.5 || 1 }] }>
            <ListView
                style={ [styles.list, { flex: errorsArray.length || 1 }] }
                dataSource={ ds.cloneWithRows(errorsArray) }
                renderRow={ rowData => <Text style={ styles.listElement }>{ `- ${ rowData }` }</Text> }
                enableEmptySections={ true }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start'
    },
    list: {
        marginTop: 5,
        marginBottom: 5,
        flex: 1
    },
    listElement: {
        color: 'red',
        textAlign: 'center',
        alignSelf: 'center',
        fontSize: 16,
        flex: 1
    }
});