import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import axios from "axios"; // async
import thunk from "redux-thunk"; // generator 执行器

import reducers from './reducers/subscribeReducer';

const middleware = applyMiddleware(thunk,logger());

// pass the reducer and the initial state
const store = createStore(reducers,middleware);

// do the first dispatch maybe 
store.dispatch((dispatch)=>{
    dispatch({
        type : "GET",
        payload : {
            likedList : {},
            selectList : [
                "Food", "Music", "Science",
                "Heath", "IT", "Finance", "Aplle",
                "Company","Life", "Love", "Sports",
                "Code", "Js", "Java" ,"C++",
                "Country", "Jobs","Time"
            ]
        } 
    });
})

export default store;