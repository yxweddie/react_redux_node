import{applyMiddleware, createStore} from 'redux';
import reducers from './reducers';
import logger from 'redux-logger';
import axios from "axios"; // async
import thunk from "redux-thunk" // generator 执行器

// const logger = (store) => (next) => (action) => {
//     console.log( 'action fired', action);
//     // fire the action
//     next(action);
// }

// const error = (store) => (next) => (action) =>{
//     try{
//         next(action);
//     }catch(e){
//         console.log(`The action ${action.type} is having the problem`;)
//     }
// }
// could also do a error catch
// const middleware = applyMiddleware(logger,error);

const middleware = applyMiddleware(thunk,logger());

// pass the reducer and the initial state
const store = createStore(reducers, middleware);

// do the first dispatch maybe 
store.dispatch((dispatch)=>{
    dispatch({type : "INIT"});
    // promise
    // axios.get("ababs")
    //     .then((response)=>{
    //         dispatch({type : "RECEIVED", payload : resizeTo.data});
    //     })
    //     .catch((err)=>{
    //         dispatch({type: "ERROR", payload: "somthing wenr wrong"});
    //     })
    
})

export default store;