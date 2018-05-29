import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';
import {
    Camera,
    BarCodeScanner,
    Permissions
} from 'expo';

export default class Barcode extends React.Component {
    state = {
        hasCameraPermission: null,
    }
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        Permissions.askAsync(Permissions.CAMERA)
            .then(status => this.setState({ hasCameraPermission: status === 'granted' }))
            .catch(err => console.log(err))
    }

    render() {
        const { hasCameraPermission } = this.state;

        /*if (hasCameraPermission === null) {
            return <View style={styles.container} ><Text>Requesting for Camera Permissions</Text></View>;
        } else if (hasCameraPermission === false) {
            return <View style={styles.container} ><Text>No access to Camera</Text></View>
        } else {*/
        return (
            <View style={styles.container} >
                <BarCodeScanner
                    onBarCodeRead={this._handleBarCodeRead}
                    style={StyleSheet.absoluteFill}
                />
                <Button
                    title="Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        );
        //}
    }

    _handleBarCodeRead = ({ type, data }) => {
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
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