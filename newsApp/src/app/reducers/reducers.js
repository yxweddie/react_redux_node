import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import * as ac from "../actions/action.js";

// rename it to the navBarReducer
const navBarReducer = (state = {sideBarState : false}, action) =>{
    if (action.type == ac.CHANGE_SIDE_BAR){
        return Object.assign({},state,{sideBarState :!state.sideBarState});
    }
    
    if(action.type == ac.REFRESH_SESSION){
        console.log("clear");
        sessionStorage.clear();
        return state;
    }

    return state;
};

const homeReducer  = (state = {contents : {}},action) =>{
    switch (action.type){
        case ac.FETCH_CONTENTS_START:
            return Object.assign({},{contents: {}});
            break;
        case ac.FETCH_CONTENTS_SUCCESS:
            return Object.assign({},{contents: action.contents});
            break;
        default:
            return state;
    }
}

export default combineReducers({
    navBarReducer,
    homeReducer,
    routing: routerReducer
});

