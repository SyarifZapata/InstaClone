import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StatusBar} from 'react-native';

class Profile extends Component {
    static navigationOptions = {
        header: null
    };

    render(){
        return (

            <TouchableOpacity style={{height:100+'%', width: 100+ '%', flex: 1, justifyContent: 'center', alignItems: 'center'}}
                              onPress={()=>this.props.navigation.navigate('main')}>
                <StatusBar backgroundColor='rgb(245,245,245)' barStyle='dark-content'/>
                <Text>LOGIN PAGE</Text>
            </TouchableOpacity>
        )
    }
}

export default Profile;