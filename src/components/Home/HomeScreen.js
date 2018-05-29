import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View, Button
} from 'react-native';



export default class HomeScreen extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    title="Scan Barcode"
                    onPress={() => this.props.navigation.navigate('Scan')}
                />
            </View>
        );
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});