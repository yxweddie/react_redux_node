import {combineReducers} from 'redux';
import {ADD_LIKE_ITEM, DELETE_LIKE_ITEM, addLikeItem, deleteLikeItem} from '../actions/subscribeActions';

const initialState = {
    likedList : {},
    selectList: []
}

// imutable use Object.assign, filter, concat, map and reduce
const likeBlockReducer = (state = initialState, action) =>{
    switch (action.type){
        case  "GET":
            return action.payload;
        case ADD_LIKE_ITEM:
            // console.log(action.payload);
            return Object.assign({},state, {likedList : 
                Object.assign({},state.likedList, {[action.payload.index]: action.payload.item})
            });

        case DELETE_LIKE_ITEM:
            let nl = {};
            for (var key in state.likedList) {
                if (state.likedList.hasOwnProperty(key) && key != action.payload.index) {
                    nl[key] = state.likedList[key];
                }
            }
            return Object.assign({}, state, {likedList : nl});
        default:
            return state;
    }
}

// const selectListReducer = (state = initialState, action) => {
//     switch(action.type){
//         default:
//             return state;
//     }
// }


export default combineReducers({
    likeBlockReducer
    // selectListReducer
});