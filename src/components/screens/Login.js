import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StatusBar} from 'react-native';

class Login extends Component {
    static navigationOptions = {
      header: null
    };

    loginFacebook(){
        return fetch('http://139.162.182.153:3000/auth/test').then((result)=>{
            return (JSON.parse(result._bodyText));
        }).then((jsonob)=>{
            alert(jsonob.message)
        }).catch((error)=>{
            console.log(error);
        });
    }

    render(){
        return (

            <TouchableOpacity style={{height:100+'%', width: 100+ '%', flex: 1, justifyContent: 'center', alignItems: 'center'}}
            // onPress={()=>this.props.navigation.navigate('main')}
                onPress={this.loginFacebook}>
                <StatusBar backgroundColor='rgb(245,245,245)' barStyle='dark-content'/>
                <Text>LOGIN PAGE</Text>
            </TouchableOpacity>
        )
    }
}

export default Login;