import React from 'react';
import {connect} from 'react-redux';

import { ADD_LIKE_ITEM, DELETE_LIKE_ITEM, addLikeItem, deleteLikeItem } from '../actions/subscribeActions';

import Header from './title';
import LikedBlock from './likedBlock';
import SelectBlock from './selectBlock';

@connect(
(store)=>{
    return {
        likedMap   : store.likeBlockReducer.likedList,
        selectList : store.likeBlockReducer.selectList
    };
},)
class SubscribeComponents extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        // console.log("likedBlock: " , this.props);
        return(
            <div>
                <Header />
                <LikedBlock  
                    likedMap   = {this.props.likedMap} 
                    onDeleteLikeItem = {(index) => {this.props.dispatch(deleteLikeItem(index))}}
                />
                <SelectBlock 
                    selectList = {this.props.selectList} 
                    likedMap   = {this.props.likedMap} 
                    onAddLikeItem={(index, item) => {this.props.dispatch(addLikeItem(index, item))}}
                />
            </div>
        );
    }
} 

export default SubscribeComponents;