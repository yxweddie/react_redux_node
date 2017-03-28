import {combineReducers} from 'redux';

// imutable use Object.assign, filter, concat, map and reduce
const counterReducer = (state = { counter : 0 }, actions)=>{
    switch (actions.type) {
        case "Add":
            // do it in a immutable version
            return Object.assign({},state, {counter : state.counter +1}); 
        case "E" :
            throw new Error("you got caught");
        default:
            return state;
    }
}



export default combineReducers({
    counterReducer
});