import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {CounterActions} from './actions';

//using decorator
@connect(
(store)=>{
    return {
        counter : store.counterReducer.counter
    };
},)
class App extends React.Component{
    constructor(props){
        super(props);
    }
    click(){
        this.props.dispatch(CounterActions()); // pass from the provider
    }
    render(){
        return(
            <div>
                <h1> Hello Redux</h1>
                <h2> Counter: {this.props.counter}</h2>
                <button onClick={this.click.bind(this)}>Add</button>
            </div>
        );
    }
}
export default App;