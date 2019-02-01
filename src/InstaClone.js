import React, { Component } from 'react';
import {
    View
    } from 'react-native';
import {MainFeed, Login, Camera, Profile} from "./components/screens";
import {createStackNavigator, createAppContainer, createBottomTabNavigator} from 'react-navigation';

const TabNavigator = createAppContainer(createBottomTabNavigator({
   feed: MainFeed,
   camera: Camera,
   profile: Profile
}));

class Tabs extends Component {
    static navigationOptions = {
        header: null
    };

    render(){
        return (
            <View style={{height:100+'%', width:100+'%'}}>
                <TabNavigator/>
            </View>
        )
    }
}


const AppNavigator = createStackNavigator({
    login: {screen:Login},
    main: {screen:Tabs},
}, {
    initialRouteName: 'login'
});

const InstaClone = createAppContainer(AppNavigator);

export default InstaClone;