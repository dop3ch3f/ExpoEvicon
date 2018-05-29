import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/components/Home/HomeScreen';
import Barcode from './src/components/Barcode/Barcode';
import { createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons';


const RootStack = createBottomTabNavigator(
  {
    HomeScreen,
    Barcode
  },
  {
    initialRouteName: 'HomeScreen'
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Scan') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }
  }
)

export default class App extends React.Component {

  render() {
    return (
      <RootStack />
    );
  }
}
