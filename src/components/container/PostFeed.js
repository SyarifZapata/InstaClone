import React, {Component} from 'react';
import {FlatList, Text} from 'react-native';
import {Post} from '../presentation';

class PostFeed extends Component{

    _renderItem({item}){
        return <Post/>
    }

    _returnKey(item){
        return item.toString();
    }

    render(){
        return (
           <FlatList
            data={[1,2,3,4,5,6]}
            keyExtractor={this._returnKey}
            renderItem={this._renderItem}
           />
        );
    }
}

export default PostFeed;