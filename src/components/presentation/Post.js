import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    TouchableOpacity
} from 'react-native';

import config from '../../config'

class Post extends Component {

    constructor(){
        super();
        this.state = {
            liked : false,
            screenWidth: Dimensions.get('window').width
        };
    }

    lastTap = null;
    handleDoubleTap(){
        const now = Date.now();
        const DOUBLE_PRESS_DELAY = 300;
        if (this.lastTap && (now- this.lastTap) < DOUBLE_PRESS_DELAY){
            this.likeToggled()
        }else {
            this.lastTap = now
        }

    }

    likeToggled(){
        this.setState({
            liked :!this.state.liked
        })
    }

    render() {
        const imageHeight = Math.floor(this.state.screenWidth * 1.1);
        const heartIconColor = (this.state.liked) ? 'rgb(252,61,57)' : null;

        return (
           <View style = {{width: 100+'%'}}>
                <View style={styles.userBar}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image
                            style = {styles.userPic}
                            source = {{uri: 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-1/p40x40/21317883_10214431793775060_6996057014080199604_n.jpg?_nc_cat=103&_nc_ht=scontent-frx5-1.xx&oh=b96e95cf3ff87057503bf4cd352af75a&oe=5CF5C0C6'}}
                        />
                        <Text style={{marginLeft: 10}}>Syarif Zapata</Text>
                    </View>
                    <View>
                        <Text style={{fontSize: 30}}>...</Text>
                    </View>
                </View>

                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={()=>{this.handleDoubleTap()}}>
                    <Image
                        style={{width: 100 + '%', height: imageHeight}}
                        source={{uri: 'https://i.ibb.co/Qnmt4cM/puppy2.jpg'}}/>
                </TouchableOpacity>


                <View style={styles.iconBar}>
                    <Image style={[styles.icon, {tintColor: heartIconColor}]} source={config.images.heartIcon}/>
                    <Image style={styles.icon} source={config.images.chatIcon}/>
                    <Image style={styles.icon} source={config.images.forwardIcon}/>
                </View>

                <View style={styles.commentBar}>
                    <Image style={{width:20, height: 20}} source={config.images.filledHeartIcon}/>
                    <Text style={{marginLeft: 5}}>126 likes</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    userBar: {
        width: 100 +'%',
        height: config.styleConstants.rowHeight,
        flexDirection: 'row',
        paddingHorizontal: 10,
        justifyContent: 'space-between'
    },
    userPic: {
        height: 40,
        width: 40,
        borderRadius: 20
    },
    iconBar: {
        height: config.styleConstants.rowHeight,
        width: 100 + '%',
        borderColor: config.styleConstants.borderColor,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: 'row',
        alignItems: 'center'

    },
    icon: {
        marginLeft: 10,
        width: 40,
        height: 40
    },
    commentBar: {
        width: 100 + '%',
        height: config.styleConstants.rowHeight,
        borderColor: config.styleConstants.borderColor,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        alignItems: 'center',
        marginLeft: 10,
        flexDirection: 'row'
    }
});

export default Post;