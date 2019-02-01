import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
} from 'react-native';
import config from '../../config'
import {PostFeed} from '../../components/container'

class MainFeed extends Component {
    static navigationOptions = {
        header: null
    };

    render() {

        return (
            <View style={{flex:1, width: 100+'%', height: 100+'%'}}>
                <StatusBar backgroundColor='rgb(245,245,245)' barStyle='dark-content'/>

                <View style={styles.tempNav}>
                    <Text style={{fontSize:25, fontStyle:'normal'}}>GuideSantai (Supir & Guide)</Text>
                </View>
                <PostFeed/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tempNav: {
        width: 100 +'%',
        height: 60,
        backgroundColor: 'rgb(245,245,245)',
        borderBottomColor: config.styleConstants.borderColor,
        borderBottomWidth: StyleSheet.hairlineWidth,
        justifyContent: 'center',
        paddingLeft: 10,
        alignItems: 'center'

    }
});

export default MainFeed;