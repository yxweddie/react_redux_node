import React from 'react';


class LikedBlock extends React.Component{
    constructor(props){
        super(props);
    }
    delete(index){
        this.props.onDeleteLikeItem(index);
    }
    render(){
        //console.log("like Block: " , this.props);
        let likedList = this.props.likedMap;
        let likedListArray = new Array();
        let likedListKey = Object.keys(likedList);
        likedListKey.forEach(function(index){
            likedListArray.push(likedList[index]);
        });

        return(
            <div className= "mt10">
                <h2> Selected Categories (<em >{likedListArray.length}</em>) </h2>
                <div className = "selected-list">
                    <ul className = "feed-list">
                        {
                            likedListArray.length > 0 ?
                            likedListArray.map((item, index) => {
                                return (
                                    <li key = {index} style={{position: 'relative'}}>
                                        <span>{item}</span>
                                        <a className = "close"
                                            onClick={this.delete.bind(this,likedListKey[index])}>
                                        </a>
                                    </li>
                                );
                            })
                            :
                            <li className="empty-list">Please Choose</li>
                        }
                    </ul>
                </div>
            </div>
        );
    }
} 

export default LikedBlock;