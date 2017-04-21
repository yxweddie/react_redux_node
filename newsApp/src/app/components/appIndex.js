import React from 'react';
import NavBar from './navbar.js';
import SideBar from './sidebar.js';
import Home from './home.js';
import * as action from "../actions/action.js"
import "../style/app.less";

class AppIndex extends React.Component{
    constructor(props){
        super(props);  
    }
    
    render(){
        //console.log(this.props);
        return (
            <div className = "container" style = {{position: 'relative'}}>
               < NavBar  contents     = {this.props.contents} fetchContents = {(source)=> this.props.dispatch(action.fetch_contents(source))}  sideBarState = {this.props.sideBarState} refresh = {() => this.props.dispatch(action.refresh_session())} changeSideBar = {()=>{this.props.dispatch(action.change_side_bar())}}/>
               < Home    contents     = {this.props.contents}      fetchContents = {(source)=> this.props.dispatch(action.fetch_contents(source))}/>
               < SideBar changeSideBar = {()=>{this.props.dispatch(action.change_side_bar())}} sideBarState = {this.props.sideBarState} fetchContents = {(source)=> this.props.dispatch(action.fetch_contents(source))} />
            </div>
        );
    } 
}

export default AppIndex;