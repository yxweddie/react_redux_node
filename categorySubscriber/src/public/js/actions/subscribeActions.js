const ADD_LIKE_ITEM    = 'ADD_LIKE_ITEM';
const DELETE_LIKE_ITEM = 'DELETE_LIKE_ITEM';

function addLikeItem (index, item){
    return {
        type: ADD_LIKE_ITEM,
        payload : {
            index,
            item
        }
    }
}

function deleteLikeItem (index){
    return {
        type: DELETE_LIKE_ITEM,
        payload : {
            index
        }
    }
}

export {ADD_LIKE_ITEM, DELETE_LIKE_ITEM, addLikeItem, deleteLikeItem};